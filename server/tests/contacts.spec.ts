import chai, { assert } from "chai";
import chaiHttp from "chai-http";
import server from "./setup.spec";

chai.use(chaiHttp);
const apiPath = "/contacts";

describe("Contacts API Tests", async () => {
  let testCustomerId: string;
  let testContactId: string;
  let testContactName: string;

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
          customer: testCustomerId,
          email: "mywoe@email.com",
          firstName: "rodrigo",
          lastName: "lopez",
          phone1: 8093631066,
          phone2: 7574856132,
        });
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      testContactId = res.body._id;
      testContactName = res.body.firstName;
    });
  });

  describe(`GET ${apiPath}`, async () => {
    it("Should get all contacts", async () => {
      const res = await chai.request(server.app).get(apiPath);
      assert.equal(res.status, 200);
      assert.isArray(res.body);
      assert.notEqual(res.body.length, 0);
    });

    it("Should get all contacts for given customer" , async () => {
      const res = await chai.request(server.app).get(apiPath).send({ customer: testCustomerId});
      assert.equal(res.status, 200);
      assert.isArray(res.body);
      assert.equal(res.body[0].customer, testCustomerId);
      assert.equal(res.body.length, 1);
    });

    it("Should get a contact for given id", async () => {
      const res = await chai
        .request(server.app)
        .get(`${apiPath}/${testContactId}`);
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.strictEqual(res.body.firstName, testContactName);
    });
  });

  describe(`PUT ${apiPath}`, async () => {
    it("Should update a contact firstName", async () => {
      const newFirstName = `${testContactName} Alas`;
      const res = await chai
        .request(server.app)
        .put(`${apiPath}/${testContactId}`)
        .send({ firstName: newFirstName });
      assert.equal(res.status, 200);
      assert.isObject(res.body);
      assert.strictEqual(res.body.firstName, newFirstName);
    });
  });

  describe(`DELETE ${apiPath}`, async () => {
    it("Should delete a contact for a given id", async () => {
      const res = await chai
        .request(server.app)
        .delete(`${apiPath}/${testContactId}`);
      assert.equal(res.status, 200);
      assert.isObject(res.body);
    });
  });
});
