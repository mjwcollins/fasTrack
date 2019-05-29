// const User = require('../models/user');

module.exports = {
    index,
    privateView
}

function index(req, res) {
    res.render('index', {
        user: req.user,
        title: 'fasTrack'
    })
};

// below function not done
function privateView(req, res) {

}