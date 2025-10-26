import { z } from "zod";

export const createSnippetSchema = z.object({
  title: z.string().min(1, "Title is required").max(50, "Titre trop long"),
  language_snippet: z.string().min(1, "Language is required").max(50, "Language trop long"),
  tags: z.string().max(50, "Tags trop long").optional(),
  text_snippet: z.string().min(1, "Text is required").max(250, "Text trop long"),
  visibility: z.string().min(1, "Visibility is required").max(50, "Visibility trop long"),
});