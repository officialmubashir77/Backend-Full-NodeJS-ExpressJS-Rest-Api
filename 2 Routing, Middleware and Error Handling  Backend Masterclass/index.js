const express = require('express');
const app = express();
const dotenv = require('dotenv');
const logger = require('./utils/logger');
dotenv.config();
const port = process.env.PORT || 3000;

// Built-in Middleware
// express.json() -> to parse JSON data
// express.urlencoded() -> to parse form data (x-www-form-urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Unknown Routes Middleware
app.use((req, res, next) => {
  res.status(404).json({ message: 'Route Not Found' });
});


// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!', error: err.message });
});

// Routes
app.get("/error", (req, res) => {
  throw new Error("This is a forced error.");
});

app.get('/', (req, res) => {
  res.send('Hello World!')
});

app.post('/', (req, res) => {
  console.log("Headers:", req.headers);
  console.log('req.body:', req.body);
  res.send('Data received');
});

// Query Parameters http://localhost:3000/search?keyword=chatgpt&page=2
// query parameters used for searching, filtering, pagination etc
app.get('/search', (req, res) => {
  const {keyword , page} = req.query;
  console.log('Query Params:', req.query);
  res.send(`Search results for keyword: ${keyword}, page: ${page}`);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});