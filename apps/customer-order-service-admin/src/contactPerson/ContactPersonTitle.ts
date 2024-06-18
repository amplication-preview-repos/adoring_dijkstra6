import { ContactPerson as TContactPerson } from "../api/contactPerson/ContactPerson";

export const CONTACTPERSON_TITLE_FIELD = "firstName";

export const ContactPersonTitle = (record: TContactPerson): string => {
  return record.firstName?.toString() || String(record.id);
};
