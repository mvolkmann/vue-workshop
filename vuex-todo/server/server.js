const PORT = 1919;

const bodyParser = require('body-parser');
const cors = require('cors');
const express = require('express');
const morgan = require('morgan');
const path = require('path');

const todoMap = {};

const app = express();
app.use(cors());
app.use(morgan('short'));
app.use(express.static(path.resolve(__dirname, '../dist')));
app.use(bodyParser.json({limit: '4mb'}));

app.get('/heartbeat', async (req, res) => {
  res.send('I am alive!');
});

/**
 * Delete a todo.
 */
app.delete('/todo/:id', async (req, res) => {
  const {id} = req.params;
  console.log('delete id =', id);
  console.log('delete todoMap =', todoMap);
  if (todoMap[id]) {
    delete todoMap[id];
    console.log('deleted todo with id', id);
    res.sendStatus(200);
  } else {
    res.status(400).send(`no todo with id ${id} exists`);
  }
});

/**
 * Get all todos.
 */
app.get('/todo', async (req, res) => {
  const todos = Object.values(todoMap);
  res.send(todos);
});

/**
 * Create a todo.
 */
app.post('/todo', async (req, res) => {
  const todo = req.body;
  if (todoMap[todo.id]) {
    res.status(400).send(`todo with id ${todo.id} already exists`);
  } else {
    todoMap[todo.id] = todo;
    console.log('created todo with id', todo.id);
    console.log('created todoMap =', todoMap);
    res.sendStatus(200);
  }
});

/**
 * Update a todo.
 */
app.put('/todo', async (req, res) => {
  const todo = req.body;
  if (todoMap[todo.id]) {
    todoMap[todo.id] = todo;
    console.log('updated todo with id', todo.id);
    res.sendStatus(200);
  } else {
    res.status(400).send(`no todo with id ${todo.id} exists`);
  }
});

app.listen(PORT, () => console.info('ready'));
