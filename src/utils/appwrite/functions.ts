import { Query } from 'appwrite';
import { appwriteAccount } from './config';
import { appwriteDatabaseConfig, appwriteDatabases, appwriteUsers } from './serverConfig';
import { AppwriteUser } from '@/types/appwriteUser';

const recoverPassword = async (userId: string, secretKey: string, password: string) => {
  try {
    const updated = await appwriteAccount.updateRecovery(userId, secretKey, password);
    if (!updated) throw new Error('Error al actualizar contraseña');
    return true;
  } catch {
    return false;
  }
};

const requestAccountDeletion = async (email: string, password: string) => {
  try {
    const session = await appwriteAccount.createEmailPasswordSession(email, password);

    const { userId } = session;

    const userData = await appwriteDatabases.listDocuments<AppwriteUser>(
      appwriteDatabaseConfig.databaseId,
      appwriteDatabaseConfig.userCollectionId,
      [Query.equal('accountId', userId)]
    );

    const user = userData.documents[0];

    if (!userData || !user) throw Error('Usuario no encontrado');

    await appwriteDatabases.deleteDocument(
      appwriteDatabaseConfig.databaseId,
      appwriteDatabaseConfig.userCollectionId,
      user.$id
    );

    await appwriteUsers.delete(userId);

    return true;
  } catch (e) {
    console.log(e);
    return false;
  }
};

const APPWRITE_METHODS = {
  recoverPassword,
  requestAccountDeletion,
};

export default APPWRITE_METHODS;
