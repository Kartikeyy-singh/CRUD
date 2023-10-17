const express = require('express');
const router = express.Router();

const image = require('../Controllers/saveform');
const userinfo = require('../Controllers/userpage');
const deleteuser = require('../Controllers/deleteuser');
const edituser = require('../Controllers/edituser');

const AWS = require('aws-sdk');

require('dotenv').config();
const multer = require('multer');
const multerS3 = require('multer-s3');

//?----------------------MULTER PART---------------------------
const s3 = new AWS.S3({
    accessKeyId: process.env.AWSKEY,
    secretAccessKey: process.env.AWSPASSWORD,
    region: 'eu-north-1'
});
 const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "crudoperationimages",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, Date.now().toString() + '-' + file.originalname)
        }
    })
})
//?----------------------------------------------------------


//?-------------------------Routers-------------------------
router.get('/', userinfo.userinfo);

router.get('/add', (req, res) => {
    res.render('add_user', { title: 'Add Users' });
});

// router.get('/remove/:id', (req, res) => {
//     res.send("hello");
// });

router.get('/remove/:id', deleteuser);
router.get('/edit/:id',edituser.editpage);

router.post('/add', upload.single('image'), image.saveform);

router.post('/update/:id', upload.single('image'), edituser.updateuser);

//?---------------------------------------------------------

module.exports = router;