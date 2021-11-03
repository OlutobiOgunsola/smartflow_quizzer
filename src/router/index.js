const express = require('express');
const router = express.Router();

const QuestionsRouter = require('./questions');

router.use('/questions', QuestionsRouter);

module.exports = router;