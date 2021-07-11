import { AxiosRequestConfig, AxiosStatic } from 'axios';
export class ApiService {
  protected static instance: ApiService;
  protected static axiosInstance: AxiosStatic;
  private URL_SERVER = import.meta.env.VITE_API_URL;

  protected constructor(axiosInstance: AxiosStatic) {
    ApiService.axiosInstance = axiosInstance;
  }

  public static initInstance(axiosInstance: AxiosStatic): void {
    ApiService.instance = new ApiService(axiosInstance);
  }

  public httpGet(route: any, params: AxiosRequestConfig|undefined = undefined): Promise<Object> {
    return new Promise((resolve, reject) => {
      return ApiService.axiosInstance.get(this.URL_SERVER + route, params)
        .then((response) => {
          console.log(response);
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
    });
  }

  public httpPost(route: any, params: AxiosRequestConfig|undefined = undefined): Promise<Object> {
    return new Promise((resolve, reject) => {
      return ApiService.axiosInstance.post(this.URL_SERVER + route, params)
        .then((response) => {
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
    });
  }

  public httpPut(route: any, params: AxiosRequestConfig|undefined = undefined): Promise<Object> {
    return new Promise((resolve, reject) => {
      return ApiService.axiosInstance.put(this.URL_SERVER + route, params)
        .then((response) => {
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
    });
  }

  public httpDelete(route: any, params: AxiosRequestConfig|undefined = undefined): Promise<Object> {
    return new Promise((resolve, reject) => {
      return ApiService.axiosInstance.delete(this.URL_SERVER + route, params)
        .then((response) => {
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
    });
  }
}