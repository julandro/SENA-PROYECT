# 🐾 Sistema de Gestión Veterinaria

Un software diseñado para optimizar la atención veterinaria, permitiendo gestionar los productos y las citas de una veterinaria.

Este proyecto será construido con una arquitectura Cliente-Servidor:

- **Frontend:** React (interfaz gráfica).
- **Backend:** ExpressJS (API REST).
- **Base de Datos:** MongoDB.

# Estructura del Proyecto

```bash
/SENA-PROYECTO
│
├── /client/                  # Contiene el código fuente del frontend (React)
│   ├── /src/
│   │   ├── /assets/          # Almacena archivos estáticos como imágenes y logos
│   │   ├── /components/      # Componentes reutilizables de la interfaz de usuario
│   │   │   ├── /auth/        # Componentes para proteger rutas (públicas y privadas)
│   │   │   ├── /layout/      # Define la estructura visual principal de la aplicación
│   │   │   ├── /pages/       # Vistas principales de la aplicación (Citas, Clientes, etc.)
│   │   │   └── /ui/          # Componentes de UI genéricos (alertas, modales)
│   │   ├── /contexts/        # Gestiona el estado global de la aplicación (autenticación, citas)
│   │   ├── /services/        # Define la comunicación con la API del backend
│   │   ├── App.jsx           # Componente raíz que renderiza todas las demás vistas
│   │   └── main.jsx          # Punto de entrada de la aplicación, donde se inicia React
│   ├── .gitignore            # Archivos y carpetas a ignorar por Git
│   ├── eslint.config.js      # Configuración de ESLint para el análisis de código
│   ├── index.html            # Plantilla HTML principal
│   ├── package.json          # Define los scripts y dependencias del frontend
│   ├── README.md             # Documentación específica del cliente
│   └── vite.config.js        # Archivo de configuración para Vite
│
├── /server/                  # Contiene el código fuente del backend (ExpressJS)
│   ├── /src/
│   │   ├── /config/          # Almacena la configuración de la base de datos y variables de entorno
│   │   ├── /middlewares/     # Contiene middlewares para gestionar peticiones (ej. validación de datos)
│   │   ├── /modules/         # Lógica de negocio principal, organizada por módulos (auth, citas, productos)
│   │   │   ├── /auth/        # Maneja la autenticación y registro de usuarios
│   │   │   ├── /Citas/       # Gestiona la lógica de las citas
│   │   │   └── /Productos/   # Gestiona la lógica de los productos
│   │   ├── app.js            # Archivo principal donde se configura Express y los middlewares
│   │   └── server.js         # Inicia el servidor para escuchar peticiones
│   ├── .gitignore            # Archivos y carpetas a ignorar por Git
│   ├── package.json          # Define los scripts y dependencias del backend
│   └── README.md             # Documentación específica del servidor
│
├── LICENSE                   # Licencia del proyecto
├── NOTICE                    # Avisos y reconocimientos
└── README.md                 # Documentación general del proyecto
```

# Tecnologías Utilizadas

### Frontend

- **React:** Biblioteca para construir interfaces de usuario.
- **Vite:** Herramienta de compilación y servidor de desarrollo.
- **Axios:** Cliente HTTP para realizar peticiones a la API.
- **React Router:** Para el enrutamiento en la aplicación.
- **Material-UI:** Componentes de UI de React.
- **FullCalendar:** Para la visualización de citas en un calendario.
- **TanStack Table:** Para la creación de tablas y data grids.

### Backend

- **Express:** Framework para construir la API REST.
- **MongoDB:** Base de datos NoSQL.
- **JWT (JSON Web Tokens):** Para la autenticación de usuarios.
- **Zod:** Para la validación de esquemas y datos.
- **Cors:** Para habilitar el Cross-Origin Resource Sharing.
- **cookie-parser:** Para parsear las cookies de las peticiones.

# Instalación y Ejecución

### 1. Clonar el repositorio

```bash
git clone https://github.com/julandro/SENA-PROYECTO.git
cd SENA-PROYECTO
```

### 2. Configuración del Backend

1.  Navega al directorio del servidor:

    ```bash
    cd server
    ```

2.  Instala las dependencias:

    ```bash
    npm install
    ```

3.  Crea un archivo `.env` en la raíz del directorio `/server` y añade las siguientes variables de entorno:

    ```env
    MONGO_URI=<Tu-URI-de-MongoDB>
    PORT=3000
    DBNAME=<Tu-nombre-de-base-de-datos>
    SALT_ROUNDS=10
    JWT_SECRET=<Tu-secreto-para-JWT>
    JWT_REFRESH_SECRET=<Tu-secreto-para-JWT-refresh>
    NODE_ENV=development
    ```

4.  Inicia el servidor de desarrollo:
    ```bash
    npm run dev
    ```
    El servidor estará corriendo en `http://localhost:3000`.

### 3. Configuración del Frontend

1.  En un nuevo terminal, navega al directorio del cliente:

    ```bash
    cd client
    ```

2.  Instala las dependencias:

    ```bash
    npm install
    ```

3.  **Importante:** Para el desarrollo local, abre el archivo `client/src/services/api.js` y cambia la variable `baseURL` a la dirección de tu servidor local.

    ```javascript
    // Después
    baseURL: 'http://localhost:3000';
    ```

4.  Inicia el cliente de desarrollo:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

# Diagrama de Despliegue

## Estado del Proyecto

- [x] En desarrollo

## Autores

Julian Alejandro Camacho Mendoza
SENA – Tecnología en Análisis y Desarrollo de Software – Ficha 2977360

- **Correo:** [julandro.mza@gmail.com](mailto:julian.camacho@example.com)
- **Github:** [Ir al Github](https://github.com/julandro)
