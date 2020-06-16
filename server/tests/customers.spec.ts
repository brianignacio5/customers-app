import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import App from "../app";
import CustomerController from "../controllers/customersController";
import dotenv from "dotenv";

chai.use(chaiHttp);
dotenv.config();

const server = new App([new CustomerController()]);
const apiPath = "/customers";

describe("Customers API Tests", async () => {
  before(async () => await server.start(3000));
  describe("GET /customers", async () => {
    it("Should receive an object with some customers", async () => {
      const res = await chai.request(server.app).get(apiPath);
      assert.equal(res.status, 200);
      assert.equal(res.body[0].address, "mi lago");
      assert.equal(res.body[0].city, "stdo dgo");
      assert.equal(res.body[0].email, "my@email.com");
      assert.equal(res.body[0].name, "My super lame company");
    });
  });
});
