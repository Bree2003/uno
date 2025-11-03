'use server';

import APPWRITE_METHODS from '@/utils/appwrite/functions';

export const accountDeletion = async (email: string, password: string) => {
  return await APPWRITE_METHODS.requestAccountDeletion(email, password);
};
