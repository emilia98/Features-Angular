const mongoose = require('mongoose');
const colors = require('colors');
mongoose.Promise = global.Promise;

module.exports = (config) => {
  mongoose.connect(config.connectionString, { useNewUrlParser: true });
  let db = mongoose.connection;

  if (db.readyState === 0) {
    throw new Error('Error occurred while connecting to db...');
  }

  console.log(colors.magenta('Connected to db...'));
};
