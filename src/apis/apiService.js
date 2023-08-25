import axios from 'axios';

class ApiService {

  async request(data) {

    if (!data.headers) {
      data.headers = {};
    }

    return await axios({
      method: data.method,
      url: data.url,
      data: data.params,
      headers: data.headers
    }).then((response) => {
      return response;
    }).catch(async (e) => {

    });
  };

  get(data) {
    return this.request({
      method: 'get',
      ...data
    });
  }

  post(data) {
    return this.request({
      method: 'post',
      ...data
    });
  }

  put(data) {
    return this.request({
      method: 'put',
      ...data
    });
  }

  delete(data) {
    return this.request({
      method: 'delete',
      ...data
    });
  }
}

export default ApiService;
