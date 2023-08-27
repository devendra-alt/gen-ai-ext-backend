const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (request, respond) => {
  respond.status(200).json({
    message: 'Hello from GenAI!',
  });
});

app.listen(port, () => {
  console.log(`gen-ai-ext server running on port ${port}`);
});
