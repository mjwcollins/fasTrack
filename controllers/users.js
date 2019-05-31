const User = require('../models/user');

module.exports = {
    index,
    // addFood
}

function index(req, res) {
    //User.find({})
    res.render('index', {
        user: req.user,
        title: 'fasTrack'
    })
    res.redirect('views/select');
};

//below add function not done...uh lets see
// function addFood(req, res) {
//     req.user.foods.push(req.body);
//     req.user.save(function(err) {
//         res.redirect('/users');
//     });
// }


//delete function