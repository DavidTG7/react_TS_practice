"use strict";
exports.__esModule = true;
var react_1 = require("react");
var Funciones = function () {
    var sumar = function (a, b) {
        return a + b;
    };
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("h3", null, "Funciones"),
        react_1["default"].createElement("span", null,
            "El resultado es: ",
            sumar(1, 32))));
};
exports["default"] = Funciones;
