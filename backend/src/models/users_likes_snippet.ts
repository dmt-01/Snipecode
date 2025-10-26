interface UsersLikesSnippetTypeRow {
  id_users: number;
  id_snippet: number;
}

export class UsersLikesSnippet {
  protected id_users: number;
  protected id_snippet: number;

  constructor(id_users: number, id_snippet: number) {
    this.id_users = id_users;
    this.id_snippet = id_snippet;
  }

  static fromRow(row: UsersLikesSnippetTypeRow): UsersLikesSnippet {
    return new UsersLikesSnippet(row.id_users, row.id_snippet);
  }

  getIdUsers(): number {
    return this.id_users;
  }

  getIdSnippet(): number {
    return this.id_snippet;
  }
}
