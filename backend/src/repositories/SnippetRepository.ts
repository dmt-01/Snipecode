import { Repository } from "../libs/Repository";
import { Snippet } from "../models/snippet";

export class SnippetRepository extends Repository {
  async findAllSnippet(): Promise<Snippet[]> {
    const query = {
      name: "fetch-all-users",
      text: "SELECT * FROM snippet",
    };

    try {
      const result = await this.pool.query(query);

      return result.rows.map((row) => Snippet.fromRow(row));
    } catch (error) {
      throw error;
    }
  }

  async findSnippetById(snippetId: number): Promise<Snippet | null> {
    const query = {
      name: "fetch-snippet-by-id",
      text: "SELECT * FROM snippet WHERE id_snippet = $1",
      values: [snippetId],
    };

    try {
      const result = await this.pool.query(query);

      if (result.rows.length > 0) {
        return Snippet.fromRow(result.rows[0]);
      }

      return null;
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

  async AllSnippetLikeCommentPublic(): Promise<Snippet[]> {
    const query = {
      name: "fetch-all-snippet-like-comment",
      text: `SELECT s.*, 
      COUNT(DISTINCT uls.id_users) AS like_count,
      COUNT(DISTINCT cs.id_comment) AS comment_count
      FROM snippet s
      LEFT JOIN users_likes_snippet uls ON s.id_snippet = uls.id_snippet
      LEFT JOIN users_comment_snippet cs ON s.id_snippet = cs.id_snippet
      WHERE s.visibility = 'public'
      GROUP BY s.id_snippet
      ORDER BY like_count, comment_count;`,
    };
    
    try {
      const result = await this.pool.query(query);
      
      return result.rows.map((row) => Snippet.fromRow(row));
    } catch (error) {
      throw error;
    }
  }

  async AllSnippetLikeCommentPrivate(): Promise<Snippet[]> {
    const query = {
      name: "fetch-all-snippet-like-comment",
      text: `SELECT s.*, 
      COUNT(DISTINCT uls.id_users) AS like_count,
      COUNT(DISTINCT cs.id_comment) AS comment_count
      FROM snippet s
      LEFT JOIN users_likes_snippet uls ON s.id_snippet = uls.id_snippet
      LEFT JOIN users_comment_snippet cs ON s.id_snippet = cs.id_snippet
      WHERE s.visibility = 'private'
      GROUP BY s.id_snippet
      ORDER BY like_count, comment_count;`,
    };
    
    try {
      const result = await this.pool.query(query);
      
      return result.rows.map((row) => Snippet.fromRow(row));
    } catch (error) {
      throw error;
    }
  }

  async allSnippetByUserId(userId: number): Promise<Snippet[]> {
    const query = {
      name: "fetch-all-snippet-by-user-id",
      text: `SELECT s.*, 
      COUNT(DISTINCT uls.id_users) AS like_count,
      COUNT(DISTINCT cs.id_comment) AS comment_count
      FROM snippet s
      LEFT JOIN users_likes_snippet uls ON s.id_snippet = uls.id_snippet
      LEFT JOIN users_comment_snippet cs ON s.id_snippet = cs.id_snippet
      WHERE s.id_user = $1
      GROUP BY s.id_snippet
      ORDER BY like_count DESC, comment_count DESC;`,
      values: [userId],
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
        return Snippet.fromRow(result.rows[0]);
      }
  
      return null;
    } catch (error) {
      throw error;
    }
  }
}
