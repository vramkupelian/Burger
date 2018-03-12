var orm = require("../config/orm.js");

var burger = {
    selectAll: function(cb){
        orm.selectAll(function(res){
            cb(res);
        });
    },

    insertOne:function(theColumn, theBurgerName,cb) {
        orm.insertOne(theColumn,theBurgerName, function(res){
            cb(res);
        });
    },

    updateOne: function(columnName, theBurger, cb){
        orm.updateOne( columnName, theBurger, function(res){
            cb(res);
        });
    }
}

module.exports = burger;