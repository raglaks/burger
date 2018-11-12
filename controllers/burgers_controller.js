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

router.put("/api/burgers/:id", function (req, res) {

    burger.editBurger()

});

router.put()

module.exports = router;

// router.put("/api/cats/:id", function (req, res) {
//     var condition = "id = " + req.params.id;

//     console.log("condition", condition);

//     cat.update({
//         sleepy: req.body.sleepy
//     }, condition, function (result) {
//         if (result.changedRows == 0) {
//             // If no rows were changed, then the ID must not exist, so 404
//             return res.status(404).end();
//         } else {
//             res.status(200).end();
//         }
//     });
// });
