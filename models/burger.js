var orm = require("../config/orm.js");
var burger = {
 selectAll: (cb)=>{
     orm.selectAll("burgers", (res)=>{
         cb(res);
     })
 },
 insertOne: (cols, vals, cb)=>{
     orm.insertOne("burgers", cols, vals, (res) =>{
         cb(res);
        //  console.log("from burger", res);
     })
 }, 
 updateOne: (condition, id, cb)=>{
     orm.updateOne("burgers", condition, id, (res)=>{
         cb(res);
     });
 }
 
}
module.exports = burger;