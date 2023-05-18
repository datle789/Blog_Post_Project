// const mongoose = require('mongoose');
// const BlogPost = require('./models/BlogPost');

// mongoose.set('strictQuery', false);
// mongoose.connect('mongodb://localhost:27017/test_my_database', { useNewUrlParser: true });


//CREATE
// BlogPost.create({
//     title: 'Đây là sách dạy học lập trình Node.js từ cơ bản',
//     body: 'Nếu bạn đam mê với Javascript và muốn khám phá cách xây dựng ứng dụng với Node.js thì đây là cuốn sách dành cho bạn.'
// }, (error, blogpost) => {
//     console.log(error, blogpost)
// })

// console.log('================================')
//FIND
// BlogPost.find({}, (err, blogpost) => {
//     console.log(err, blogpost)
// })

//FIND WITH CONDITIONS
// BlogPost.find({
//     title: 'Đây là sách dạy học lập trình Node.js từ cơ bản'
// }, (error, blogspot) => {
//     console.log(error, blogspot)
// })

//UPDATE
// var id = "63f259de51a16100262b786a";
// BlogPost.findByIdAndUpdate(id, {
//     title: 'Updated title'
// }, (error, blogspot) => {
//     console.log(error, blogspot)
// })


// BlogPost.find({
//     title: 'Updated title'
// }, (error, blogspot) => {
//     console.log(error, blogspot)
// })

//DELETE
// var id = "63f25af39760e67ce926f20b"
// BlogPost.findByIdAndDelete(id, (err, blogspot) => {
//     console.log(err, blogspot)
// })


// BlogPost.deleteMany({
//     title: 'Đây là sách dạy học lập trình Node.js từ cơ bản'
// }, (err, blogspot) => {
//     console.log(err, blogspot)
// })
