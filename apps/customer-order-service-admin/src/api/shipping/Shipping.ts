import { Order } from "../order/Order";

export type Shipping = {
  address: string | null;
  createdAt: Date;
  deliveryStatus?: "Option1" | null;
  id: string;
  order?: Order | null;
  shippedBy: string | null;
  shippingDate: Date | null;
  updatedAt: Date;
};
