import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";
import { UserWhereUniqueInput } from "../user/UserWhereUniqueInput";

export type ApiIntegrationWhereInput = {
  apiKey?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
  typeField?: "Option1";
  user?: UserWhereUniqueInput;
};
