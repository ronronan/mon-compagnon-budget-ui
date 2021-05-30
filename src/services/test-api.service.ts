import { AxiosStatic } from 'axios';
import { ApiService } from './api.service';

export class TestService extends ApiService {

  public constructor(axiosInstance: AxiosStatic) {
    super(axiosInstance);
  }

  public public(): Promise<Object> {
    return this.httpGet('/api/v1/public')
  }

  public private(): Promise<Object> {
    return this.httpGet('/api/v1/test')
  }

}