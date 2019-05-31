var Selects = require('../models/select');

module.exports = {
    create
};

function create(req, res) {
    Selection.findById(req.params.id, function(err, select) {
        select.foods.push(req.body);
        select.save(function(err) {
            res.redirect(`/selects/${select._id}`);
        });
    });
}