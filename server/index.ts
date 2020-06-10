import dotenv from "dotenv";
import App from "./app";

// Initialize env variables
dotenv.config();

const port =
  typeof process.env.PORT === "string" ? parseInt(process.env.PORT) : 3000;

const app = new App();

app.start(port);
