import Vue from "vue";

export default class ApiService extends Vue {
    URL_SERVER = process.env.VUE_APP_API_URL;

    httpGet(route, params = null) {
        return new Promise((resolve, reject) => {
            return this.axios.get(this.URL_SERVER + route, params)
                .then((response) => {
                    resolve(response.data);
                }).catch((err) => {
                    reject(err);
                });
        });
    }

    httpPost(route, params = null) {
        return new Promise((resolve, reject) => {
            return this.axios.post(this.URL_SERVER + route, params)
                .then((response) => {
                    resolve(response.data);
                }).catch((err) => {
                    reject(err);
                });
        });
    }

    httpPut(route, params = null) {
        return new Promise((resolve, reject) => {
            return this.axios.put(this.URL_SERVER + route, params)
                .then((response) => {
                    resolve(response.data);
                }).catch((err) => {
                    reject(err);
                });
        });
    }

    httpDelete(route, params = null) {
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