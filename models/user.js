const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
}, {
    timestamps: true
});

const foodSchema = new mongoose.model.Schema({
    name: String,
    img: URL,
    time: String,
    date: Date,
}, {
    timestamp: true,
});


module.exports = mongoose.model('User', userSchema);