import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";

export type AddressWhereInput = {
  address?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  id?: StringFilter;
  typeField?: "Option1";
};
