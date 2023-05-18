const BlogPost = require('../models/BlogPost')

module.exports = (req, res) => {
    //console.log(req.body)
    BlogPost.findByIdAndDelete(req.body.PostID, (err) => {
        res.redirect('/')
    })
}