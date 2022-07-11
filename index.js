"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = "https://jsonplaceholder.typicode.com/todos/2";
axios_1["default"].get(url).then(function (response) {
    var todo = response.data;
    var ID = todo.id;
    var title = todo.title;
    var finished = todo.completed;
    logInfo(ID, title, finished);
});
var logInfo = function (id, title, completed) {
    console.log("The id ".concat(id, " , the Title ").concat(title, " , the finished ").concat(completed));
};
