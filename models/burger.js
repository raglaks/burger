const orm = require("../config/orm");

const burger = {

    allBurgers: function () {

        orm.selectAll("burgers");

    },

    newBurger: function (name, devoured) {

        orm.insertOne("burgers", "burger_name", "devoured", name, devoured);

        console.log("\nSuccessfully added.\n");

    },

    editBurger: function (col1, val1, idVal) {

        orm.updateOne("burgers", col1, val1, idVal);

        console.log("\nSuccessfully updated.\n");

    }

}

//burger.newBurger("el muy macho", false);

burger.editBurger("burger_name", "rated r", 7);

burger.allBurgers("burgers");