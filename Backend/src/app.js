// ==== dotenv settings ======
import dotenv from "dotenv";
import { resolve } from "path";

dotenv.config();
// ====== importações ======
import express from "express";
import cors from "cors";
import helmet from "helmet";
import delay from "express-delay";
// === import das rotas ====
import homeRoutes from "./routes/homeRoutes";
import userRoutes from "./routes/UserRoutes";
import tokenRoutes from "./routes/TokenRoutes";
import alunoRoutes from "./routes/AlunoRoutes";
import fotoRoutes from "./routes/FotoRoutes";

// import database sequelize
import "./database";
// constante  p/ helmet e cors
const whiteList = [
  "http://localhost:3000",
  "http://localhost:3001",
  "http://localhost:3002",
];

const corsOptions = {
  origin: (origin, callback) => {
    if (whiteList.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
};
// express com class
class App {
  constructor() {
    // utilizando this
    this.app = express();
    this.middlewares();
    this.routes();
  }

  // criando metodo middleware
  middlewares() {
    // config json
    this.app.use(express.urlencoded({ extended: true })); // <- convert dados da web
    this.app.use(express.json()); // <-- faz leitura do json
    this.app.use(express.static(resolve(__dirname, "..", "upload", "img"))); // <- arquivo estatico
    // config segurança - liberar acess
    this.app.use(cors(corsOptions));
    this.app.use(helmet.hidePoweredBy());
    this.app.use(delay(900));
  }

  routes() {
    // config rotas
    this.app.use("/", homeRoutes);
    this.app.use("/users/", userRoutes);
    this.app.use("/tokens/", tokenRoutes);
    this.app.use("/aluno/", alunoRoutes);
    this.app.use("/fotos/", fotoRoutes);
  }
}

// fazendo exportação do app
export default new App().app;
