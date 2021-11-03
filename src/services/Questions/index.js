const questionBag = require('../../../lib/questionBag');

var QuestionService = function () {
    this.getQuestions = function (type, limit) {

        var selectQuestion=function(question) {
            console.log(question.category, type)
            return question.category === type;
        }

        let localQuestionBag = [...questionBag];
        let selectedQuestions = localQuestionBag.filter(selectQuestion);
        console.log(selectedQuestions)
        let finalQuestion = [];

        while(limit) {
            let index = Math.floor(Math.random() * selectedQuestions.length + 1);
            finalQuestion.push(selectedQuestions[index]);
            limit--;
        }

        return finalQuestion
    }

    this.checkAnswers = function() {
        let finalAnswer = 0, correctAnswers = [], wrongAnswers = [];
        return null;
    }


    return {
        getQuestions: this.getQuestions
    }
}

module.exports = QuestionService;