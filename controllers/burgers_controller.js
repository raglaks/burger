const express = require("express");
const burger = require("../models/burger");
const router = express.Router();

router.get("/index", function (req, res) {

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

    let id = req.params.id;

    burger.editBurger(true, id, function (data) {

        if (data.changedRows == 0) {

            return res.status(404).end();

        } else {

            res.status(200).end();

        }

    });

});

module.exports = router;

