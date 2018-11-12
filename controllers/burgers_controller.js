const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/", function (req, res) {

    burger.allBurgers(function (data) {

        //0 is false, 1 is true

        let resObj = {

            eaten: [],

            safe: []

        }

        data.forEach(element => {

            // console.log(element.devoured);

            if (element.devoured === 1) {

                resObj.eaten.push(element);

            } else {

                resObj.safe.push(element);

            }

        });

        console.log(resObj);

        res.render("index", resObj);
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
