import { Router } from "express";
import { SnippetController } from "../controller/SnippetController";

const SnippetRouter = Router();
SnippetRouter.post("/insertsnippets", async (req, res) => {
  const controller = new SnippetController(req, res);
  await controller.insertSnippet();
});

SnippetRouter.get("/snippets", async (req, res) => {
  const controller = new SnippetController(req, res);
  await controller.findAll();
});
////////////////////////////////////////////////
SnippetRouter.get("/snippets/user/:id", async (req, res) => {
  const controller = new SnippetController(req, res);
  await controller.findAllSnippetByUserId();
});

SnippetRouter.get("/snippets/:id", async (req, res) => {
  const controller = new SnippetController(req, res);
  await controller.findById();
});

SnippetRouter.get("/snippets/like/:id", async (req, res) => {
  const controller = new SnippetController(req, res);
  await controller.findByLike();
});

////////////////////////////////////////////////
SnippetRouter.get("/snippets/public", async (req, res) => {
  const controller = new SnippetController(req, res);
  await controller.findAllLikeCommentPublic();
});

////////////////////////////////////
SnippetRouter.get("/snippets/private", async (req, res) => {
  const controller = new SnippetController(req, res);
  await controller.findAllLikeCommentPrivate();
});

export default SnippetRouter;
