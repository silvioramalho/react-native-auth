import IUser from './user.interface';

export default interface IAuthContextData {
  signed: boolean;
  user: IUser | null;
  loading: boolean;
  signIn(): Promise<void>;
  signOut(): void;
}
