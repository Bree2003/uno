import { Client, Users, Account, Databases } from 'node-appwrite';

const client = new Client()
  .setEndpoint('https://cloud.appwrite.io/v1')
  .setProject(process.env.APPWRITE_PROJECT ?? '')
  .setKey(process.env.APPWRITE_API_KEY ?? '');

export const appwriteUsers = new Users(client);
export const appwriteAccount = new Account(client);
export const appwriteDatabases = new Databases(client);

export const appwriteDatabaseConfig = {
  databaseId: '662efd3e0023dbf3cf88',
  userCollectionId: '662efd8b0032c9dcd936',
};
