// Import the ORM to create functions that will interact with the database.

var burger = {
    selectAll: function(callback) {
        selectAll("burgers", function(result) {
            callback(result);
        });
    },
    insertOne: function(columns, valueOfColumns, callback) {
        insertOne("burgers", columns, valueOfColumns, function(result) {
            callback(result);
        });
    },
    updateOne: function(objColumnValues, condition, callback) {
        updateOne("burgers", objColumnValues, condition, function(result) {
            callback(result);
        });
    }
};

// Export the database functions for the controller
module.exports = burger;