import { SortOrder } from "../../util/SortOrder";

export type ComponentOrderByInput = {
  createdAt?: SortOrder;
  id?: SortOrder;
  properties?: SortOrder;
  typeField?: SortOrder;
  updatedAt?: SortOrder;
};
