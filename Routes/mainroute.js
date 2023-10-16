const express = require('express');
const router = express.Router();

const image = require('../Controllers/saveform');
const userinfo = require('../Controllers/userpage');
const deleteuser = require('../Controllers/deleteuser');
const edituser = require('../Controllers/edituser');

const multer = require('multer');

//?----------------------MULTER PART---------------------------
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './uploads');
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '_' + Date.now() + '_' + file.originalname);
    }
});

const upload = multer({
    storage: storage,
}).single('image');
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

router.post('/add', upload, image.saveform);

router.post('/update/:id',upload, edituser.updateuser);

//?---------------------------------------------------------

module.exports = router;