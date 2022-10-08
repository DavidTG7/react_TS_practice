"use strict";
exports.__esModule = true;
exports.ObjetosLiterales = void 0;
exports.ObjetosLiterales = function () {
    var persona = {
        nombreCompleto: 'David',
        edad: 36,
        direccion: {
            pais: 'Alemania',
            casa: 526
        }
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("h3", null,
            "Objetos Literales",
            React.createElement("code", null,
                React.createElement("pre", null, JSON.stringify(persona, null, 2))))));
};
