
# ORTEMON

El aplicativo ideal para mantenerte informado sobre tus pokemones!



## Variables de entorno

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo .env

`SERVER_PORT`
`DB_NAME`
`DB_USER`
`DB_PASSWORD`
`DB_HOST`
`DB_DIALECT`
`DB_PORT`
`SECRET`

```bash
    SERVER_PORT=8081
    DB_NAME="ortemon"
    DB_USER="root"
    DB_PASSWORD=""
    DB_HOST="localhost"
    DB_DIALECT="mysql"
    DB_PORT=3306
    SECRET="pokepoke"
```



## Instalacion de Terceros

Una vez seteado el archivo .env, se debe descargar [XAMPP](https://www.apachefriends.org/download.html)
En él, van a poder levantar un servidor mysql + apache.

Una vez descargado y XAMPP levantado, debe ingresar a la solapa "admin" dentro del renglón mysql, y crear una base con el nombre 'ortemon'.
## Instalación

Para ejecutar correctamente dicho aplicativo dentro de tu IDE preferido, es necesario correr los comandos en el siguiente orden

```bash
    npm i 
    npm start
```

# Documentación de Rutas y Manejo de Errores

## Rutas PokeApi

### Endpoints:

#### GET /pokeapi/
Obtiene todos los datos de la API de Pokémon.

- *Manejo de Errores:*
  - Si no se encuentran datos, se lanza un error.
  - Si ocurre un error, se envía una respuesta con estado 400 y un mensaje de error genérico.

#### GET /pokeapi/:nameOrId
Obtiene los detalles de un Pokémon específico por nombre o ID.

- *Manejo de Errores:*
  - Si no se encuentran datos para el nombre o ID especificado, se lanza un error.
  - Si ocurre un error, se envía una respuesta con estado 400 y un mensaje de error genérico.

## Rutas Pokémon

### Endpoints:

#### GET /pokemon/
Obtiene todos los Pokémon de la base de datos.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

#### GET /pokemon/tablero/:tableroId
Obtiene los Pokémon por el ID del tablero.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

#### GET /pokemon/pokemon/:nroPokemon
Obtiene un Pokémon por su número.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

#### POST /pokemon/
Crea un nuevo Pokémon en la base de datos.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 403 y el mensaje del error.

#### PUT /pokemon/:id
Actualiza un Pokémon existente por su ID.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

#### DELETE /pokemon/:id
Elimina un Pokémon por su ID.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

## Rutas Usuario

### Endpoints:

#### POST /user/
Crea un nuevo usuario en la base de datos.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

#### POST /user/login
Inicia sesión de un usuario.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 404 y el mensaje del error.

#### POST /user/logout
Cierra la sesión de un usuario.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

#### GET /user/all/:id
Obtiene todos los usuarios de la base de datos (requiere validación de rol).

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

#### GET /user/:id
Obtiene un usuario por su ID.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

#### PUT /user/admin/:id
Asigna rol de administrador a un usuario por su ID.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

#### DELETE /user/:id/delete/:idUser
Elimina un usuario por su ID (requiere validación de rol).

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

#### GET /user/login/me
Obtiene información del usuario logueado (requiere validación de sesión).

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

## Rutas Tablero

### Endpoints:

#### GET /tablero/
Obtiene todos los tableros de la base de datos.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.

#### GET /tablero/:id
Obtiene un tablero por su ID.

- *Manejo de Errores:*
  - Si ocurre un error, se envía una respuesta con estado 400 y el mensaje del error.
## Autores

- [@Anibal Montalti](https://github.com/AnibalMontalti)
- [@Ignacio Lutteri](https://github.com/ilutteri)
- [@Lucas Benvin](https://github.com/HumbleDragon-IA)

