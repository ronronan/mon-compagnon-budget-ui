import { AxiosStatic } from 'axios';
import { ApiService } from './api.service';

export class UserService extends ApiService {

  public constructor(axiosInstance: AxiosStatic) {
    super(axiosInstance);
  }

  public findAll(): Promise<Object> {
    return this.httpGet('/api/v1/user')
  }

  public checkAndRegister(): Promise<Object> {
    return this.httpPost('/api/v1/user/check')
  }

}