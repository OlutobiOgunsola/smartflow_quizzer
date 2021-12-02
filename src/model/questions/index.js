'use strict';

const mongoose=require('mongoose');

const QuestionSchema=new mongoose.Schema({
    question: {
        type: String,
        required: true,
        maxLength: [600,'Question must not be longer than 600 characters'],
        minLength: [4,'Question must not be less than 4 characters']
    },
    format: {
        type: String,
        default: 'multiple_choice',
        required: [true, 'Question must contain question_format']
    },
    category: {
        type: String,
        required: [true, 'Question must include category'],
    }
    ,
    answers: {
        type: Array,
        required: [true,'Question must contain answers of type: Array']
    },
    answer: {
        type: Number,
        required: [true, 'Question must contain correct answer index'],
        default: 0
    },
    is_admin: {
        type: Boolean,
        default: true,
    }
},{
    timestamps: true,strictQuery: true
});


module.exports.Questions=mongoose.model('Questions',QuestionSchema);