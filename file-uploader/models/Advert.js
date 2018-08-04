const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const advertSchema = mongoose.Schema({
  galleryId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Gallery'
  },
  title: {
    type: String,
    default: ''
  }
});

const Advert = mongoose.model('Advert', advertSchema);
module.exports = Advert;
