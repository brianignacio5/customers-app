import Vue from "vue";
import Vuex, { ActionTree, MutationTree } from "Vuex";
import { Contact, Customer, Invoice } from "../store/types";
import CustomerService from "../dataService";
import { invoiceStatus } from "../../server/types/invoiceStatus";
import { customerType } from "../../server/types/customerType";
Vue.use(Vuex);

export interface CustomerAppState {
  contacts: Contact[];
  customers: Customer[];
  invoices: Invoice[];
}

const state: CustomerAppState = {
  contacts: [],
  customers: [],
  invoices: [],
};

const mutations: MutationTree<CustomerAppState> = {
  setContacts(state, contacts: Contact[]) {
    state.contacts = contacts;
  },
  setCustomers(state, customers: Customer[]) {
    state.customers = customers;
  },
  setInvoices(state, invoices: Invoice[]) {
    console.log(invoices);
    state.invoices = invoices;
  },
};

const actions: ActionTree<CustomerAppState, any> = {
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
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules: {},
});
