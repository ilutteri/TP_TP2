import { Router } from "express";
import TableroControllers from "../Controllers/TableroControllers.js";

const tableroControllers = new TableroControllers();
const tableroRoutes = Router();

tableroRoutes.get("/", tableroControllers.getAllTablero);
tableroRoutes.get("/:id", tableroControllers.getTableroById);
/* tableroRoutes.post("/", tableroControllers.createTablero);
tableroRoutes.put("/:id", tableroControllers.updateTablero);
tableroRoutes.delete("/:id", tableroControllers.deleteTablero); */

export default tableroRoutes;