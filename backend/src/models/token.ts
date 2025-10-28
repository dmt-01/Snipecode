import { TokenTypeRow } from "../types/types";

export class Token {
  protected id_token: number;
  protected dates: Date;
  protected id_users: number;

  constructor(id_token: number, dates: Date, id_users: number) {
    this.id_token = id_token;
    this.dates = dates;
    this.id_users = id_users;
  }

  static fromRow(row: TokenTypeRow): Token {
    return new Token(row.id_token, row.dates, row.id_users);
  }

  getIdToken(): number {
    return this.id_token;
  }

  getDates(): Date {
    return this.dates;
  }

  getIsUsers(): number {
    return this.id_users;
  }
}
