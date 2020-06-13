import { Document, model, Schema } from "mongoose";
import { Customer } from "../types/customer";
import { customerType } from "../types/customerType";

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
    enum: Object.values(customerType),
    default: customerType.Inactive,
  },
  zip: Number,
});

const customersModel = model<Customer & Document>("Customer", customersSchema);
export default customersModel;
