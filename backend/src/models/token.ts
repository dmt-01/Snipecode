interface TokenTypeRow {
  id_token: number;
  dates: Date;
  is_users: number;
}

export class Token {
  protected id_token: number;
  protected dates: Date;
  protected is_users: number;

  constructor(id_token: number, dates: Date, is_users: number) {
    this.id_token = id_token;
    this.dates = dates;
    this.is_users = is_users;
  }

  static fromRow(row: TokenTypeRow): Token {
    return new Token(row.id_token, row.dates, row.is_users);
  }

  getIdToken(): number {
    return this.id_token;
  }

  getDates(): Date {
    return this.dates;
  }

  getIsUsers(): number {
    return this.is_users;
  }
}
