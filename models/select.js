var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var selectSchema = new Schema({
    content: String,
    // food: [foodSchema],
}, {
    timestamps: true
});

module.exports = mongoose.model('Select', selectSchema);

