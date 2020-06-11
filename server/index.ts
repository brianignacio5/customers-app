import dotenv from "dotenv";
import App from "./app";
import CustomerController from "./controllers/customersController";

// Initialize env variables
dotenv.config();

const port =
  typeof process.env.PORT === "string" ? parseInt(process.env.PORT) : 3000;

const app = new App([
  new CustomerController()
]);

app.start(port);
