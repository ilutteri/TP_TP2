import { Router } from "express";
import TableroControllers from "../Controllers/TableroControllers.js";

const tableroControllers = new TableroControllers();
const tableroRoutes = Router();

tableroRoutes.get("/", tableroControllers.getAllTablero);
tableroRoutes.get("/:id", tableroControllers.getTableroById);

export default tableroRoutes;