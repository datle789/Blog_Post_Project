const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const bcrypt = require('bcrypt')
// const { v4: uuidv4 } = require('uuid');
// uuidv4();


const UserIDSchema = new Schema({
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

UserIDSchema.pre('save', function (next) {
    const user = this
    bcrypt.hash(user.password, 10, (error, hash) => {
        user.password = hash
        next()
    })

    // if (!this.isModified('password')) {
    //     next();
    // }
    // this.password = await bcrypt.hash(this.password, 10)
})


// bcrypt.hash(UserSchema.username, 10, (error, hash) => {
//     UserSchema.username = hash
// });

const User = mongoose.model('UserID', UserIDSchema);
module.exports = User