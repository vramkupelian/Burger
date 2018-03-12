var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) throw err;
     cb(result);
    });
  },
  insertOne: function(  theColumn, theBurgerName, cb) {
    var queryString = "INSERT INTO burgers (??) VALUE ('??'); ";
    console.log(queryString);
    connection.query(queryString, [ theColumn, theBurgerName], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(columnName, theBurger, cb) {
    var queryString =
      "UPDATE burgers SET devoured = TRUE WHERE ?? = ??;";

    connection.query(
      queryString,
      [ columnName, theBurger],
      function(err, result) {
        if (err) throw err;
        cb(result);
      },

    );
  }
};

module.exports = orm;
