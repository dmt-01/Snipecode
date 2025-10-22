interface UsersTypeRow {
  id_users: number;
  mdp: string;
  pseudo: string;
  email: string;
}

export class Users {
  protected id_users: number;
  protected mdp: string;
  protected pseudo: string;
  protected email: string;

  constructor(id_users: number, mdp: string, pseudo: string, email: string) {
    this.id_users = id_users;
    this.mdp = mdp;
    this.pseudo = pseudo;
    this.email = email;
  }

  static fromRow(row: UsersTypeRow): Users {
    return new Users(row.id_users, row.mdp, row.pseudo, row.email);
  }
}
