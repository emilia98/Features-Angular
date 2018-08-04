const express = require('express');
const cors = require('cors');
const colors = require('colors/safe');

// #Configurations
const db = require('./config/db');
const config = require('./config/config');
const appConfig = require('./config/express');

const port = 5000;

const app = express();
const environment = process.env.NODE_ENV || 'development';

app.use(cors());

db(config[environment]);
app.listen(port, () => {
  console.log(colors.blue(`App is running on port ${port}...`));
});
appConfig(app, config[environment]);
