//Router file, control what to show on the page for each route.
var express = require("express");

var router = express.Router();

// Import the model to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    res.redirect("/burgers");
});
router.get("/burgers", (req, res) => {
    burger.selectAll(data => {
        res.render("index", { burgers: data });
    });
});
router.post("/burgers/new", (req, res) => {
    burger.insertOne(["name", "date"], [req.body.name, new Date()], () => {
        res.redirect("/burgers");
    });
});
router.put("/burgers/:id", (req, res) => {
    burger.updateOne(`devoured = ${req.body.devoured}`, `id = ${req.params.id}`, () => {
        res.redirect("/burgers")
    });
});

module.exports = router;