class QuestionSchema {
    constructor(question = '', answers = [], answer = 0, category="javascript", format="multiple_choice", difficulty="easy") {
        this._question = question;
        this._answer = answer + 1, // adding 1 because 0 will throw a false in validate method below as it is a falsy value. On the frontend, the correct answer must be taken back to zero index
        this._answers = answers,
        this._category = category,
        this._format = format,
        this._difficulty = difficulty
    }

    mapToModel = () => ({
        question: this._question,
        answers: this._answers,
        answer: this._answer,
        category: this._category
    })

    validate = () => {
        return (this._question && this._answers.length === 4, this._categpry !== '', this._difficulty !== '', this._format !== '', this._answer)
    }
}

module.exports = QuestionSchema;