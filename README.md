# C.R.U.D Cursos

Proyecto simple de gestión de cursos utilizando Node.js. Permite realizar operaciones de Crear, Leer, Actualizar y Eliminar (CRUD) sobre una colección de cursos.

## Características
- API REST para gestionar cursos
- Operaciones CRUD completas
- Código sencillo y fácil de entender

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/JRiveraCode/C.R.U.D-Cursos.git
   ```
2. Instala las dependencias:
   ```bash
   npm install
   ```

## Uso
Ejecuta la aplicación con:
```bash
node app.js
```

La API estará disponible en `http://localhost:3000` (o el puerto configurado).

## Endpoints programacion
- `GET /api/cursos` — Lista todos los cursos
- `GET /api/cursos/programacion` — Lista todos los cursos de programación
- `GET /api/cursos/programacion/:id` — Obtiene un curso de programación por ID
- `GET /api/cursos/programacion/:lenguaje?ordenar=vistas` — Obtiene el curso de programación por lenguaje y ordena por vistas
- `GET /api/cursos/programacion/:nivel` — Obtiene un curso de programación por nivel

## Endpoints matematicas

- `GET /api/cursos/matematicas` — Lista todos los cursos de matemáticas
- `GET /api/cursos/matematicas/:id` — Obtiene un curso de matemáticas por ID
- `GET /api/cursos/matematicas/:tema?ordenar=vistas` — Obtiene el curso de matemáticas por tema y ordena por vistas
- `GET /api/cursos/matematicas/:nivel` — Obtiene un curso de matemáticas por nivel

## Endpoints idiomas

- `GET /api/cursos/idiomas` — Lista todos los cursos de idiomas
- `GET /api/cursos/idiomas/:id` — Obtiene un curso de idiomas por ID
- `GET /api/cursos/idiomas/:idioma?ordenar=vistas` — Lista todos los cursos de idiomas por idioma y ordena por vistas
- `GET /api/cursos/idiomas/:nivel` — Obtiene un curso de idiomas por nivel

## Endpoints adicionales

- `POST /api/cursos/programacion` — Crea un nuevo curso de programación
- `POST /api/cursos/matematicas` — Crea un nuevo curso de matemáticas
- `POST /api/cursos/idiomas` — Crea un nuevo curso de idiomas

- `PUT /api/cursos/programacion/:id` — Actualiza un curso de programación existente
- `PUT /api/cursos/matematicas/:id` — Actualiza un curso de matemáticas existente
- `PUT /api/cursos/idiomas/:id` — Actualiza un curso de idiomas existente

- `DELETE /api/cursos/programacion/:id` — Elimina un curso de programación existente
- `DELETE /api/cursos/matematicas/:id` — Elimina un curso de matemáticas existente
- `DELETE /api/cursos/idiomas/:id` — Elimina un curso de idiomas existente


## Autor
- JRiveraCode - Zander1612 - cesarbdeveloper

## Licencia
Este proyecto está bajo la licencia MIT.