# Server

---

## Tecnologías y librerías utilizadas

- **Node.js** – entorno de ejecución
- **Express 5** – framework para manejar rutas y middlewares
- **MongoDB** – base de datos NoSQL
- **bcrypt** – para encriptar contraseñas
- **jsonwebtoken** – para autenticación con tokens JWT
- **zod** – validaciones de datos del lado del servidor
- **cookie-parser** – manejo de cookies HTTP
- **cors** – configuración de acceso entre dominios
- **helmet** – cabeceras HTTP seguras
- **dotenv** – manejo de variables de entorno
- **nodemon** – recarga automática en desarrollo

---

## Instalación y Uso.

1. **Accede al directorio del servidor**

```bash
cd server
```

2. **Instala las dependencias**

```node
npm install
```

3. **Ejecuta el servidor**

```node
npm start
```

---

## Endpoints

- **Auth**

  ```http
  /auth
  ```

- **Productos**

  ```http
  /productos
  ```

- **Citas**

  ```http
    /citas
  ```

---

### Auth

#### Register

```http
POST /auth/register
```

**Body de la Request:**

```json
{
  "email": "string (email)",
  "username": "string",
  "direccion": "string",
  "celular": "string",
  "password": "string",
  "acceptedTerms": true
}
```

**Respuesta:**

```json
{
  "code": 200,
  "message": "Se registro el usuario exitosamente",
  "data": {}
}
```

---

#### Login

```http
POST /auth/login
```

**Body de la Request:**

```json
{
  "email": "string (email)",
  "password": "string"
}
```

Le pasa una cookie por httpsOnly

**Respuesta:**

```json
{
  "code": 200,
  "message": "Usuario logueado exitosamente",
  "accessToken": "",
  "user": {}
}
```

---

#### Refresh Token

```http
POST /auth/refresh-token
```

**Body de la Request:**

No hay, debe tener la cookie con el accessToken valido.

**Respuesta:**

```json
{
  "accessToken": "",
  "user": {}
}
```

---

#### Logout

```http
POST /auth/logout
```

**Body de la Request:**

No hay, le pasa una cookie expirada para que el navegador la deseche y asi invalide la sesión

**Respuesta:**

```json
{
  "message": "Cookie invalidada"
}
```

---

### Productos

#### getAllMyProducts

```http
POST /productos/getAllMyProducts
```

**Body de la Request:**

```json
{
{
    "userId": ""
}
}
```

**Respuesta:**

```json
{
  "code": 200,
  "message": "Se listaron los producto exitosamente",
  "data": []
}
```

---

#### add

```http
POST /productos/add
```

**Body de la Request:**

```json
{
  "userId": "",
  "id": "",
  "nombre": "",
  "descripcion": "",
  "tipo": "",
  "precio": 0,
  "stock": 0
}
```

**Respuesta:**

```json
{
  "code": 200,
  "message": "Se listaron los producto exitosamente",
  "data": []
}
```

---

#### edit

```http
POST /productos/edit
```

**Body de la Request:**

```json
{
  "idProduct": "",
  "userId": "",
  "nombre": "",
  "descripcion": "",
  "tipo": "",
  "precio": 0,
  "stock": 0
}
```

**Respuesta:**

```json
{
  "code": 200,
  "message": "Se edito el producto exitosamente",
  "data": {}
}
```

---

#### delete

```http
POST /productos/delete
```

**Body de la Request:**

```json
{
  "id": ""
}
```

**Respuesta:**

```json
{
  "code": 200,
  "message": "Se elimino el producto exitosamente",
  "data": {}
}
```

---

### Citas

#### getAllByUser

Obtiene todas las citas programadas por el usuario.

```http
POST /citas/getAllByUser
```

**Body de la Request:**

```json
{
  "userId": string
}
```

**Respuesta:**

```json
{
  "result": [{...}]
}
```

---

#### programarCita

Permite programar una cita al usuario.

```http
POST /citas/programarCita
```

**Body de la Request:**

```json
{
  "userId": "",
  "servicio": "",
  "descripcion": "",
  "fechaInicial": "",
  "fechaFinal": ""
}
```

**Respuesta:**

```json
{
  "result": {}
}
```

---

#### editarCita

Permite programar una cita al usuario.

```http
POST /citas/editarCita
```

**Body de la Request:**

```json
{
  "userId": "",
  "cita": {
    "servicio": "",
    "descripcion": "",
    "fechaInicial": "",
    "fechaFinal": ""
  }
}
```

**Respuesta:**
Vacía

---

#### eliminarCita

Permite programar una cita al usuario.

```http
POST /citas/eliminarCita
```

**Body de la Request:**

```json
{
  "userId": ""
}
```

**Respuesta:**

```json
{
  "result": {}
}
```

---
