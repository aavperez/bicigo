import { Comuna  } from "./comuna";

export interface Region {
    "id": number,
    "posicion": number,
    "nombre": string,
    "nombre_mapa": string,
    "comunas": Comuna[]
}
