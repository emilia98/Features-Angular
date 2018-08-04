const bodyParser = require('body-parser');
const crypto = require('crypto');
const mime = require('mime');
const multer = require('multer');
const cloudinary = require('cloudinary');
const colors = require('colors');

let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads/');
  },
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) {
        throw new Error('Error!');
      }
      cb(null, raw.toString('hex') + Date.now() + '.' + mime.extension(file.mimetype));
    });
  }
});
let upload = multer({ storage: storage });

console.log(colors.rainbow('GET YOUR CLOUDINARY ACCOUNT DETAILS:'));
cloudinary.config({
  cloud_name: '',
  api_key: '',
  api_secret: ''
});

// TODO: check for image validity
function checkIfImage() {
  let allowedFormat = ['jpeg', 'jpg', 'png', 'gif', 'bmp'];
}

module.exports = (app, config) => {
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(bodyParser.json());

  app.post('/ad/new', upload.array("uploads[]", 12), (req, res) => {
    let files = req.files;

    // TODO: Add to database
    console.log(req.body);
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        let file = files[i];

        cloudinary.v2.uploader.upload(
          file.path,
          {
            public_id: `ads/${file.filename}`
          },
          function (error, result) {
           //  console.log('*******');
           // console.log(error);
           // console.log(result);
            
          }
        );
      }
    }
    res.status(401).json({
      access: false
    });
  });
};
