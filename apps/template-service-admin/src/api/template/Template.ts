import { User } from "../user/User";

export type Template = {
  createdAt: Date;
  id: string;
  name: string | null;
  updatedAt: Date;
  user?: User | null;
};
