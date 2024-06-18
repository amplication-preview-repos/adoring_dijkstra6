import { AddressListRelationFilter } from "../address/AddressListRelationFilter";
import { ContactPersonListRelationFilter } from "../contactPerson/ContactPersonListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type CustomerWhereInput = {
  addresses?: AddressListRelationFilter;
  contactPeople?: ContactPersonListRelationFilter;
  firstName?: StringNullableFilter;
  homepage?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
};
