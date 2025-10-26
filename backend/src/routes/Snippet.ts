import { Router } from "express";
import { SnippetController } from "../controller/SnippetController";

const SnippetRouter = Router();

SnippetRouter.get("/Snippet", async (req, res) => {
  const controller = new SnippetController(req, res);
  await controller.findAll();
});

SnippetRouter.post("/insertsnippet", async (req, res) => {
  const controller = new SnippetController(req, res);
  await controller.insertSnippet();
});

export default SnippetRouter;