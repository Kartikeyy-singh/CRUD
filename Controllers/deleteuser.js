const usermodal = require('../Models/user');
const fs = require('fs');
// console.log('hello');
const deleteuser = async (req, res) => {
    try {
        const { id } = req.params;
        await usermodal.findByIdAndRemove(id);
        res.redirect('/');
    } catch (error) {
        console.error(error.message);
        console.log(error);
        res.status(500).json({
            success: false,
            error: 'internal server error',
            message: error.message,
        });
    }
}

module.exports = deleteuser;