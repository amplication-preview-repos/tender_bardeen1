import { User } from "../user/User";

export type ApiIntegration = {
  apiKey: string | null;
  createdAt: Date;
  id: string;
  name: string | null;
  typeField?: "Option1" | null;
  updatedAt: Date;
  user?: User | null;
};
