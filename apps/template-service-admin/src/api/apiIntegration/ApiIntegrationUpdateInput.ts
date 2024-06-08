import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiIntegrationUpdateInput = {
  apiKey?: string | null;
  name?: string | null;
  typeField?: "Option1" | null;
  user?: UserWhereUniqueInput | null;
};
