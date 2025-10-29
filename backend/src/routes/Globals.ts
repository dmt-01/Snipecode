import { GlobalsController } from "../controller/GlobalsController";
import { Router } from "express";

export const globalsRouter = Router();

globalsRouter.get("/users", async (req, res) => {
  const controller = new GlobalsController(req, res);
  await controller.findAll();
});