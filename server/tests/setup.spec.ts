import dotenv from "dotenv";
import App from "../app";
import CustomerController from "../controllers/customersController";
import ContactsController from "../controllers/contactsController";
import InvoicesController from "../controllers/invoicesControllers";

dotenv.config();

const server = new App([
  new ContactsController(),
  new CustomerController(),
  new InvoicesController(),
]);

before(async () => await server.start(3000));

export default server;
