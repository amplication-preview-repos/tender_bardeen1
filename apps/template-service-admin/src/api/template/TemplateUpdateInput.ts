import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type TemplateUpdateInput = {
  name?: string | null;
  user?: UserWhereUniqueInput | null;
};
