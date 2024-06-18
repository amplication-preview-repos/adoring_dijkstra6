import { AddressUpdateManyWithoutCustomersInput } from "./AddressUpdateManyWithoutCustomersInput";
import { ContactPersonUpdateManyWithoutCustomersInput } from "./ContactPersonUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  addresses?: AddressUpdateManyWithoutCustomersInput;
  contactPeople?: ContactPersonUpdateManyWithoutCustomersInput;
  firstName?: string | null;
  homepage?: string | null;
  lastName?: string | null;
};
