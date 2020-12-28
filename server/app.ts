import express from "express";
import { connectToDb } from "./dbConnection";
import IController from "./controllers/IController";
import errorMiddleWare from "./middleware/error";
import loggerMiddleWare from "./middleware/logger";
import dotenv from "dotenv";
import cors from "cors";

class App {
  public app: express.Application;

  constructor(controllers: IController[]) {
    this.app = express();
    this.config();
    this.setMiddlewares();
    this.setRoutes(controllers);
  }

  config() {
    dotenv.config();
    const corsOptions: cors.CorsOptions = {
      origin: true,
      credentials: true
    }
    this.app.use(cors(corsOptions));
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: false }));
  }

  setRoutes(controllers: IController[]) {
    for (const controller of controllers) {
      this.app.use("/", controller.router);
    }
  }

  setMiddlewares() {
    this.app.use(loggerMiddleWare);
    this.app.use(errorMiddleWare);
  }

  async start(port: number) {
    await connectToDb();
    this.app.listen(port, () => {
      console.log(`App is listening on port ${port}`);
    });
  }
}

export default App;
