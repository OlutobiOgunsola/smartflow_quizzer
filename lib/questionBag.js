const questionBag = [
    {
        id: 1,
        question: "What is hoisting in Javascript",
        category: "javascript",
        difficulty: 1,
        answers: [
            {
                id: 1,
                answer: "Movement of initialized variables to the top of a module/file for module/file-wide access"
            },
            {
                id: 2,
                answer: "Repositioning of a flag to the top of a pole"
            },
            {
                id: 3,
                answer: "A technique for dynamic styling of Vue components"
            },
            {
                id: 4,
                answer: "Repeated usage of the command line interface"
            },
        ],
        answerId: 1
    },
    {
        id: 2,
        question: "What is the name of NodeJS's creator",
        category: "javascript",
        difficulty: 1,
        answers: [
            {
                id: 1,
                answer: "Darken Rahl"
            },
            {
                id: 2,
                answer: "Ryan Dahl"
            },
            {
                id: 3,
                answer: "Milin Shah"
            },
            {
                id: 4,
                answer: "Burnaboy"
            },
        ],
        answerId: 2
    },
    {
        id: 3,
        question: "In Javascript, 0.2 + 0.3 = 0.4",
        category: "javascript",
        difficulty: 1,
        answers: [
            {
                id: 1,
                answer: "True"
            },
            {
                id: 2,
                answer: "Certainly true"
            },
            {
                id: 3,
                answer: "Maybe true"
            },
            {
                id: 4,
                answer: "False"
            },
        ],
        answerId: 4
    },
    {
        id: 4,
        question: "Which of these is not a way to create an Object in Javascript",
        category: "javascript",
        difficulty: 1,
        answers: [
            {
                id: 1,
                answer: "Object.create()"
            },
            {
                id: 2,
                answer: "Object.assign()"
            },
            {
                id: 3,
                answer: "{}"
            },
            {
                id: 4,
                answer: "Object.initialize({})"
            },
        ],
        answerId: 4
    },
    {
        id: 5,
        question: "What does the global object refer to in a Chromium environment",
        category: "javascript",
        difficulty: 1,
        answers: [
            {
                id: 1,
                answer: "Window"
            },
            {
                id: 2,
                answer: "Garage"
            },
            {
                id: 3,
                answer: "This"
            },
            {
                id: 4,
                answer: "Context"
            },
        ],
        answerId: 1
    },
    {
        id: 6,
        question: "What is referential transparency",
        category: "javascript",
        difficulty: 2,
        answers: [
            {
                id: 1,
                answer: "A condition where a function returns it's direct inputs without any processing"
            },
            {
                id: 2,
                answer: "A condition where a function can be replaced by its return value effectively"
            },
            {
                id: 3,
                answer: "A condition where a function accepts integers and returns a boolean"
            },
            {
                id: 4,
                answer: "A condition where a function has a 'null' parameter"
            },
        ],
        answerId: 2
    },
    {
        id: 7,
        question: "At what range does Javascript throw a 'StackFramesExceeded' error",
        category: "javascript",
        difficulty: 1,
        answers: [
            {
                id: 1,
                answer: "135000"
            },
            {
                id: 2,
                answer: "13500"
            },
            {
                id: 3,
                answer: "210000"
            },
            {
                id: 4,
                answer: "21000"
            },
        ],
        answerId: 4
    },
    {
        id: 8,
        question: "What will be the return type of 'function(x)/n{return x===1}'",
        category: "javascript",
        difficulty: 2,
        answers: [
            {
                id: 1,
                answer: "Boolean"
            },
            {
                id: 2,
                answer: "Integer"
            },
            {
                id: 3,
                answer: "Float"
            },
            {
                id: 4,
                answer: "String"
            },
        ],
        answerId: 1
    },
    {
        id: 9,
        question: "What is the difference between Array.forEach and Array.map",
        category: "javascript",
        difficulty: 1,
        answers: [
            {
                id: 1,
                answer: "Map runs a function in reverse order while ForEach runs in order"
            },
            {
                id: 2,
                answer: "Map accepts predicates only, while ForEach accepts all expressions"
            },
            {
                id: 3,
                answer: "ForEach returns null, while Map returns an array"
            },
            {
                id: 4,
                answer: "Map opens up the OS local google maps, while ForEach does not"
            },
        ],
        answerId: 2
    },
    {
        id: 10,
        question: "When is a function refered to as an Identity",
        category: "javascript",
        difficulty: 3,
        answers: [
            {
                id: 1,
                answer: "When it returns its direct inputs without any processing"
            },
            {
                id: 2,
                answer: "When it can successfully call another function and pass null inputs"
            },
            {
                id: 3,
                answer: "When it is utilized as an error handler"
            },
            {
                id: 4,
                answer: "Wizkid"
            },
        ],
        answerId: 1
    },
    {
        id: 11,
        question: "Which of these is not an array method",
        category: "javascript",
        difficulty: 1,
        answers: [
            {
                id: 1,
                answer: "Array.flat"
            },
            {
                id: 2,
                answer: "Array.map"
            },
            {
                id: 3,
                answer: "Array.plot"
            },
            {
                id: 4,
                answer: "Array.pop"
            },
        ],
        answerId: 1
    },
    {
        id: 12,
        question: "When a function accepts no arguments, it is sometimes referred to as a ______ function",
        category: "javascript",
        difficulty: 3,
        answers: [
            {
                id: 1,
                answer: "Higher Abstract"
            },
            {
                id: 2,
                answer: "Concise"
            },
            {
                id: 3,
                answer: "Referential"
            },
            {
                id: 4,
                answer: "Point Free"
            },
        ],
        answerId: 4
    },
]

module.exports = questionBag