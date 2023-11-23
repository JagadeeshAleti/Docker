const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: String,
    branch: String,
    certification: [String],
});

const User = mongoose.model('User', userSchema);

module.exports = User;