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

  async NewUser(
    email: string,
    password: string,
    username: string
  ): Promise<Users> {
    const query = {
      name: "create-new-user",
      text: `INSERT INTO users (email, password, username)
             VALUES ($1, $2, $3)
             RETURNING *`,
      values: [email, password, username],
    };

    try {
      const result = await this.pool.query(query);

      return Users.fromRow(result.rows[0]);
    } catch (error) {
      throw error;
    }
  }

  async findUserByEmail(email: string): Promise<Users | null> {
    const query = {
      name: "fetch-user-by-email",
      text: "SELECT * FROM users WHERE email = $1",
      values: [email],
    };
    try {
      const result = await this.pool.query(query);

      if (result.rows.length > 0) {
        return Users.fromRow(result.rows[0]);
      }

      return null;
    } catch (error) {
      throw error;
    }
  }
}
