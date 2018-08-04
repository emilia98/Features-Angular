const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const gallerySchema = mongoose.Schema({
  advertId: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Advert'
  },
  images: [{
    type: mongoose.SchemaTypes.ObjectId,
    ref: 'Upload',
    default: []
  }]
});

const Gallery = mongoose.model('Gallery', gallerySchema);
module.exports = Gallery;
