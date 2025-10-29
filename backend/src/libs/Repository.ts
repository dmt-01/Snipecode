import { Database } from "../libs/Database";
import { Pool } from "pg";

export abstract class Repository {
  protected pool: Pool;

  constructor() {
    this.pool = Database.getPool();
  }
}
