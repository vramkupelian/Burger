var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },

    insertOne:function(theColumn, theBurgerName,cb) {
        orm.insertOne("burgers", theColumn,theBurgerName, function(res){
            cb(res);
        });
    },

    updateOne: function(columnName, theBurger, cb){
        orm.updateOne("burgers", columnName, theBurger, function(res){
            cb(res);
        });
    }
}

module.exports = burger;