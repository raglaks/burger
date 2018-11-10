const orm = require("../config/orm");

const burger = {

    allBurgers: function (tableName) {

        orm.selectAll(tableName);

    }

}

burger.allBurgers("burgers");