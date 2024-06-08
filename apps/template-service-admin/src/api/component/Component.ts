import { JsonValue } from "type-fest";

export type Component = {
  createdAt: Date;
  id: string;
  properties: JsonValue;
  typeField: string | null;
  updatedAt: Date;
};
