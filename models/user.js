const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    googleId: String,
}, {
    timestamps: true
});

const foodSchema = new mongoose.Schema({
    text: String
}, {
    timestamp: true,
});


module.exports = mongoose.model('User', userSchema);