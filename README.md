
# Proyecto Bicigo

Este proyecto consume las apis expuestas por el sitio web test.bicigo.cl/api para realizar consultas y agregar nuevas publicaciones. Adicionalmente hace uso de Firestore para registro de las busquedas de usuario y Firebase para registro y autentificacion de usuarios para permitir la publicación.

## Componentes:

### Home

- Búsqueda de productos sobre api bicigo

- Registro de búsqueda y fecha en Firestore

- Comunicación con componente Show para mostrar detalle de publicación.

  

### Search

- Listado de todos los resultados de api bicigo.cl

- Comunicación con componente Show para mostrar detalle de publicación.

  

### Publish

- Agregar nuevo producto mediante formulario y api bicigo.cl (POST)

  

Register

- Registro de usuario (email/pass) en Firestore

  

### Admin/Login

- Login de usuario en Firestore

  

### Admin/List

- Listar y borrar registros de busquedas en Firestore

  

### Show

- Mostrar detalle de una publicación.

  
  

## Requerimientos y aplicación:

**Rutas hijas** en `app-routing.module` sobre los componentes `LoginComponent` y `RegisterComponent` con prefijo *admin*.

**Lazy Loading** en `app-routing.module` sobre los componentes `HomeComponent`, `SearchComponent` y `PublishComponent`.

**Formulario Rxjs** en `PublishComponent` para enviar nuevas publicaciones hacia la API de Bicigo.

**Ciclos de vida** en `HomeComponent`.

**Guards** en `PublishComponent` para permitir publicación solo a usuarios logueados.

**HttpClient** en `HomeComponent`, `SearchComponent` y `PublishCompoment`.

**Pipes personalizados**  pipe *precio* en `HomeComponent`, `SearchComponent` y `ShowComponent`.

**Directivas**  *ngIf*, *ngFor* en la mayoría de los componentes.

**Comunicación entre componentes** desde `HomeComponent`, `SearchComponent` hacia `ShowComponent`.

**Binding de datos** en `HomeComponent`.

**Componentes, Bootstrap y GIT** de forma explicita en todo el proyecto.