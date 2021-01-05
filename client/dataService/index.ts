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

  async deleteInvoice(id: string) {
    const response = await http.delete(`/invoices/${id}`);
    const invoice: Invoice = response.data;
    return invoice;
  }

  async createInvoice(invoice: Invoice) {
    const response = await http.post(`/invoices`, invoice);
    const resultInvoice: Invoice = response.data;
    return resultInvoice;
  }

  async updateInvoice(invoice: Invoice) {
    const response = await http.put(`/invoices/${invoice._id}`, invoice);
    const updatedInvoice: Invoice = response.data;
    return updatedInvoice;
  }

  async getAllCustomers() {
    const response = await http.get(`/customers`);
    const customers: Customer[] = response.data;
    return customers;
  }
}

export default new CustomerService();