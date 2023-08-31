const express = require('express');
const router = express.Router();

router.use((request, response, next) => {
  next();
});

router.post('/', (request, response) => {
  response.status(200).send('Gen AI!');
});

router.post('/generate', (request, response) => {
  response.status(200).json({
    message: 'Hello from GenAI!',
  });
});

module.exports = router;
