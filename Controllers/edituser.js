const usermodel = require('../Models/user');

exports.editpage = async (req, res) => {
    const { id } = req.params;
    // const data = await usermodel.findById(id).exec();
    const data = await usermodel.findById(id);
    console.log(data._doc);
    try {
        if (data == null) {
            res.redirect('/');
        }
        else {
            res.render('edit_user', {
                title: 'Edit User',
                userinfo:data,
            })
        }
    } catch (error) {
        console.log(error.message);
    }
}

exports.updateuser = async (req, res) => {
    // console.log('hello');
    try {
        const { id } = req.params;
        if (req.file) {
            await usermodel.findByIdAndUpdate(id, {
                photo:req.file.location,
            });
        }
        await usermodel.findByIdAndUpdate(id, {
            name: req.body.name,
            email: req.body.email,
            phonenumber: req.body.phone,
            address: req.body.address,
        });
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