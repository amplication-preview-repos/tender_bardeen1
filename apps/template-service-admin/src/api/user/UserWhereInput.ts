import { ApiIntegrationListRelationFilter } from "../apiIntegration/ApiIntegrationListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { TemplateListRelationFilter } from "../template/TemplateListRelationFilter";

export type UserWhereInput = {
  apiIntegrations?: ApiIntegrationListRelationFilter;
  email?: StringNullableFilter;
  firstName?: StringNullableFilter;
  id?: StringFilter;
  lastName?: StringNullableFilter;
  templates?: TemplateListRelationFilter;
  username?: StringFilter;
};
