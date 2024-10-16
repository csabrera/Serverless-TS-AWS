"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listarTareas = void 0;
const TareaRespository_1 = require("./repositories/TareaRespository");
const tareaRepository = new TareaRespository_1.TareaRepository();
const listarTareas = async (event) => {
    try {
        const tareas = await tareaRepository.listarTareas();
        return {
            statusCode: 200,
            body: JSON.stringify(tareas),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                mensaje: "Error al listar Tarea",
                error,
            }),
        };
    }
};
exports.listarTareas = listarTareas;
