const express = require('express')
const app = express()
//const path = require('path')
const mongoose = require('mongoose');
const fileUpload = require('express-fileupload')
const newPostController = require('./controller/newPost')
const homeController = require('./controller/home')
const getPostsController = require('./controller/getPost')
const storePostController = require('./controller/storePost')
const validationMiddleWareController = require('./controller/validationMiddleWare')
const deletePostController = require('./controller/deletePost')
const newUserController = require('./controller/newUser')
const storeUserController = require('./controller/storeUser')
const loginController = require('./controller/login')
const loginUserController = require('./controller/loginUser')// confirm password
const authController = require('./middleWare/authorMiddleWare')
const redirectAuthorMiddle = require('./middleWare/redirectAuthorMiddleWare')
const authorLogoutController = require('./controller/authorLogout')



const expressSession = require('express-session')
app.use(expressSession({
    secret: 'keyboard cat'
}))

global.loggedIn = null
app.use("*", (req, res, next) => {
    loggedIn = req.session.userId
    next()
})


//bodyParser
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

//view engine
const ejs = require('ejs');
app.set('view engine', 'ejs')



mongoose.set('strictQuery', false);
mongoose.connect('mongodb://localhost:27017/mydb_database', { useNewUrlParser: true })

//models
//const BlogPost = require('./models/BlogPost');

//UPLOAD IMAGE
app.use(fileUpload())


app.use(express.static('public'))



app.use('/posts/store', validationMiddleWareController)



// app.get("/", (req, res) => {
//     BlogPost.find({}, (err, posts) => {
//         //console.log(posts)
//         res.render('index', {
//             blogPosts: posts
//         })
//     })
//     //res.sendFile(path.resolve(__dirname, 'index.html'))
// })
app.get('/', homeController)

app.get('/about', (req, res) => { // called when request to /about comes in
    //res.sendFile(path.resolve(__dirname, 'about.html'))
    res.render('about')
})
app.get('/contact', (req, res) => { //called when request to /contact comes
    //res.sendFile(path.resolve(__dirname, 'contact.html'))
    res.render('contact')
})


// app.get('/post/:id', (req, res) => { //called when request to /contact comes
//     BlogPost.findById(req.params.id, (err, detailPost) => {
//         res.render('post', {
//             detailPost
//         })
//     })
// })
app.get('/post/:id', getPostsController)


// app.get('/posts/new', (req, res) => {
//     res.render('create')
// })
app.get('/posts/new', authController, newPostController)



//handle
// app.post('/posts/store', (req, res) => {
//     let image = req.files.image;
//     image.mv(path.resolve(__dirname, 'public/upload', image.name), function (err) {
//         BlogPost.create({
//             ...req.body,
//             image: '/upload/' + image.name
//         }, function (err) {
//             res.redirect('/')
//         })
//     })
// })
app.post('/posts/store', storePostController)


app.post('/delete-user', deletePostController)

// app.get('/', (req, res) => {
//     BlogPost.find({}, (err, blogPost) => {
//         console.log(blogPost)
//     })
// })

app.get('/author/register', redirectAuthorMiddle, newUserController)

app.post('/users/register', redirectAuthorMiddle, storeUserController)

app.get('/author/login', redirectAuthorMiddle, loginController)
app.post('/users/login', redirectAuthorMiddle, loginUserController)


app.get('/author/logout', authorLogoutController)



app.use((req, res) => { res.render('notFound') })

// app.get('*', (req, res) => {
//     res.header(404)
//     res.send('page not found')
// });




app.listen(3000, () => {
    console.log(`listening on port ${3000}`);
})