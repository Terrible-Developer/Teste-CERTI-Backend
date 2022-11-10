"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = __importDefault(require("express"));
var cors_1 = __importDefault(require("cors"));
var db_1 = require("./db");
var routes_1 = __importDefault(require("./routes"));
var path_1 = __importDefault(require("path"));
//Configuração do express, incluindo dotenv para variáveis de ambiente e cors para aceitar requisições de mesma origem
var app = (0, express_1.default)();
require('dotenv').config();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
var port = process.env.PORT || 3000;
//Página Inicial 
app.get('/', function (req, res) {
    //return res.send('Welcome to the API.');
    res.sendFile(path_1.default.join(__dirname, '/views/index.html'));
});
//Adiciona as rotas
app.use('/api', routes_1.default);
//Chama o método para inicializar a conexão com o banco
(0, db_1.initConnection)(process.env.MONGODB_URL);
app.listen(port, function () {
    console.log("App now running on port ".concat(port));
});
