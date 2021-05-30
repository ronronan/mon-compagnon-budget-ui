import { AxiosRequestConfig } from 'axios';
import { Vue } from 'vue-class-component';

export class ApiService extends Vue {
  URL_SERVER = process.env.VUE_APP_API_URL;

  public httpGet(route: any, params: AxiosRequestConfig|undefined = undefined): Promise<Object> {
    return new Promise((resolve, reject) => {
      return this.axios.get(this.URL_SERVER + route, params)
        .then((response) => {
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
    });
  }

  public httpPost(route: any, params: AxiosRequestConfig|undefined = undefined): Promise<Object> {
    return new Promise((resolve, reject) => {
      return this.axios.post(this.URL_SERVER + route, params)
        .then((response) => {
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
    });
  }

  public httpPut(route: any, params: AxiosRequestConfig|undefined = undefined): Promise<Object> {
    return new Promise((resolve, reject) => {
      return this.axios.put(this.URL_SERVER + route, params)
        .then((response) => {
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
    });
  }

  public httpDelete(route: any, params: AxiosRequestConfig|undefined = undefined): Promise<Object> {
    return new Promise((resolve, reject) => {
      return this.axios.delete(this.URL_SERVER + route, params)
        .then((response) => {
          resolve(response.data);
        }).catch((err) => {
          reject(err);
        });
    });
  }
}