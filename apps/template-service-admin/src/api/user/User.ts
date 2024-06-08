import { ApiIntegration } from "../apiIntegration/ApiIntegration";
import { JsonValue } from "type-fest";
import { Template } from "../template/Template";

export type User = {
  apiIntegrations?: Array<ApiIntegration>;
  createdAt: Date;
  email: string | null;
  firstName: string | null;
  id: string;
  lastName: string | null;
  roles: JsonValue;
  templates?: Array<Template>;
  updatedAt: Date;
  username: string;
};
