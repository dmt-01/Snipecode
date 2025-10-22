import { Controller } from "../libs/Controller";
import { UserRepository } from "../repositories/UsersRepository";

export class GlobalsController extends Controller {
  
  public async findAll() {
    const UsersRepositorie = new UserRepository();
    const users = await UsersRepositorie.findAllUsers();
    
    if (!users) {
      this.response.status(404).json({
        success: false,
        message: "Le user n'existe pas",
      });
      return;
    }

    this.response.json({
      success: true,
      data: users,
    });
  };
}
