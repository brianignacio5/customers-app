import { Document, model, Schema } from "mongoose";
import { Customer } from "./customers";

export interface Invoice {
    amount: number;
    customer: Customer;
    date: Date,
    orderStatus: string;
    status: string;
}

const invoiceSchema = new Schema({
    amount: Number,
    customer: {
        ref: "Customer",
        type: Schema.Types.ObjectId
    },
    date: Date,
    orderStatus: String,
    status: {
        type: String,
        enum: ["Unpaid", "Partially paid", "Paid"],
        default: "Unpaid"
    },
});

const invoiceModel = model<Invoice & Document>("Invoice", invoiceSchema);
export default invoiceModel;
