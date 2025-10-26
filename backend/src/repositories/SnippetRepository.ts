import { Repository } from "../libs/Repository";
import { Snippet } from "../models/snippet";

export class SnippetRepository extends Repository {
  async findAllSnippet(): Promise<Snippet[]> {
    const query = {
      name: "fetch-all-users",
      text: "SELECT * FROM users",
    };

    try {
      const result = await this.pool.query(query);

      return result.rows.map((row) => Snippet.fromRow(row));
    } catch (error) {
      throw error;
    }
  }

  async findSnippetByLike(): Promise<Snippet[]> {
    const query = {
      name: "fetch-snippet-by-like",
      text: `SELECT s.* FROM snippet s
             JOIN users_likes_snippet uls ON s.id_snippet = uls.id_snippet
             GROUP BY s.id_snippet
             ORDER BY COUNT(uls.id_users) DESC`,
    };

    try {
      const result = await this.pool.query(query);

      return result.rows.map((row) => Snippet.fromRow(row));
    } catch (error) {
      throw error;
    }
  }

  async NewSnippet(snippetData: {
    title: string;
    language_snippet: string;
    tags: string | null;
    text_snippet: string;
    visibility: string;
  }): Promise<Snippet | null> {
    const query = {
      name: "fetch-new-snippet",
      text: `iNSERT INTO snippet (title, language_snippet, tags, text_snippet, visibility)
             VALUES ($1, $2, $3, $4, $5)
             RETURNING *;`,
      values: [
        snippetData.title,
        snippetData.language_snippet,
        snippetData.tags ?? null,
        snippetData.text_snippet,
        snippetData.visibility,
      ],
    };

    try {
      const result = await this.pool.query(query);

      if (result.rows.length > 0) {
        return result.rows[0];
      }

      return null;
    } catch (error) {
      throw error;
    }
  }
}
