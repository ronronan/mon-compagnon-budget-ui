import { AxiosStatic } from 'axios';
import { User } from '../models/user.model';
import { ApiService } from './api.service';

export class UserService extends ApiService {
  private static instanceChild: UserService;

  protected constructor(axiosInstance: AxiosStatic) {
    super(axiosInstance);
  }

  public static getInstance(): UserService {
    if (!UserService.instanceChild) {
      UserService.instanceChild = new UserService(ApiService.axiosInstance);
    }

    return UserService.instanceChild;
  }

  public findAll(): Promise<User[]> {
    return new Promise((resolve, rejet) => {
      this.httpGet('/api/v1/user').then((userList: any) => {
        const listUser: User[] = [];
        for(const user of userList) {
          listUser.push(User.fromApi(user));
        }
        resolve(listUser);
      }).catch(rejet);
    });
  }

  public checkAndRegister(): Promise<User> {
    return new Promise((resolve, rejet) => {
      this.httpPost('/api/v1/user/check').then((userApi: any) => {
        resolve(User.fromApi(userApi));
      }).catch(rejet);
    });
  }

}