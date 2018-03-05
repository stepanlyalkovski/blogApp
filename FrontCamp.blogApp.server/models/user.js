var mongoose = require('mongoose');
bcrypt = require('bcrypt');

var userSchema = mongoose.Schema({
    author: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    hash_password: {
        type: String,
        required: true
    }
});

userSchema.methods.comparePassword = function(password) {
    console.log(password);
    console.log(this.hash_password);
    
    return bcrypt.compareSync(password, this.hash_password)
}

module.exports = mongoose.model('user', userSchema);