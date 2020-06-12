import { Router } from "express";
import IController from "./IController";
import customerModel from "../models/customers";
import { Customer } from "../types/customer";
import { NextFunction, Request, Response } from "express";
import HttpException from "../types/httpException";

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

  private getAllCustomers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const customers = await this.customer.find();
      customers
        ? res.send(customers)
        : next(new HttpException(404, new Error("Customer not found")));
    } catch (error) {
      next(new HttpException(404, error));
    }
  };

  private getCustomerById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const requestedCustomer = await this.customer.findById(id);
      requestedCustomer
        ? res.send(requestedCustomer)
        : next(new HttpException(404, new Error("Customer not found")));
    } catch (error) {
      next(new HttpException(404, error));
    }
  };

  private createCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const customerData: Customer = req.body;
      const newCustomer = new this.customer(customerData);
      const savedCustomer = await newCustomer.save();
      savedCustomer
        ? res.send(savedCustomer)
        : next(new HttpException(404, new Error("Customer not found")));
    } catch (error) {
      next(new HttpException(404, error));
    }
  };

  private updateCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const customerId = req.params.id;
      const customerData: Customer = req.body;
      const updatedCustomer = await this.customer.findByIdAndUpdate(
        customerId,
        customerData
      );
      updatedCustomer
        ? res.send(updatedCustomer)
        : next(new HttpException(404, new Error("Customer not found")));
    } catch (error) {
      console.log(error);
      next(new HttpException(404, error));
    }
  };

  private deleteCustomer = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const customerId = req.params.id;
      const deleteResult = await this.customer.findByIdAndDelete(customerId);
      deleteResult
        ? res.send(deleteResult)
        : next(new HttpException(404, new Error("Customer not found")));
    } catch (error) {
      console.log(error);
      next(new HttpException(404, error));
    }
  };
}

export default CustomerController;
