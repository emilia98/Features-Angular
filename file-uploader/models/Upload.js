const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const uploadSchema = mongoose.Schema({
  galleryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Gallery'
  },
  uploadLink: {
    type: String,
    default: null
  }
});

const Upload = mongoose.model('Upload', uploadSchema);
module.exports = Upload;
