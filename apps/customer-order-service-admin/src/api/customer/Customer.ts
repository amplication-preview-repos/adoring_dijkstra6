import { Address } from "../address/Address";
import { ContactPerson } from "../contactPerson/ContactPerson";

export type Customer = {
  addresses?: Array<Address>;
  contactPeople?: Array<ContactPerson>;
  createdAt: Date;
  firstName: string | null;
  homepage: string | null;
  id: string;
  lastName: string | null;
  updatedAt: Date;
};
