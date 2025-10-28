import { Router } from "express";
import { globalsRouter } from "./Globals";
import SnippetRouter from "./Snippet";

const router = Router();

router.use("/api", globalsRouter);
router.use("/api", SnippetRouter);

export default router;
