"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.server = void 0;
const http_cliente_plugin_1 = require("./plugins/http-cliente.plugin");
const server = async (event) => {
    const http = await http_cliente_plugin_1.httpClientPlugin.get("https://swapi.dev/api/people/1/");
    return {
        statusCode: 200,
        body: JSON.stringify(http),
    };
};
exports.server = server;
