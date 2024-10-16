import { APIGatewayProxyHandler } from "aws-lambda";
import { httpClientPlugin } from "./plugins/http-cliente.plugin";

export const server: APIGatewayProxyHandler = async (event) => {
  const http = await httpClientPlugin.get("https://swapi.dev/api/people/1/");

  return {
    statusCode: 200,
    body: JSON.stringify(http),
  };
};
