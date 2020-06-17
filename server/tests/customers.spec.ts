import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import server from "./setup.spec";

chai.use(chaiHttp);
const apiPath = "/customers";

describe("Customers API Tests", async () => {
  let testCustomerId: string;
  let testCustomerName: string;

  describe(`POST ${apiPath}`, async () => {
    it("Should create a new customer object", async () => {
      const res = await chai
        .request(server.app)
        .post(apiPath)
        .send({
          address: "this repository",
          city: "spaces",
          country: "github",
          disRef: "rcf4754",
          email: "my@email.com",
          name: "Test customer",
          notes: "This object is for test",
          payment: "cash",
          telephone: 8099095544,
          type: "Active",
          zip: 20000,
        });
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.strictEqual(res.body.name, "Test customer");
      testCustomerName = res.body.name;
      testCustomerId = res.body._id;
    });
  });

  describe(`GET ${apiPath}`, async () => {
    it("Should receive an array with some customers", async () => {
      const res = await chai.request(server.app).get(apiPath);
      assert.equal(res.status, 200);
      assert.isArray(res.body);
      assert.notEqual(res.body.length, 0);
    });

    it("Should receive a single customer object", async () => {
      const res = await chai
        .request(server.app)
        .get(`${apiPath}/${testCustomerId}`);
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.strictEqual(res.body.name, testCustomerName);
    });
  });

  describe(`PUT ${apiPath}`, async () => {
    it("Should update a customer name", async () => {
      const newName = `${testCustomerName} Maine`;
      const res = await chai
        .request(server.app)
        .put(`${apiPath}/${testCustomerId}`)
        .send({ name: newName });
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.strictEqual(res.body.name, newName);
    });
  });

  describe(`DELETE ${apiPath}`, async () => {
    it("Should delete a customer", async () => {
      const res = await chai
        .request(server.app)
        .delete(`${apiPath}/${testCustomerId}`);
      assert.equal(res.status, 200);
    });
  });
});
