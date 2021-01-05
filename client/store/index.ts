import Vue from "vue";
import * as Vuex from "Vuex";
import { Contact, Customer, Invoice } from "../store/types";
import CustomerService from "../dataService";
Vue.use(Vuex);

export interface CustomerAppState {
  contacts: Contact[];
  customers: Customer[];
  invoices: Invoice[];
  selectedInvoice: Invoice;
}

const state: CustomerAppState = {
  contacts: [],
  customers: [],
  invoices: [],
  selectedInvoice: {
    _id: "",
    amount: 0,
    customer: {
      _id: "",
      address: "",
      city: "",
      country: "",
      disRef: "",
      email: "",
      name: "",
      notes: "",
      payment: "",
      telephone: 1111111,
      type: "",
      zip: 559
    },
    date: new Date(),
    dueDate: new Date(),
    orderId: "",
    orderStatus: "Unpaid",
    status: "",
  }
};

const mutations: Vuex.MutationTree<CustomerAppState> = {
  setContacts(state, contacts: Contact[]) {
    state.contacts = contacts;
  },
  setCustomers(state, customers: Customer[]) {
    state.customers = customers;
  },
  setInvoices(state, invoices: Invoice[]) {
    state.invoices = invoices;
    if (invoices.length) {
      state.selectedInvoice = invoices[0];
    }
  },
  setSelectedInvoice(state, invoice: Invoice) {
    state.selectedInvoice = invoice;
  },
  deleteInvoice(state, index: number) {
    state.invoices.splice(index, 1);
  }
};

const actions: Vuex.ActionTree<CustomerAppState, any> = {
  async getContacts(context) {
    let contacts: Contact[], localContacts: string;
    try {
      contacts = await CustomerService.getAllContacts();
      if (!contacts) {
        localContacts = localStorage.getItem("contacts");
        contacts = JSON.parse(localContacts);
      } 
      context.commit("setContacts", contacts);
    } catch (error) {
      console.log(error);
      if (localContacts && localContacts.length) {
        localStorage.removeItem("contacts"); 
      }
    }
  },
  async getCustomers(context) {
    let customers: Customer[], localCustomers: string;
    try {
      customers = await CustomerService.getAllCustomers();
      if (!customers) {
        localCustomers = localStorage.getItem("customers");
        customers = JSON.parse(localCustomers);
      } 
      context.commit("setCustomers", customers);
    } catch (error) {
      console.log(error);
      if (localCustomers && localCustomers.length) {
        localStorage.removeItem("customers"); 
      }
    }
  },
  async getInvoices(context) {
    let invoices: Invoice[], localInvoices: string;
    try {
      invoices = await CustomerService.getAllInvoices();
      if (!invoices) {
        localInvoices = localStorage.getItem("invoices");
        invoices = JSON.parse(localInvoices);
      }
      context.commit("setInvoices", invoices);
    } catch (error) {
      console.log(error);
      if (localInvoices && localInvoices.length) {
        localStorage.removeItem("invoices"); 
      }
    }
  },
  async deleteInvoices(context, invoiceId: string) {
    try {
      const invoice = await CustomerService.deleteInvoice(invoiceId);
    } catch (error) {
      console.log(error);
    }
  },
  async updateInvoice(context, invoice: Invoice) {
    try {
      let result: Invoice;
      console.log(invoice._id)
      if (invoice._id) {
        result = await CustomerService.updateInvoice(invoice);
        const indexToReplace = context.state.invoices.findIndex((inv) => {
          return inv._id === result._id;
        });
        context.state.invoices.splice(indexToReplace, 1, result);
      } else {
        result = await CustomerService.createInvoice(invoice);
        context.state.invoices.push(result);
      }
    } catch (error) {
      console.log(error);
    }
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
});
