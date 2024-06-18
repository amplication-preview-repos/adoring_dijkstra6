import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type ShippingUpdateInput = {
  address?: string | null;
  deliveryStatus?: "Option1" | null;
  order?: OrderWhereUniqueInput | null;
  shippedBy?: string | null;
  shippingDate?: Date | null;
};
