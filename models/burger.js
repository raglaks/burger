const orm = require("../config/orm");

const burger = {

    allBurgers: function (cb) {

        orm.selectAll("burgers", function(res) {

            cb(res);

        });

    },

    newBurger: function (name, devoured, cb) {

        orm.insertOne("burgers", "burger_name", "devoured", name, devoured, function (res) {

            cb(res);

        });

    },

    editBurger: function (col1, val1, idVal, cb) {

        orm.updateOne("burgers", col1, val1, idVal, function (res) {

            cb(res);

        });

    }

}

//burger.newBurger("salmon sizzler", false);

// burger.editBurger("burger_name", "rated r", 7);

//burger.allBurgers("burgers");

module.exports = burger;