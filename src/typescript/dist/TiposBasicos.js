"use strict";
exports.__esModule = true;
var react_1 = require("react");
var TiposBasicos = function () {
    var nombre = 'David';
    var edad = 36;
    var estaActivo = false;
    var poderes = ['Velocidad', 'Volar', 'Correr', 'Cantar'];
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("h3", null, "Tipos basicos"),
        nombre,
        ", ",
        edad,
        ", ",
        estaActivo ? 'activo' : 'no activo',
        react_1["default"].createElement("br", null),
        poderes.join(', ')));
};
exports["default"] = TiposBasicos;
