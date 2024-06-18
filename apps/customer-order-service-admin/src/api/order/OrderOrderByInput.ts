import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  contactPersonId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  orderDate?: SortOrder;
  status?: SortOrder;
  totalAmount?: SortOrder;
  updatedAt?: SortOrder;
};
