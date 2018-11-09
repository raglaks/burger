const connection = require("./connection");

const orm = {

    selectAll: function () {

        let queryString = "SELECT * FROM burgers;";

        connection.query(queryString, function (err, result) {

            if (err) throw err;

            result.forEach(element => {

                console.log(element);

            });

        });

    },

    insertOne: function (name, devoured) {

        let queryString = "INSERT INTO burgers(burger_name, devoured) VALUES (?, ?);";

        connection.query(queryString, [name, devoured], function (err, result) {

            if (err) throw err;

            console.log("Successfully added:\n");

            orm.selectAll();

        });
    },

    updateOne: function (col1, val1, idVal) {

        let queryString = "UPDATE burgers SET ?? = ? WHERE id = ?;";

        connection.query(queryString, [col1, val1, idVal], function (err, result) {

            if (err) throw err;

            console.log("Successfully updated:\n");

            orm.selectAll();

        })
        

    }

}

orm.selectAll();

orm.insertOne("the bagel burger", true);

