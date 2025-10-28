import { Pool } from "pg";
import dotenv from "dotenv";

export class Database {
  private static pool: Pool;

  static getPool(): Pool {
    if (!Database.pool) {
      // Charge les variables d'environnement uniquement si tu exécutes hors Docker
      if (process.env.NODE_ENV !== "production") {
        dotenv.config();
      }

      Database.pool = new Pool({
        user: process.env.POSTGRES_USER,
        password: process.env.POSTGRES_PASSWORD,
        host: process.env.POSTGRES_HOST,
        database: process.env.POSTGRES_DB,
      });
    }

    return Database.pool;
  }
}