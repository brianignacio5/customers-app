export interface Invoice {
  amount: number;
  customer: string;
  date: Date;
  dueDate: Date;
  orderId: string;
  orderStatus: string;
  status: string;
}
