var QuestionService = require('../../services/questions')

var QuestionsController = function () {

    questionService = new QuestionService();

    this.getQuestions = function (req, res, next) {
        let { type, quantity } = req.params;
        let questions = questionService.getQuestions(type, quantity);
        res.status(200).json({
            message: 'success',
            data: questions
        })
    }

    this.addQuestions=function(req,res,next) {
        let { question, answer, answers, category, difficulty, format}=req.body;
        let questions = questionService.addQuestion({
            question, answer, answers, category, difficulty, format
        });
        res.status(200).json({
            message: 'success',
            data: questions
        });
    }
}

module.exports = QuestionsController;