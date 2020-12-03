export interface Publication {
    "id": number,
    "usuario_id": number,
    "visualizaciones": number,
    "telefono": string,
    "precio": number,
    "region_id": number,
    "comuna_id": number,
    "mostrar_email": boolean,
    "created_at": Date,
    "updated_at": Date,
    "activa": boolean,
    "ocultar_precio": boolean,
    "nombre": string,
    "email": string
    "perfil_id": number,
    "url_final": string,
    "token": string,
    "mostrar_whatsapp": boolean,
    "precio_original": number,
    "url_producto": string,
    "url_facebook": string,
    "url_twitter": string,
    "url_instagram": string,
    "comuna": {
      "id": number,
      "region_id": number,
      "nombre": string
    },
    "region": {
      "id": number,
      "posicion": number,
      "nombre": string,
      "nombre_mapa": string
    },
    "articulo": {
      "id": number,
      "categoria_id": number,
      "subcategoria_id": number,
      "marca_id": number,
      "modelo_id": number,
      "modelo_texto": string,
      "estado": string,
      "descripcion": string,
      "created_at": Date,
      "updated_at": Date
      "marca_texto": string,
      "publicacion_id": number,
      "texto_busqueda": string,
      "marca": {
        "id": number,
        "subcategoria_id": number,
        "nombre": string,
        "activa": boolean,
        "descripcion": string,
        "imagen": string
      },
      "fotos": [
        {
          "id": number,
          "articulo_id": number,
          "nombre": string
          "posicion": number,
          "created_at": Date,
          "updated_at": Date,
          "ruta": string,
        }
      ],
      "categoria": {
        "id": number,
        "nombre": string,
        "activa": boolean
      },
      "subcategoria": {
        "id": number,
        "categoria_id": number,
        "nombre": string,
        "grupo": string,
        "activa": boolean,
        "imagen": string
      }
    }
}
