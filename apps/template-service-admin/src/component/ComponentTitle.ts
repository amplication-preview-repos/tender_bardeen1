import { Component as TComponent } from "../api/component/Component";

export const COMPONENT_TITLE_FIELD = "typeField";

export const ComponentTitle = (record: TComponent): string => {
  return record.typeField?.toString() || String(record.id);
};
