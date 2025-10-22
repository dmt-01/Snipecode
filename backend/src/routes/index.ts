import { Router } from "express";
import { globalsRouter } from "./Globals";

const router = Router();

router.use("/api", globalsRouter);

export default router;
