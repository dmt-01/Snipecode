import { Controller } from "../libs/Controller";
import { createSnippetSchema } from "../libs/schemaZod/schemaSnippet";
import { SnippetRepository } from "../repositories/SnippetRepository";

export class SnippetController extends Controller {
  public async findAll() {
    try {
      const SnippetRepositorie = new SnippetRepository();
      const Snippet = await SnippetRepositorie.findAllSnippet();

      if (!Snippet) {
        this.response.status(404).json({
          success: false,
          message: "Le Snippet n'existe pas",
        });
        return;
      }

      this.response.json({
        success: true,
        data: Snippet,
      });
    } catch (error) {
      this.response
        .status(500)
        .json({ success: false, message: "Erreur serveur" });
    }
  }

  public async findAllSnippetByUserId() {
    try {
      const userId = Number(this.request.params.id);

      const snippetRepository = new SnippetRepository();
      const snippets = await snippetRepository.allSnippetByUserId(userId);

      this.response.json({
        success: true,
        data: snippets,
      });
    } catch (error) {
      this.response
        .status(500)
        .json({ success: false, message: "Erreur serveur" });
    }
  }

  public async findById() {
    try {
      const snippetId = Number(this.request.params.id);

      const snippetRepository = new SnippetRepository();
      const snippet = await snippetRepository.findSnippetById(snippetId);

      if (!snippet) {
        this.response.status(404).json({
          success: false,
          message: "Le snippet n'existe pas",
        });
        return;
      }

      this.response.json({
        success: true,
        data: snippet,
      });
    } catch (error) {
      this.response
        .status(500)
        .json({ success: false, message: "Erreur serveur" });
    }
  }
  
  public async insertSnippet() {
    try {
      const parseResult = createSnippetSchema.safeParse(this.request.body);

      if (!parseResult.success) {
        this.response.status(400).json({
          success: false,
          message: "Invalid input",
        });
        return;
      }

      const snippetData = {
        ...parseResult.data,
        tags: parseResult.data.tags ?? null,
      };

      const snippetRepository = new SnippetRepository();
      const newSnippet = await snippetRepository.NewSnippet(snippetData);

      if (!newSnippet) {
        this.response.status(500).json({
          success: false,
          message: "Failed to create snippet",
        });
        return;
      }

      this.response.status(201).json({
        success: true,
        data: newSnippet,
      });
    } catch (error) {
      this.response
        .status(500)
        .json({ success: false, message: "Erreur serveur" });
    }
  }

  public async findByLike() {
    try {
      const snippetRepository = new SnippetRepository();
      const snippets = await snippetRepository.findSnippetByLike();

      this.response.json({
        success: true,
        data: snippets,
      });
    } catch (error) {
      this.response
        .status(500)
        .json({ success: false, message: "Erreur serveur" });
    }
  }

  public async findAllLikeCommentPublic() {
    try {
      const snippetRepository = new SnippetRepository();
      const snippets = await snippetRepository.AllSnippetLikeCommentPublic();

      this.response.json({
        success: true,
        data: snippets,
      });
    } catch (error) {
      this.response
        .status(500)
        .json({ success: false, message: "Erreur serveur" });
    }
  }

  public async findAllLikeCommentPrivate() {
    try {
      const snippetRepository = new SnippetRepository();
      const snippets = await snippetRepository.AllSnippetLikeCommentPrivate();

      this.response.json({
        success: true,
        data: snippets,
      });
    } catch (error) {
      this.response
        .status(500)
        .json({ success: false, message: "Erreur serveur" });
    }
  }
}
