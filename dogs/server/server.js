const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');

const app = express();
app.use(morgan('short'));
app.use(bodyParser.text());
app.use(cors());

const dogMap = {};
let lastId = 0;

function addDog(name) {
  const id = ++lastId;
  const dog = {id, name};
  dogMap[id] = dog;
  return dog;
}

addDog('Eddie');
addDog('Snoopy');

app.get('/dog', (req, res) => {
  res.send(Object.values(dogMap));
});

app.delete('/dog/:id', (req, res) => {
  const {id} = req.params;
  const found = Boolean(dogMap[id]);
  if (found) delete dogMap[id];
  res.sendStatus(found ? 200 : 404);
});

app.post('/dog', (req, res) => {
  const name = req.body;
  res.send(addDog(name));
});

app.listen(1919, () => console.log('ready'));
