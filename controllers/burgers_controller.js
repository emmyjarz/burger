var express = require("express");

var router = express.Router();

// Import the model (cat.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", (req, res) => {
    burger.selectAll(data => {
        res.render("index", { burgers: data });
    });
});

router.post("/", (req, res)=>{
       burger.insertOne(["name"],[req.body.name], ()=>{
        res.redirect("/");
    });


});
router.put("/:id", (req, res)=>{
    burger.updateOne(`devoured = ${req.body.devoured}`, `id = ${req.params.id}`, ()=>{
        res.redirect("/")
    })





})


module.exports = router;