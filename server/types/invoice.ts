import { Customer } from "./customer";

export interface Invoice {
    amount: number;
    customer: Customer;
    date: Date,
    orderStatus: string;
    status: string;
}