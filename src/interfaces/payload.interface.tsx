import IUser from './user.interface';

export default interface IPayload {
  token: string;
  user: IUser;
}
