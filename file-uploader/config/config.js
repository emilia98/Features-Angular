const path = require('path');

module.exports = {
  development: {
    connectionString: 'mongodb://localhost:27017/File_Uploader_Angular',
    rootPath: path.normalize(
      path.join(__dirname, '../')
    )
  },
  production: {}
};
