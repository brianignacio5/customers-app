import { Router } from "express";
import IController from "./IController";
import invoiceModel from "../models/invoices";
import { Invoice } from "../types/invoice";
import { NextFunction, Request, Response } from "express";
import HttpException from "../types/httpException";

class InvoiceController implements IController {
  public path = "/invoices";
  public router = Router();
  private invoice = invoiceModel;

  constructor() {
    this.router.get(this.path, this.getAllInvoices);
    this.router.post(this.path, this.createInvoice);
    this.router.get(`${this.path}/:id`, this.getInvoiceById);
    this.router.put(`${this.path}/:id`, this.updateInvoiceById);
    this.router.delete(`${this.path}/:id`, this.deleteInvoiceById);
  }

  private createInvoice = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const invoiceData: Invoice = req.body;
      const newInvoice = new this.invoice(invoiceData);
      const savedInvoice = await newInvoice.save();
      const savedInvoiceWithCustomer = await savedInvoice
        .populate("customer")
        .execPopulate();
      savedInvoiceWithCustomer
        ? res.send(savedInvoiceWithCustomer)
        : savedInvoice
        ? savedInvoice
        : next(new HttpException(404, new Error("Invoice was not created")));
    } catch (error) {
      next(new HttpException(404, error));
    }
  };

  private getAllInvoices = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const customerId: string = req.body.customer;
      let invoiceQuery = customerId
        ? this.invoice.find({ customer: customerId })
        : this.invoice.find();
      if (req.body.fromDate) {
        invoiceQuery = invoiceQuery.where("date").gte(req.body.fromDate);
      }
      if (req.body.toDate) {
        invoiceQuery = invoiceQuery.where("date").lte(req.body.toDate);
      }
      const invoices = await invoiceQuery.populate("customer").exec();
      invoices
        ? res.send(invoices)
        : next(new HttpException(404, new Error("Invoices not found")));
    } catch (error) {
      next(new HttpException(404, error));
    }
  };

  private getInvoiceById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const requestedInvoice = await this.invoice
        .findById(id)
        .populate("customer")
        .exec();
      requestedInvoice
        ? res.send(requestedInvoice)
        : next(new HttpException(404, new Error("Invoice not found")));
    } catch (error) {
      next(new HttpException(404, error));
    }
  };

  private updateInvoiceById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const modifiedInvoice: Invoice = req.body;
      const requestedInvoice = await this.invoice
        .findByIdAndUpdate(id, modifiedInvoice, { new: true })
        .populate("customer")
        .exec();
      requestedInvoice
        ? res.send(requestedInvoice)
        : next(new HttpException(404, new Error("Invoice not found")));
    } catch (error) {
      next(new HttpException(404, error));
    }
  };

  private deleteInvoiceById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const id = req.params.id;
      const deleteResult = await this.invoice.findByIdAndDelete(id).exec();
      deleteResult
        ? res.send(deleteResult)
        : next(new HttpException(404, new Error("Invoice not found")));
    } catch (error) {
      next(new HttpException(404, error));
    }
  };
}

export default InvoiceController;
