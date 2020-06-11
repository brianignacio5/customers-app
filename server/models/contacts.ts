import { Document, model, Schema } from "mongoose";
import { Customer } from "./customers";

export interface Contact {
    customer: Customer;
    email: string;
    firstName: string;
    lastName: string;
    phone1: number;
    phone2: number;
}

const contactSchema = new Schema({
    customer: {
        ref: "Customer",
        type: Schema.Types.ObjectId
    },
    email: String,
    firstName: String,
    lastName: String,
    phone1: Number,
    phone2: Number,
});

const contactModel = model<Contact & Document>("Contact", contactSchema);
export default contactModel;
