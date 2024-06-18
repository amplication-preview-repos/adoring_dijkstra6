import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderUpdateManyWithoutContactPeopleInput } from "./OrderUpdateManyWithoutContactPeopleInput";

export type ContactPersonUpdateInput = {
  customer?: CustomerWhereUniqueInput | null;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  orders?: OrderUpdateManyWithoutContactPeopleInput;
  phone?: number | null;
};
