import { ContactPerson } from "../contactPerson/ContactPerson";
import { OrderItem } from "../orderItem/OrderItem";
import { Shipping } from "../shipping/Shipping";

export type Order = {
  contactPerson?: ContactPerson | null;
  createdAt: Date;
  id: string;
  orderDate: Date | null;
  orderItems?: Array<OrderItem>;
  shippings?: Array<Shipping>;
  status?: "Option1" | null;
  totalAmount: number | null;
  updatedAt: Date;
};
