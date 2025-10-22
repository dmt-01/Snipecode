import { Repository } from "../libs/Repository";
import { Users } from "../models/users";

export class UserRepository extends Repository {

  async findAllUsers(): Promise<Users[]> {

    const query = {
      name: "fetch-all-users",
      text: "SELECT * FROM users",
    };

    try {

      const result = await this.pool.query(query);

      return result.rows.map((row) => Users.fromRow(row));
    } catch (error) {
      throw error;
    }
  }
}
