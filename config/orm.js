var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
     cb(result);
    });
  },
  insertOne: function( table, theColumn, theBurgerName, cb) {
    var queryString = "INSERT INTO ?? (??) VALUE ('??'); ";
    console.log(queryString);
    connection.query(queryString, [table, theColumn, theBurgerName], function(err, result) {
      if (err) throw err;
      cb(result);
    });
  },
  updateOne: function(table, columnName, theBurger, cb) {
    var queryString =
      "UPDATE ?? SET devoured = TRUE WHERE ?? = ??;";

    connection.query(
      queryString,
      [table, columnName, theBurger],
      function(err, result) {
        if (err) throw err;
        cb(result);
      },

    );
  }
};

module.exports = orm;
