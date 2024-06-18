import { Customer } from "../customer/Customer";

export type Address = {
  address: string | null;
  createdAt: Date;
  customer?: Customer | null;
  id: string;
  typeField?: "Option1" | null;
  updatedAt: Date;
};
