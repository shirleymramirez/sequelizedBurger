var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Routes
router.get("/", function(req, res) {
    burger.selectAll(function(result) {
        res.render("index", {
            burgers: result,
            // if one of the item is true, used devoured
            hasDevoured: result.some(item => item.devoured)
        });
    });

    router.post('/api/burgers', function(req, res) {
        burger.insertOne("burger_name", [req.body.burger_name], function(result) {
            res.json({ id: result.insertId });
        });
    });

    router.put('/api/burgers/:id', function(req, res) {
        var condition = 'id = ' + req.params.id;
        burger.updateOne({ devoured: true }, condition, function(result) {
            if (result.changedRows === 0) {
                // If no rows were changed, then the ID must not exist, so 404
                return res.status(404).end();
            }
            res.status(200).end();

        });
    });
});

module.exports = router;