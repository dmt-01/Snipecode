import { Controller } from "../libs/Controller";
import { SnippetRepository } from "../repositories/SnippetRepository";
import { UserRepository } from "../repositories/UsersRepository";

export class GlobalsController extends Controller {
  public async findAll() {
    try {
      const UsersRepositorie = new UserRepository();
      const users = await UsersRepositorie.findAllUsers();

      if (!users) {
        this.response.status(404).json({
          success: false,
          message: "Aucun utilisateur trouvé",
        });
        return;
      }

      this.response.json({
        success: true,
        data: users,
      });
    } catch (error) {
      this.response
        .status(500)
        .json({ success: false, message: "Erreur serveur" });
    }
  }
}
