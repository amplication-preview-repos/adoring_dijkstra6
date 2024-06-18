import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AddressCreateInput = {
  address?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  typeField?: "Option1" | null;
};
