// Pulls out the Burger Models
var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll({}).then(function(dbBurger) {
            res.render("index", {
                burgers: [],
                // if one of the item is true, used devoured
                hasDevoured: false, //dbBurger.some(item => item.devoured)
            });
        });
    });

    app.post("/api/burgers", function(req, res) {
        db.Burger
            .create({ burger_name: req.body.burger_name, devoured: false })
            .then(function(dbBurger) {
                db.Burger.findAll({}).then(function(dbBurger) {
                    res.render("index", {
                        burgers: dbBurger,
                        // if one of the item is true, used devoured
                        hasDevoured: false //dbBurger.some(item => item.devoured)
                    });
                });
            });
    });

    app.put('/api/burgers/:id', function(req, res) {
        db.Burger.update({ devoured: true }, {
            where: {
                id: req.params.id
            },
        }).then(function(dbBurger) {
            db.Burger.findAll({}).then(function(dbBurger) {
                res.render("index", {
                    burgers: dbBurger,
                    // if one of the item is true, used devoured
                    hasDevoured: false //dbBurger.some(item => item.devoured)
                });
            });

        });
    });
};