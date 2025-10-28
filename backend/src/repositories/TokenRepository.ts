import { Repository } from "../libs/Repository";
import { Token } from "../models/token";

export class TokenRepository extends Repository {
  async findAllUsers(): Promise<Token[]> {
    const query = {
      name: "fetch-all-users",
      text: "SELECT * FROM token",
    };

    try {
      const result = await this.pool.query(query);

      return result.rows.map((row) => Token.fromRow(row));
    } catch (error) {
      throw error;
    }
  }
}
