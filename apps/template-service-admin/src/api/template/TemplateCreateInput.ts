import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TemplateCreateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
