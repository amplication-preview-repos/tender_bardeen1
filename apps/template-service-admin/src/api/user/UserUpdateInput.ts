import { ApiIntegrationUpdateManyWithoutUsersInput } from "./ApiIntegrationUpdateManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TemplateUpdateManyWithoutUsersInput } from "./TemplateUpdateManyWithoutUsersInput";

export type UserUpdateInput = {
  apiIntegrations?: ApiIntegrationUpdateManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password?: string;
  roles?: InputJsonValue;
  templates?: TemplateUpdateManyWithoutUsersInput;
  username?: string;
};
