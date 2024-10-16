import { APIGatewayProxyHandler } from "aws-lambda";
import { TareaRepository } from "./repositories/TareaRespository";

const tareaRepository = new TareaRepository();

export const listarTareas: APIGatewayProxyHandler = async (event) => {
  try {
    const tareas = await tareaRepository.listarTareas();

    return {
      statusCode: 200,
      body: JSON.stringify(tareas),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        mensaje: "Error al listar Tarea",
        error,
      }),
    };
  }
};
