'use strict';

// const {QuestionBag} = require('../../lib/questionBag');

// var generateQuestions = function (questionBag, limit) {
//     let finalQuestionArray = [];

//     while(limit) {
//         let question = Math.floor(Math.random(questionBag.length + 1)); // select random question within question bag
//         finalQuestionArray.push(question);
//         limit--
//     }

//     return finalQuestionArray;
// }

const {Questions}=require('./questions');
const {Users}=require('./user');
const mongoose=require('mongoose');

mongoose.set('useCreateIndex',true);

const connectDB=() => {
    return mongoose.connect(process.env.DATABASE_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
};

const Models={
    Users,Questions
};

module.exports={
    connectDB, Models
};