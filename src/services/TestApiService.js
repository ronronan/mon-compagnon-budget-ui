import ApiService from './ApiService';

export default class UserService extends ApiService {

    public() {
        return this.httpGet('/api/public')
    }

    private() {
        return this.httpGet('/api/test')
    }

}