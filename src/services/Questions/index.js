const questionBag = require('../../../lib/questionBag');
const { Questions } = require('../../model/index').Models;
const Error = require('../../lib/errors');
const QuestionSchema=require('../../schemas/Questions');

/** Class QuestionService
 *  @kind class
 *  @return {Object} QuestionService - The question service object
 */

class QuestionService {
    constructor() {
       /**
        * @function getQuestions - returns questions list
        * @param {Number} quantity - number of questions to get
        * @param {String} category - category of questions to get
        * @param {String} difficulty - category of questions to get
        * @param {String} format - category of questions to get
        */

        let QuestionModel = new Questions();
        let Errors = new Error();

        console.log(QuestionModel)

        this.getQuestions = function (quantity = 10, 
            category = 'javascript', 
            difficulty = 'easy', 
            format = 'multiple_choice'){

                let questions = Questions.findOne({
                    category, difficulty, format
                })

                if(!questions) {
                    return Errors.Error('QuestionError',400,`Cannot get questions of category: ${category} and difficulty: ${difficulty} and format: ${format} `)
                }

                return questions;
        }

        this.addQuestion = function (questionObject) {
            return new Promise(async (resolve, reject) => {
                let questionModelObject = new QuestionSchema(questionObject);
                if(!questionModelObject.validate()) {
                    return Errors.Error('QuestionError',400,'Incomplete/Incompatible parameters passed to create question method');
                }

                let concreteQuestion=QuestionModelObject.mapToModel();
                let newQuestion=await new Questions(concreteQuestion);

                newQuestion.save(err => {
                    if(err) {return reject(Errors.Error('QuestionError',500,'Server error, something broke!',err));};
                });

                resolve(newQuestion)
            })
        }

        this.editQuestion = function (id) {
            return new Promise(async (resolve, reject) => {
                let question = Question.find({
                    id
                })

                if(!question) {
                    return reject(Errors.Error('QuestionError', 400, 'Cannot get question with id: ' + id))
                }

                resolve(question)
            })
        }

        this.deleteQuestion = function(id) {
            return new Promise(async (resolve, reject) => {
                try {
                    let question = Question.findOneAndDelete({
                        id
                    })
                } catch (e) {
                    return reject(Errors.Error('QuestionError', 500, 'Something went wrong'))
                }
            })
        }
    }
}

module.exports = QuestionService;