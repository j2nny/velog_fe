import ApiService from "src/apis/apiService";

const Api = new ApiService('http://localhost:8080')

function fetchLogin(params) {
  return Api.post({
    url: '/api/v1/users/login',
    params: params,
    headers: {
      'Content-type': 'application/json'
    }
  })
}

export { fetchLogin }
