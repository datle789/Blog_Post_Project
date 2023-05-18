//import BlogPost from "../models/BlogPost";
const BlogPost = require('../models/BlogPost');

module.exports = (req, res) => { //called when request to /contact comes
    res.setHeader('Access-Control-Allow-Origin', '*');
    BlogPost.findById(req.params.id, (err, detailPost) => {
        //console.log(detailPost)

        res.render('post', {
            detailPost
        })
        //res.json(detailPost)
    })
}

