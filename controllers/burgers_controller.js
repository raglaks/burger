const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function (req, res) {

    burger.allBurgers(function (data) {

        //console.log(data);

        // data.forEach(element => {
            
        //     console.log(element.burger_name);

        // });

        res.render("index", data);
    });

});

module.exports = router;
// router.get("/", function(req, res) {
//   cat.all(function(data) {
//     var hbsObject = {
//       cats: data
//     };
//     console.log(hbsObject);
//     res.render("index", hbsObject);
//   });
// });
