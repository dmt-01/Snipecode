import { z } from "zod";

export const createSnippetSchema = z.object({
  title: z.string().min(1, "Titre est requis").max(50, "Titre trop long"),
  language_snippet: z.string().min(1, "Langage est requis").max(50, "Langage trop long"),
  tags: z.string().max(50, "Tags trop long").optional(),
  text_snippet: z.string().min(1, "Texte est requis").max(1000, "Texte trop long"),
  visibility: z.string().min(1, "Visibilité est requis").max(50, "Visibilité trop long"),
});