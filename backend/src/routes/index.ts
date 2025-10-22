import { Router } from "express";
import { globalsRouter } from "./Globals";

const router = Router();

router.use("/", globalsRouter);

export default router;
