const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
// const { v4: uuidv4 } = require('uuid');
// uuidv4();


const UserSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

UserSchema.pre('save', (next) => {
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })
})

// bcrypt.hash(UserSchema.username, 10, (error, hash) => {
//     UserSchema.username = hash
// });

const User = mongoose.model('User', UserSchema);
module.exports = User