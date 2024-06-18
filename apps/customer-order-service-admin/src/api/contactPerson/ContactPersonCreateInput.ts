import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderCreateNestedManyWithoutContactPeopleInput } from "./OrderCreateNestedManyWithoutContactPeopleInput";

export type ContactPersonCreateInput = {
  customer?: CustomerWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderCreateNestedManyWithoutContactPeopleInput;
  phone?: number | null;
};
