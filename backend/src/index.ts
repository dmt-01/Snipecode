import { createRequire } from "node:module";
import cookieParser from "cookie-parser";
import { fileURLToPath } from "node:url";
import type { CorsOptions } from "cors";
import router from "./routes";
import Express from "express";
import path from "node:path";

//@ts-ignore
const require = createRequire(import.meta.url);
const cors: typeof import("cors") = require("cors");

const app = Express();
const PORT = 3000;

//@ts-ignore
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const CORS_OPTIONS: CorsOptions = {
  origin: ["http://localhost:5143"],
  methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(CORS_OPTIONS));

app.use(cookieParser());
app.use(Express.static(path.join(__dirname, "public")));
app.use(Express.urlencoded({ extended: true }));
app.use(Express.json());

app.use(router);

app.listen(PORT, () => {
  console.log(`Le serveur a démarré sur le port ${PORT}`);
});

export default app;
