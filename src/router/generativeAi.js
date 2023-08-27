const express = require('express');
const router = express.Router();

router.use((request, response, next) => {
  next();
});

router.get('/', (request, response) => {
  response.status(200).send('Gen AI!');
});

router.get('/generate', (request, response) => {
  response.status(200).json({
    message: 'Hello from GenAI!',
  });
});

module.exports = router;
