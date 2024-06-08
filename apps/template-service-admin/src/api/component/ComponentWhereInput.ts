import { StringFilter } from "../../util/StringFilter";
import { JsonFilter } from "../../util/JsonFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type ComponentWhereInput = {
  id?: StringFilter;
  properties?: JsonFilter;
  typeField?: StringNullableFilter;
};
