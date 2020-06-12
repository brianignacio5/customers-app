import express from "express";
import { connectToDb } from "./dbConnection";
import * as bodyParser from "body-parser";
import loggerMiddleWare from "./middleware/logger";
import errorMiddleWare from "./middleware/error";
import IController from "./controllers/IController";

class App {
    private app: express.Application;

    constructor(controllers: IController[]) {
        this.app = express();
        this.config();
        this.setMiddlewares();
        this.setRoutes(controllers);
    }
    
    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        connectToDb();
    }

    setRoutes(controllers: IController[]) {
        for (const controller of controllers) {
            this.app.use("/",  controller.router);
        }
    }

    setMiddlewares() {
        this.app.use(loggerMiddleWare);
        this.app.use(errorMiddleWare);
    }

    start(port: number) {
        this.app.listen(port, () => {
            console.log(`App is listening on port ${port}`);
        })
    }
}

export default App;