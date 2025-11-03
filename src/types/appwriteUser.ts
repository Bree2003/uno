import { type Models } from 'appwrite';

export type AppwriteUser = Models.Document & {
  name: string;
  age: number;
  email: string;
  username: string;
  phoneNumber: string;
  acountId: string;
  registeredInApp: boolean;
  surname: string;
};
