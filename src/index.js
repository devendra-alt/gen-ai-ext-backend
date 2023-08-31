const express = require('express');
const generativeAi = require('./router/generativeAi');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3200;

app.use(
  cors({
    origin: '*',
  })
);

app.get('/', (request, respond) => {
  respond.status(200).send('GenAI Home!');
});

app.use('/generativeAI', generativeAi);

app.listen(port, () => {
  console.log(`gen-ai-ext server running on port ${port}`);
});
