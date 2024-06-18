import { ContactPersonWhereUniqueInput } from "./ContactPersonWhereUniqueInput";
import { ContactPersonUpdateInput } from "./ContactPersonUpdateInput";

export type UpdateContactPersonArgs = {
  where: ContactPersonWhereUniqueInput;
  data: ContactPersonUpdateInput;
};
