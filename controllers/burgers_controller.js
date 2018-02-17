var express = require("express");
var router = express.Router();

// Pulls out the Burger Models
var db = require("../models");

// module.exports = function(app) {
router.get("/", function(req, res) {
    db.Burger.findAll({}).then(function(dbBurger) {
        res.render("index", {
            burgers: dbBurger,
            // if one of the item is true, used devoured
            hasDevoured: dbBurger.some(item => item.devoured)
        });
    });
});

router.post("/api/burgers", function(req, res) {
    db.Burger.create({
            burger_name: req.body.burger_name
                // devoured: false
        })
        .then(function() {
            res.redirect("/");
        })
        .catch(function(err) {
            // Whenever a validation or flag fails, an error is thrown
            // We can "catch" the error to prevent it from being "thrown", which could crash our node app
            res.json(err);
        });
});

router.put('/api/burgers/:id', function(req, res) {
    db.Burger.update({
        devoured: true
    }, {
        where: {
            id: req.params.id
        },
    }).then(function() {
        res.render("index");
    }).catch(function(err) {
        res.json(err);
    });
});

router.delete("/api/burgers/:id", function(req, res) {
    db.Burger.destroy({
        where: {
            id: req.params.id
        }
    }).then(function() {
        res.render("index");
    });
});

module.exports = router;
// };