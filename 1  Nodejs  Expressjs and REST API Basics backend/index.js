const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.get('/api/courses', (req, res) => {
  res.send([
    {id:1, name:'course1'},
    {id:2, name:'course2'},
    {id:3, name:'course3'}
  ]);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});