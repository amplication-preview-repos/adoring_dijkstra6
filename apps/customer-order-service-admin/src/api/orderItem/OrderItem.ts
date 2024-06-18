import { Order } from "../order/Order";
import { Product } from "../product/Product";

export type OrderItem = {
  createdAt: Date;
  deliveryDate: Date | null;
  id: string;
  order?: Order | null;
  price: number | null;
  product?: Product | null;
  quantity: number | null;
  updatedAt: Date;
};
