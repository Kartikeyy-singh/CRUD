const usermodeal = require('../Models/user');

exports.userinfo = async (req, res) => {
    try {
        const userdata = await usermodeal.find({});
        // console.log(userdata);
        // res.status(200).json({
        //     success: true,
        //     data: userdata,
        //     message: 'All Entries fetched',
        // });
        res.render('index', {
            title: 'Home Page',
            userinfo:userdata,
        })
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