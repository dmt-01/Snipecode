interface UsersTypeRow {
  id_users: number;
  password: string;
  pseudo: string;
  email: string;
}

export class Users {
  protected id_users: number;
  protected password: string;
  protected pseudo: string;
  protected email: string;

  constructor(
    id_users: number,
    password: string,
    pseudo: string,
    email: string
  ) {
    this.id_users = id_users;
    this.password = password;
    this.pseudo = pseudo;
    this.email = email;
  }

  static fromRow(row: UsersTypeRow): Users {
    return new Users(row.id_users, row.password, row.pseudo, row.email);
  }

  getIdUsers(): number {
    return this.id_users;
  }

  getPassword(): string {
    return this.password;
  }

  getPseudo(): string {
    return this.pseudo;
  }

  getEmail(): string {
    return this.email;
  }
}
