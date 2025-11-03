'use server';

import APPWRITE_METHODS from '@/utils/appwrite/functions';

export const changePassword = async (
  userId: string,
  secretKey: string,
  password: string
) => {
  return await APPWRITE_METHODS.recoverPassword(userId, secretKey, password);
};
