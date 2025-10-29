import { globalsRouter } from "./Globals";
import SnippetRouter from "./Snippet";
import UsersRouter from "./Users";
import { Router } from "express";

const router = Router();

router.use("/api", globalsRouter);
router.use("/api", SnippetRouter);
router.use("/api", UsersRouter);

export default router;
