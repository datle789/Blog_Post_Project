const bcrypt = require('bcrypt')
const User = require('../models/UserID')
module.exports = (req, res) => {
    const { username, password } = req.body;
    User.findOne({ username: username }, (error, user) => {
        // if (user) {
        //     bcrypt.compare(password, user.password, (error, same) => {
        //         //same = true;
        //         if (same) { // if passwords match
        //             // store user session, will talk about it later
        //             console.log('success')
        //             res.redirect('/')
        //         } else {
        //             console.log(password, "-", user.password)
        //             console.log('fail')
        //             res.redirect('/author/login')
        //         }
        //     })
        // } else {
        //     console.log('fail2')
        //     res.redirect('/author/login')
        // }
        bcrypt.compare(password, user.password, function (err, same) {
            if (password != user.password) {
                //console.log(same)
                res.redirect('/author/login')
            } else {
                //console.log(same)
                req.session.userId = user._id
                res.redirect('/')
            }
        });

    })


}