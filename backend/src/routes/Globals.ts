import { Router } from "express";
import { GlobalsController } from "../controller/GlobalsController";

export const globalsRouter = Router();

globalsRouter.get("/users", async (req, res) => {
  const controller = new GlobalsController(req, res);
  await controller.findAll();
});
