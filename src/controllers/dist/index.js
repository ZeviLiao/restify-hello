"use strict";
exports.__esModule = true;
exports.CONTROLLERS = void 0;
var ping_1 = require("./ping");
var produto_1 = require("./produto");
var entradaProduto_1 = require("./entradaProduto");
var saidaProduto_1 = require("./saidaProduto");
var estoque_1 = require("./estoque");
var usuario_1 = require("./usuario");
exports.CONTROLLERS = [
    new ping_1.PingController(),
    new produto_1.ProdutoController(),
    new entradaProduto_1.EntradaProdutoController(),
    new saidaProduto_1.SaidaProdutoController(),
    new estoque_1.EstoqueController(),
    new usuario_1.UsuarioController()
];
