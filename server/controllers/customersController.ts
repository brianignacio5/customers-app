import { Router } from "express";
import IController from "./IController";
import customerModel from "../models/customers";
import { Customer } from "../models/customers";
import { Request, Response } from "express";

class CustomerController implements IController {
  public path = "/customers";
  public router = Router();
  private customer = customerModel;

  constructor() {
    this.router.get(this.path, this.getAllCustomers);
    this.router.get(`${this.path}/:id`, this.getCustomerById);
    this.router.post(this.path, this.createCustomer);
    this.router.put(`${this.path}/:id`, this.updateCustomer);
    this.router.delete(`${this.path}/:id`, this.deleteCustomer);
  }

  private getAllCustomers = async (req: Request, res: Response) => {
    const customers = await this.customer.find();
    res.send(customers);
  };

  private getCustomerById = async (req: Request, res: Response) => {
    const id = req.params.id;
    const requestedCustomer = await this.customer.findById(id);
    res.send(requestedCustomer);
  };

  private createCustomer = async (req: Request, res: Response) => {
    const customerData: Customer = req.body;
    const newCustomer = new this.customer(customerData);
    const savedCustomer = await newCustomer.save();
    res.send(savedCustomer);
  };

  private updateCustomer = async (req: Request, res: Response) => {
    const customerId = req.params.id;
    const customerData: Customer = req.body;
    const updatedCustomer = await this.customer.findByIdAndUpdate(
      customerId,
      customerData,
      { new: true }
    );
    res.send(updatedCustomer);
  };

  private deleteCustomer = async (req: Request, res: Response) => {
    const customerId = req.params.id;
    const deleteResult = await this.customer.findByIdAndDelete(customerId);
    res.send(deleteResult);
  }
}

export default CustomerController;
