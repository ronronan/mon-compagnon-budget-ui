import { ApiService } from './api.service';

export class UserService extends ApiService {

  public public(): Promise<Object> {
    return this.httpGet('/api/v1/public')
  }

  public private(): Promise<Object> {
    return this.httpGet('/api/v1/test')
  }

}