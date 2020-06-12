import { Document, model, Schema } from "mongoose";
import { Invoice } from "../types/invoice";
import { invoiceStatus } from "../types/invoiceStatus";

const invoiceSchema = new Schema({
  amount: Number,
  customer: {
    ref: "Customer",
    type: Schema.Types.ObjectId,
  },
  date: Date,
  orderStatus: String,
  status: {
    type: String,
    enum: Object.values(invoiceStatus),
    default: invoiceStatus.Unpaid,
  },
});

const invoiceModel = model<Invoice & Document>("Invoice", invoiceSchema);
export default invoiceModel;
