import { AxiosRequestConfig, AxiosStatic } from 'axios';
export class ApiService {
  URL_SERVER = import.meta.env.VITE_API_URL;

  public constructor(
    private axiosInstance: AxiosStatic
    ) {
    this.axiosInstance = axiosInstance;
  }

  public httpGet(route: any, params: AxiosRequestConfig|undefined = undefined): Promise<Object> {
    return new Promise((resolve, reject) => {
      return this.axiosInstance.get(this.URL_SERVER + route, params)
        .then((response) => {
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
    });
  }

  public httpPost(route: any, params: AxiosRequestConfig|undefined = undefined): Promise<Object> {
    return new Promise((resolve, reject) => {
      return this.axiosInstance.post(this.URL_SERVER + route, params)
        .then((response) => {
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
    });
  }

  public httpPut(route: any, params: AxiosRequestConfig|undefined = undefined): Promise<Object> {
    return new Promise((resolve, reject) => {
      return this.axiosInstance.put(this.URL_SERVER + route, params)
        .then((response) => {
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
    });
  }

  public httpDelete(route: any, params: AxiosRequestConfig|undefined = undefined): Promise<Object> {
    return new Promise((resolve, reject) => {
      return this.axiosInstance.delete(this.URL_SERVER + route, params)
        .then((response) => {
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
    });
  }
}