const express = require('express');
const app = express();
const dotenv = require('dotenv');
const logger = require('./utils/logger');
const userRoutes = require('./routes/user.route.js');
dotenv.config();
const port = process.env.PORT || 3000;

// Built-in Middleware
// express.json() -> to parse JSON data
// express.urlencoded() -> to parse form data (x-www-form-urlencoded)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(logger);

// Routes 
app.use("/api/v1/users", userRoutes);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});