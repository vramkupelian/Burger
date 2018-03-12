var express = require("express");
var app = express();
var router = express.Router();
var burger = require("../models/burger.js");

router.get("/", function(req,res){
    burger.selectAll(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index",hbsObject);
    });
});

router.post("/api/burgers", function(req,res){
            console.log("we should post burger now");
        console.log("This is the name of the burger:" + req.body.burger_name);
        
    burger.insertOne(["burger_name"], [req.body.burger_name],
        function(result){
            res.json({id: result.insertId});
            res.json({burger_name: req.body.burger_name});
            console.log("Successful post");
        }
    );

});

router.put("/api/burgers/:burger_name", function(req,res){
console.log("we should devour now");
    burger.updateOne(["burger_name"], [req.params.burger_name],
        function(result){
            if(result.changedRows ===0){
                return res.status(400).end();
            }else{
                res.status(200).end();
            }
        }
    );    
});

module.exports = router;