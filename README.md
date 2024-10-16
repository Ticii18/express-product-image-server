# Servidor de Productos

Este proyecto implementa un servidor básico que permite a los empleados de una tienda agregar nuevos productos y adjuntar imágenes. El sistema utiliza Express.js y almacena temporalmente los productos en memoria.


## Funcionalidades

1. **Configuración básica del servidor con Express.js:**
   - Organización modular del código (rutas, controladores, middlewares).
2. **Endpoint para la creación de productos:**
   - POST /products
   - Campos: name, description, price
   - Adjunta una imagen usando Multer
   - Almacena productos en memoria

3. **Manejo de imágenes:**
   - Configuración de Multer para aceptar solo jpg y png
   - Almacenamiento de imágenes en la carpeta 'uploads'
   - Generación de URL para las imágenes almacenadas

## Estructura del producto

```json
{
  "id": "string",
  "name": "string",
  "description": "string",
  "price": "number",
  "imageUrl": "string"
}
```

## Instalación

1. Clona este repositorio
2. Ingrese a cada carpeta con la consola y ejecuta `npm install` para instalar las dependencias
3. Inicia el servidor con `npm run dev`

## Uso

1. Ingresa al
2. Una vez iniciado el servidor dirigite a esta ruta: `http://localhost:5173/`
3. Completa los formularios con los datos requeridos
4. Adjunta una imagen (jpg o png) del producto

## Tecnologías utilizadas

- Node.js
- Vite.js
- TailwindCSS