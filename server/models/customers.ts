import { Document, model, Schema } from "mongoose";

export interface Customer {
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

const customersSchema = new Schema({
    address: String,
    city: String,
    country: String,
    disRef: String,
    email: String,
    name: String,
    notes: String,
    payment: String,
    telephone: Number,
    type: {
        type: String,
        enum: ["Lead", "Active", "Inactive"],
        default: "Inactive"
    },
    zip: Number,
});

const customersModel = model<Customer & Document>("Customer", customersSchema);
export default customersModel;