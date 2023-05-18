const User = require('../models/UserID');

module.exports = (req, res) => { //called when request to /contact comes
    User.create(req.body, (err, user) => {
        if (err) {
            return res.redirect('/author/register')
        }
        res.redirect("/")
    })
}