import ApiService from './api.service';

export default class UserService extends ApiService {

  public() {
    return this.httpGet('/api/v1/public')
  }

  private() {
    return this.httpGet('/api/v1/test')
  }

}