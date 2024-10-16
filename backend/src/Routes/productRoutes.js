import express from "express";
import {upload} from "../helpers/multer.js";
import { createProduct, listProducts } from "../Controllers/products.controllers.js";

const router = express.Router();

// Ruta para crear un nuevo producto (con imagen)
router.post("/products", upload.single("image"), createProduct);

// Ruta para listar todos los productos
router.get("/products", listProducts);

export default router;