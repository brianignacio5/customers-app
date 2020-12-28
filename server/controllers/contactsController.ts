import { Router } from "express";
import IController from "./IController";
import contactModel from "../models/contacts";
import { Contact } from "../types/contact";
import { NextFunction, Request, Response } from "express";
import HttpException from "../types/httpException";

class ContactController implements IController {
  public path = "/contacts";
  public router = Router();
  private contact = contactModel;

  constructor() {
    this.router.get(this.path, this.getAllContacts);
    this.router.post(this.path, this.createContact);
    this.router.get(`${this.path}/:id`, this.getContactById);
    this.router.put(`${this.path}/:id`, this.updateContactById);
    this.router.delete(`${this.path}/:id`, this.deleteContactById);
  }

  private createContact = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const contactData: Contact = req.body;
      const newContact = new this.contact(contactData);
      const savedContact = await newContact.save();
      const savedContactWithCustomer = await savedContact
        .populate("customer")
        .execPopulate();
      savedContactWithCustomer
        ? res.send(savedContactWithCustomer)
        : savedContact
        ? savedContact
        : next(new HttpException(404, new Error("Error creating new contact")));
    } catch (error) {
      next(new HttpException(404, error));
    }
  };

  private deleteContactById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const contactId = req.params.id;
      const deleteResult = await this.contact.findByIdAndDelete(contactId);
      deleteResult
        ? res.send(deleteResult)
        : next(new HttpException(404, new Error("Error deleting contact")));
    } catch (error) {
      next(new HttpException(404, error));
    }
  };

  private getAllContacts = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const customerId = req.body.customer;
      let contactsQuery = customerId
        ? this.contact.find({ customer: customerId })
        : this.contact.find();
      const contacts = await contactsQuery.populate("customer").exec();
      contacts
        ? res.send(contacts)
        : next(new HttpException(404, new Error("Error getting contacts")));
    } catch (error) {
      next(new HttpException(404, error));
    }
  };

  private getContactById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const contactId = req.params.id;
      const requestedContact = await this.contact
        .findById(contactId)
        .populate("customer")
        .exec();
      requestedContact
        ? res.send(requestedContact)
        : next(
            new HttpException(404, new Error("Error getting contact by id"))
          );
    } catch (error) {
      next(new HttpException(404, error));
    }
  };

  private updateContactById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    try {
      const contactId = req.params.id;
      const modifiedContact: Contact = req.body;
      const requestedContact = await this.contact
        .findByIdAndUpdate(contactId, modifiedContact, { new: true })
        .exec();
      requestedContact
        ? res.send(requestedContact)
        : next(new HttpException(404, new Error("Contact can't be updated.")));
    } catch (error) {
      next(new HttpException(404, error));
    }
  };
}
export default ContactController;
