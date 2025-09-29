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

## Endpoints principales
- `GET /cursos` — Lista todos los cursos
- `GET /cursos/:id` — Obtiene un curso por ID
- `POST /cursos` — Crea un nuevo curso
- `PUT /cursos/:id` — Actualiza un curso existente
- `DELETE /cursos/:id` — Elimina un curso

## Autor
- JRiveraCode

## Licencia
Este proyecto está bajo la licencia MIT.