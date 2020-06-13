import { Document, model, Schema } from "mongoose";
import { Contact } from "../types/contact";

const contactSchema = new Schema({
  customer: {
    ref: "Customer",
    type: Schema.Types.ObjectId,
  },
  email: String,
  firstName: String,
  lastName: String,
  phone1: Number,
  phone2: Number,
});

const contactModel = model<Contact & Document>("Contact", contactSchema);
export default contactModel;
