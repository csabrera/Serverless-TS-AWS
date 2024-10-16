import { APIGatewayProxyHandler } from "aws-lambda";
import { TareaRepository } from "./repositories/TareaRespository";

const tareaRepository = new TareaRepository();

export const crearTarea: APIGatewayProxyHandler = async (event) => {
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
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({
        mensaje: "Error al crear Tarea",
        error,
      }),
    };
  }
};
