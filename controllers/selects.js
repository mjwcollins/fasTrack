const Select = require('../models/select');

module.exports = {
    index,
    new: newSelect,
    create
}

function index(req, res) {
    Select.find({}, function (err, selects) {
        res.render('select/index', { title: 'Selected Fast', selects })
    });
}
 
function newSelect(req, res) {
    res.render('/select');
}

function create(req, res) {
    var select = new Select(req.body);
    select.save(function(err) {
        if (err) return res.redirect('//newSelect')
        res.redirectf()
    }); 
}
