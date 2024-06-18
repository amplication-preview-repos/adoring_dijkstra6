import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type AddressUpdateInput = {
  address?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  typeField?: "Option1" | null;
};
