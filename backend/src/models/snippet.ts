import { SnipetTypeRow } from "../types/types";

export class Snippet {
  protected id_snippet: number;
  protected title: string;
  protected language_snippet: string;
  protected tags: string | null;
  protected text_snippet: string;
  protected visibility: string;

  constructor(
    id_snippet: number,
    title: string,
    language_snippet: string,
    tags: string | null,
    text_snippet: string,
    visibility: string
  ) {
    this.id_snippet = id_snippet;
    this.title = title;
    this.language_snippet = language_snippet;
    this.tags = tags;
    this.text_snippet = text_snippet;
    this.visibility = visibility;
  }

  static fromRow(row: SnipetTypeRow): Snippet {
    return new Snippet(
      row.id_snippet,
      row.title,
      row.language_snippet,
      row.tags,
      row.text_snippet,
      row.visibility
    );
  }

  getIdSnippet(): number {
    return this.id_snippet;
  }

  getTitle(): string {
    return this.title;
  }

  getLanguageSnippet(): string {
    return this.language_snippet;
  }

  getTags(): string | null {
    return this.tags;
  }

  getTextSnippet(): string {
    return this.text_snippet;
  }

  getVisibility(): string {
    return this.visibility;
  }
}
