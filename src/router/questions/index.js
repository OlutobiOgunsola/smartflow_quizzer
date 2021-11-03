var {Router} = require('express');
var QuestionsController = require('../../controller/Questions')

var QuestionRouter = function () {
        let controller  = new QuestionsController();
        
        return Router()
                .get(`/:type/:quantity`, controller.getQuestions)
}

let questionRouter = new QuestionRouter();

module.exports=questionRouter;