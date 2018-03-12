var connection = require("./connection.js");

var orm = {
  selectAll: function(tableInput, cb) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) throw err;
     cb(result);
    });
  },
  insertOne: function( theColumn, theBurgerName, cb) {
    var queryString = "INSERT INTO burgers (??) VALUE ('??'); ";
    console.log(queryString);
    connection.query(queryString, [ theColumn, theBurgerName], function(err, result) {
      if (err) throw err;
      cb(result);
      console.log("trying to insert one");
    });
  },
  updateOne: function(columnName, theBurger, cb) {
    var queryString =
      "UPDATE burgers SET devoured = TRUE WHERE ?? = ??;";

    connection.query(
      queryString,
      [columnName, theBurger],
      function(err, result) {
        if (err) throw err;
        cb(result);
      },

    );
  }
};

module.exports = orm;
