import { log } from "util";

var express = require("express");

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
    burger.insertOne(["burger_name"], [req.body.burger_name],
        function(result){
            res.json({id: result.insertId});
        }
    );
});

router.put("/api/burgers/:burger_name", function(req,res){

    burger.updateOne(["burger_name"], [req.params.burger_name],
        function(result){
            if(result.changedRows ===0){
                return res.status(404).end();
            }else{
                res.status(200).end();
            }
        }
    );    
});

module.exports = router;