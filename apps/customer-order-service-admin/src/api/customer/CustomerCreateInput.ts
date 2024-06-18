import { AddressCreateNestedManyWithoutCustomersInput } from "./AddressCreateNestedManyWithoutCustomersInput";
import { ContactPersonCreateNestedManyWithoutCustomersInput } from "./ContactPersonCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  addresses?: AddressCreateNestedManyWithoutCustomersInput;
  contactPeople?: ContactPersonCreateNestedManyWithoutCustomersInput;
  firstName?: string | null;
  homepage?: string | null;
  lastName?: string | null;
};
