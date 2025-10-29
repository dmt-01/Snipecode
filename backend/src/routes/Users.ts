import { UsersController } from "../controller/UsersController";
import { Router } from "express";

const UsersRouter = Router();

UsersRouter.get("/users", async (req, res) => {
  const controller = new UsersController(req, res);
  await controller.findAll
});

UsersRouter.post("/insertusers", async (req, res) => {
  const controller = new UsersController(req, res);
  await controller.createUser();
});;

UsersRouter.get("/users/email/:email", async (req, res) => {
  const controller = new UsersController(req, res);
  await controller.findByEmail();
});

export default UsersRouter;