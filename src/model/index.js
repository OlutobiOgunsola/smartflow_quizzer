const {QuestionBag} = require('../../lib/questionBag');

var generateQuestions = function (questionBag, limit) {
    let finalQuestionArray = [];

    while(limit) {
        let question = Math.floor(Math.random(questionBag.length + 1)); // select random question within question bag
        finalQuestionArray.push(question);
        limit--
    }

    return finalQuestionArray;
}