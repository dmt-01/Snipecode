export interface SnippetTypeRow {
  id_snippet: number;
  title: string;
  language_snippet: string;
  tags: string | null;
  text_snippet: string;
  visibility: string;
}

export interface TokenTypeRow {
  id_token: number;
  dates: Date;
  id_users: number;
}

export interface users_comment_snippetTypeRow {
  id_users: number;
  id_snippet: number;
  comment: string;
}

export interface UsersLikesSnippetTypeRow {
  id_users: number;
  id_snippet: number;
}

export interface UsersTypeRow {
  id_users: number;
  password: string;
  pseudo: string;
  email: string;
}