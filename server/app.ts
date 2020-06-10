import express from "express";
import { connectToDb } from "./dbConnection";
import * as bodyParser from "body-parser";

class App {
    private app: express.Application;

    constructor() {
        this.app = express();
        this.config();
        this.setRoutes();
        this.setMiddlewares();
    }

    config() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        connectToDb();
    }

    setRoutes() {

    }

    setMiddlewares() {

    }

    start(port: number) {
        this.app.listen(port, () => {
            console.log(`App is listening on port ${port}`);
        })
    }
}

export default App;