import { UserRepository } from "../repositories/UserRepository";
import { schemaUsers } from "../libs/schemaZod/schemaUsers";
import { Controller } from "../libs/Controller";

export class UsersController extends Controller {
  public async findAll() {
    try {
      const userRepository = new UserRepository();
      const users = await userRepository.findAllUsers();

      if (!users) {
        this.response.status(404).json({
          success: false,
          message: "Pas de User trouver",
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
        .json({ success: false, message: "Serveur erreur" });
    }
  }

    public async createUser() {
    try {
      const parseResult = schemaUsers.safeParse(this.request.body);
      if (!parseResult.success) {
        this.response.status(400).json({
          success: false,
          message: "Données invalides",
        });
        return;
      }

      const { email, password, username } = parseResult.data;

      const userRepository = new UserRepository();
      const newUser = await userRepository.NewUser(email, password, username);

      this.response.status(201).json({
        success: true,
        data: newUser,
      });
    } catch (error) {
      this.response
        .status(500)
        .json({ success: false, message: "Serveur erreur" });
    }
  }

  public async findByEmail() {
    try {
      const { email } = this.request.params;

      const userRepository = new UserRepository();
      const user = await userRepository.findUserByEmail(email);

      if (!user) {
        this.response.status(404).json({
          success: false,
          message: "User non trouvée",
        });
        return;
      }

      this.response.json({
        success: true,
        data: user,
      });
    } catch (error) {
      this.response
        .status(500)
        .json({ success: false, message: "Serveur erreur" });
    }
  }
}