import { Customer } from "./customers";

export interface Contact {
  customer: Customer;
  email: string;
  firstName: string;
  lastName: string;
  phone1: number;
  phone2: number;
}