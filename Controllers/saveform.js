const multer = require('multer');
const usermodel = require('../Models/user');

exports.saveform = async (req, res) => {
    // console.log(req.body);
    // console.log(req.file.filename);
    try {
        const formdata = req.body;
        const user = new usermodel({
            name: req.body.name,
            email: req.body.email,
            phonenumber: req.body.phone,
            address: req.body.address,
            photo: req.file.filename,
        });
        await user.save();
        // res.status(200).json({
        //     success: true,
        //     message: 'Entry Done Successfully'
        // });
        res.redirect('/');
    } catch (err) {
        console.error(err);
        console.log(err);
        res.status(500).json({
            success: false,
            data: 'internal server error',
            message: err.message,
        }); 
    }
}

