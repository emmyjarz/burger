//This file receive or send request from burgers_controller.js(frontend) to orm.js(talk to database)

var orm = require("../config/orm.js");
var burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        })
    },
    insertOne: (cols, vals, cb) => {
        orm.insertOne("burgers", cols, vals, (res) => {
            cb(res);

        })
    },
    updateOne: (condition, id, cb) => {
        orm.updateOne("burgers", condition, id, (res) => {
            cb(res);
        });
    }

}
module.exports = burger;