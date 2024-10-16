"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.crearTarea = void 0;
const TareaRespository_1 = require("./repositories/TareaRespository");
const tareaRepository = new TareaRespository_1.TareaRepository();
const crearTarea = async (event) => {
    try {
        const data = JSON.parse(event.body || "{}");
        if (!data.titulo || !data.descripcion) {
            return {
                statusCode: 400,
                body: JSON.stringify({ mensaje: "Todos los campos son obligatorios." }),
            };
        }
        const newTask = await tareaRepository.crear({
            titulo: data.titulo,
            descripcion: data.descripcion,
            fecha: new Date().toLocaleDateString(),
            estado: false,
        });
        return {
            statusCode: 201,
            body: JSON.stringify(newTask),
        };
    }
    catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                mensaje: "Error al crear Tarea",
                error,
            }),
        };
    }
};
exports.crearTarea = crearTarea;
/**
 * @swagger
 * /users:
 *   post:
 *     summary: Create a new user
 *     description: Creates a new user in the DynamoDB table
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       201:
 *         description: User created successfully
 *       400:
 *         description: Missing required fields
 *       500:
 *         description: Internal server error
 */
