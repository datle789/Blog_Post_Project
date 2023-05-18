const User = require('../models/UserID')
module.exports = (req, res, next) => {
    User.findById(req.session.userId, (error, user) => {
        //console.log(user)
        if (error || !user)
            return res.redirect('/')
        next()
    })
}