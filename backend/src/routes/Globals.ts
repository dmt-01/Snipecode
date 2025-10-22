import { Router } from "express";
import { GlobalsController } from "../controller/GlobalsController";

export const globalsRouter = Router();

globalsRouter.get("/test", (req, res) => {
  const controller = new GlobalsController(req, res);
  controller.findAll();
});
