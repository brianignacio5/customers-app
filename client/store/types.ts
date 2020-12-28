export interface Invoice {
  _id: string;
  amount: number;
  customer: Customer;
  date: Date;
  dueDate: Date;
  orderStatus: string;
  status: string;
}

export interface Customer {
  _id: string;
  address: string;
  city: string;
  country: string;
  disRef: string;
  email: string;
  name: string;
  notes: string;
  payment: string;
  telephone: number;
  type: string;
  zip: number;
}

export interface Contact {
  _id: string;
  customer: Customer;
  email: string;
  firstName: string;
  lastName: string;
  phone1: number;
  phone2: number;
}

