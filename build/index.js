"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var app = (0, express_1.default)();
var port = process.env.PORT || 3000;
app.get('/', function (req, res) {
    return res.send('Welcome to the API.');
});
app.get('/pokemons', function (req, res) {
    res.send({
        "pokemons": [
            'Pokemon 2',
            'Pokemon 28',
            'Pokemon 69'
        ]
    });
});
app.listen(port, function () {
    console.log("App now running on port ".concat(port));
});
