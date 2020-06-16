import { json, urlencoded } from "body-parser";
import express from "express";
import { connectToDb } from "./dbConnection";
import IController from "./controllers/IController";
import errorMiddleWare from "./middleware/error";
import loggerMiddleWare from "./middleware/logger";

class App {
  public app: express.Application;

  constructor(controllers: IController[]) {
    this.app = express();
    this.config();
    this.setMiddlewares();
    this.setRoutes(controllers);
  }

  config() {
    this.app.use(json());
    this.app.use(urlencoded({ extended: false }));
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
