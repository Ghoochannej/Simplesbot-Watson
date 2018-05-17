const express = require('express');

const app = express();
app.use(express.static('./public'));
const port = 3000;

const AssistantV1 = require('watson-developer-cloud/assistant/v1');

const assistant = new AssistantV1({
    username:"ced6f9f3-72c9-4e28-8234-7f018ab3a141",
    password:"kqwxNhnAjnN4",
    url: 'https://gateway.watsonplatform.net/assistant/api/',
    version:  '2018-05-17',
});

app.get('/conversation/:text*?', (req, res) => {
  const { text } = req.params;


const params = {
    input: { text },
    workspace_id: "edd9cee7-52f4-44ea-a976-656a8642fd6c",
};

assistant.message(params, (err, response) => {
    if (err) res.status(500).json(err);

    res.json(response);
  });
});

app.listen(port, () => console.log(`Running on port ${port}`));