import { ApiIntegrationCreateNestedManyWithoutUsersInput } from "./ApiIntegrationCreateNestedManyWithoutUsersInput";
import { InputJsonValue } from "../../types";
import { TemplateCreateNestedManyWithoutUsersInput } from "./TemplateCreateNestedManyWithoutUsersInput";

export type UserCreateInput = {
  apiIntegrations?: ApiIntegrationCreateNestedManyWithoutUsersInput;
  email?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  password: string;
  roles: InputJsonValue;
  templates?: TemplateCreateNestedManyWithoutUsersInput;
  username: string;
};
