import z from "zod";

export const schemaUsers = z.object({
  email: z.string().email("Email invalide").max(100, "Email trop long"),
  password: z
    .string()
    .min(6, "Le mot de passe doit contenir au moins 6 caractères")
    .max(100, "Mot de passe trop long"),
  username: z
    .string()
    .min(3, "Le nom d'utilisateur doit contenir au moins 3 caractères")
    .max(50, "Nom d'utilisateur trop long"),
});
