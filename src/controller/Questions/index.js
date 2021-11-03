var QuestionService = require('../../services/Questions')

var QuestionsController = function () {

    questionService = QuestionService();

    this.getQuestions = function (req, res, next) {
        let { type, quantity } = req.params;
        let questions = this.questionService.getQuestions(type, quantity);
        res.status(200).json({
            message: 'success',
            data: questions
        })
    }
}

module.exports = QuestionsController;