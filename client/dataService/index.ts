import http from "./httpCommon";
import { Contact, Customer, Invoice } from "../store/types";

class CustomerService {
  async getAllContacts() {
    const response = await http.get(`/contacts`);
    const contacts: Contact[] = response.data;
    return contacts;
  }

  async getAllInvoices() {
    const response = await http.get(`/invoices`);
    const invoices: Invoice[] = response.data;
    return invoices;
  }

  async getAllCustomers() {
    const response = await http.get(`/customers`);
    const customers: Customer[] = response.data;
    return customers;
  }
}

export default new CustomerService();