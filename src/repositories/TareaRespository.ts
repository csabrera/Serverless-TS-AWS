import { DynamoDB } from "aws-sdk";
import { Tarea } from "../models/Tarea";
import { getUUID } from "../plugins/get-id.plugins";

export class TareaRepository {
  private dyanoDB: DynamoDB.DocumentClient;
  private tableName: string;

  constructor() {
    this.dyanoDB = new DynamoDB.DocumentClient();
    this.tableName = "Tareas";
  }

  async crear(tarea: Omit<Tarea, "id">): Promise<Tarea> {
    const nuevaTarea: Tarea = {
      ...tarea,
      id: getUUID(),
    };

    const params = {
      TableName: this.tableName,
      Item: nuevaTarea,
    };

    await this.dyanoDB.put(params).promise();
    return nuevaTarea;
  }

  async listarTareas(): Promise<Tarea[]> {
    const params = {
      TableName: this.tableName,
    };

    const result = await this.dyanoDB.scan(params).promise();
    return result.Items as Tarea[];
  }
}
