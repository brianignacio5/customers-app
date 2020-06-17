import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import server from "./setup.spec";

chai.use(chaiHttp);
const apiPath = "/invoices";

describe("Invoices API Tests", async () => {
  let testCustomerId: string;
  let testInvoiceId: string;
  let testInvoiceStatus: string;
  let testDate = 20110805;

  before(async () => {
    const res = await chai
      .request(server.app)
      .post("/customers")
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
    testCustomerId = res.body._id;
  });

  after(async () => {
    const res = await chai
      .request(server.app)
      .delete(`/customers/${testCustomerId}`);
    assert.equal(res.status, 200);
  });

  describe(`POST ${apiPath}`, async () => {
    it("Should create a new contact object", async () => {
      const res = await chai
        .request(server.app)
        .post(apiPath)
        .send({
          amount: 2500,
          customer: testCustomerId,
          date: testDate,
          orderStatus: " in transit",
          status: "Unpaid",
        });
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      testInvoiceId = res.body._id;
      testInvoiceStatus = res.body.status;
    });
  });

  describe(`GET ${apiPath}`, async () => {
    it("Should get all invoices", async () => {
      const res = await chai.request(server.app).get(apiPath);
      assert.equal(res.status, 200);
      assert.isArray(res.body);
      assert.notEqual(res.body.length, 0);
    });

    it("Should get all invoices for given customer", async () => {
      const res = await chai
        .request(server.app)
        .get(apiPath)
        .send({ customer: testCustomerId });
      assert.equal(res.status, 200);
      assert.isArray(res.body);
      assert.equal(res.body[0].customer, testCustomerId);
      assert.equal(res.body.length, 1);
    });

    it("Should get all invoices after date", async () => {
      const res = await chai
        .request(server.app)
        .get(apiPath)
        .send({ customer: testCustomerId, fromDate: testDate });
      assert.equal(res.status, 200);
      assert.isArray(res.body);
      assert.equal(res.body[0].customer, testCustomerId);
      assert.equal(res.body.length, 1);
    });

    it("Should get all invoices before date", async () => {
      const res = await chai
        .request(server.app)
        .get(apiPath)
        .send({ customer: testCustomerId, toDate: testDate });
      assert.equal(res.status, 200);
      assert.isArray(res.body);
      assert.equal(res.body[0].customer, testCustomerId);
      assert.equal(res.body.length, 1);
    });

    it("Should not get any invoice with invalid date", async () => {
      const res = await chai
        .request(server.app)
        .get(apiPath)
        .send({ customer: testCustomerId, toDate: testDate - 1 });
      assert.equal(res.status, 200);
      assert.isArray(res.body);
      assert.equal(res.body.length, 0);
    });

    it("Should get a invoice for given id", async () => {
      const res = await chai
        .request(server.app)
        .get(`${apiPath}/${testInvoiceId}`);
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.strictEqual(res.body.status, testInvoiceStatus);
    });

    it("Should not get a invoice for invalid id", async () => {
      const res = await chai
        .request(server.app)
        .get(`${apiPath}/41224d776a326fb40faaa001`);
      assert.equal(res.status, 404);
      assert.isObject(res.body);
      assert.notProperty(res.body, "status");
    });
  });

  describe(`PUT ${apiPath}`, async () => {
    it("Should update a invoice firstName", async () => {
      const newStatus = `Paid`;
      const res = await chai
        .request(server.app)
        .put(`${apiPath}/${testInvoiceId}`)
        .send({ status: newStatus });
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.strictEqual(res.body.status, newStatus);
    });
  });

  describe(`DELETE ${apiPath}`, async () => {
    it("Should delete a invoice for a given id", async () => {
      const res = await chai
        .request(server.app)
        .delete(`${apiPath}/${testInvoiceId}`);
      assert.equal(res.status, 200);
      assert.isObject(res.body);
    });
  });
});
