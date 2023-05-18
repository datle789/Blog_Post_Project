const BlogPost = require('../models/BlogPost');


module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    BlogPost.find({}, (err, posts) => {
        //console.log(req.body.postID)
        console.log(req.session)
        res.render('index', {
            blogPosts: posts
        })
        //res.json(posts)
    })
    //res.sendFile(path.resolve(__dirname, 'index.html'))
}