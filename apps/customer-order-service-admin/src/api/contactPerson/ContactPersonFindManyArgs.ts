import { ContactPersonWhereInput } from "./ContactPersonWhereInput";
import { ContactPersonOrderByInput } from "./ContactPersonOrderByInput";

export type ContactPersonFindManyArgs = {
  where?: ContactPersonWhereInput;
  orderBy?: Array<ContactPersonOrderByInput>;
  skip?: number;
  take?: number;
};
