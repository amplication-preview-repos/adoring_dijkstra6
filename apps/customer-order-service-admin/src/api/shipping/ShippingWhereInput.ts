import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";

export type ShippingWhereInput = {
  address?: StringNullableFilter;
  deliveryStatus?: "Option1";
  id?: StringFilter;
  order?: OrderWhereUniqueInput;
  shippedBy?: StringNullableFilter;
  shippingDate?: DateTimeNullableFilter;
};
