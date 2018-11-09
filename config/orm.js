const connection = require("./connection");

const orm = {

    selectAll: function (table_name) {

        let queryString = "SELECT * FROM ??;";

        connection.query(queryString, [table_name], function (err, result) {

            if (err) throw err;

            console.log(result);

        });

    },

    insertOne: function (table_name, col1, col2, val1, bool2) {

        let queryString = "INSERT INTO ??(??, ??) VALUES (?, ?);";

        connection.query(queryString, [table_name, col1, col2, val1, bool2], function (err, result) {

            if (err) throw err;

            console.log("Successfully added:\n");

            orm.selectAll(table_name);

        });
    },

    updateOne: function (table_name, col1, val1, idVal) {

        let queryString = "UPDATE ?? SET ?? = ? WHERE id = ?;";

        connection.query(queryString, [table_name, col1, val1, idVal], function (err, result) {

            if (err) throw err;

            console.log("Successfully updated:\n");

            orm.selectAll(table_name);

        })
        

    }

}

// orm.selectAll("burgers");

orm.updateOne("burgers", "burger_name", "el muy macho", 5);
