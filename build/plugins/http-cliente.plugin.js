"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpClientPlugin = void 0;
const axios_1 = __importDefault(require("axios"));
const traducirPersonaje = (personaje) => {
    return {
        nombre: personaje.name,
        altura: personaje.height,
        masa: personaje.mass,
        color_de_pelo: personaje.hair_color,
        color_de_piel: personaje.skin_color,
        color_de_ojos: personaje.eye_color,
        anio_de_nacimiento: personaje.birth_year,
        genero: personaje.gender,
    };
};
exports.httpClientPlugin = {
    get: async (url) => {
        const response = await axios_1.default.get(url);
        const personajeEnEspanol = traducirPersonaje(response.data);
        return personajeEnEspanol;
    },
};
