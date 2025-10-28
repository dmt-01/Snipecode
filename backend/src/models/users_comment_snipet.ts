import { users_comment_snippetTypeRow } from "../types/types";


export class UsersCommentSnippet {
  protected id_users: number;
  protected id_snippet: number;
  protected comment: string;

  constructor(id_users: number, id_snippet: number, comment: string) {
    this.id_users = id_users;
    this.id_snippet = id_snippet;
    this.comment = comment;
  }

  static fromRow(row: users_comment_snippetTypeRow): UsersCommentSnippet {
    return new UsersCommentSnippet(row.id_users, row.id_snippet, row.comment);
  }

  getIdUsers(): number {
    return this.id_users;
  }

  getIdSnippet(): number {
    return this.id_snippet;
  }

  getComment(): string {
    return this.comment;
  }
}
