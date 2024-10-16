"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TareaRepository = void 0;
const aws_sdk_1 = require("aws-sdk");
const get_id_plugins_1 = require("../plugins/get-id.plugins");
class TareaRepository {
    constructor() {
        this.dyanoDB = new aws_sdk_1.DynamoDB.DocumentClient();
        this.tableName = "Tareas";
    }
    async crear(tarea) {
        const nuevaTarea = {
            ...tarea,
            id: (0, get_id_plugins_1.getUUID)(),
        };
        const params = {
            TableName: this.tableName,
            Item: nuevaTarea,
        };
        await this.dyanoDB.put(params).promise();
        return nuevaTarea;
    }
    async listarTareas() {
        const params = {
            TableName: this.tableName,
        };
        const result = await this.dyanoDB.scan(params).promise();
        return result.Items;
    }
}
exports.TareaRepository = TareaRepository;
