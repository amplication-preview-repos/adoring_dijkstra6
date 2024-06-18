import { Shipping as TShipping } from "../api/shipping/Shipping";

export const SHIPPING_TITLE_FIELD = "shippedBy";

export const ShippingTitle = (record: TShipping): string => {
  return record.shippedBy?.toString() || String(record.id);
};
