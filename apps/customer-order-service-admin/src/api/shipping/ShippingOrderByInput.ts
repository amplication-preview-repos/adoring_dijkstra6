import { SortOrder } from "../../util/SortOrder";

export type ShippingOrderByInput = {
  address?: SortOrder;
  createdAt?: SortOrder;
  deliveryStatus?: SortOrder;
  id?: SortOrder;
  orderId?: SortOrder;
  shippedBy?: SortOrder;
  shippingDate?: SortOrder;
  updatedAt?: SortOrder;
};
