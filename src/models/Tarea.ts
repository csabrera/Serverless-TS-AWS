export interface Tarea {
  id: string;
  titulo: string;
  descripcion: string;
  fecha?: string; // Usamos string para simplificar el almacenamiento en DynamoDB
  estado: boolean;
}
