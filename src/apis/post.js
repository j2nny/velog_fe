import ApiService from "src/apis/apiService";
import queryString from "query-string"

const Api = new ApiService('http://localhost:8080')

function fetchPostList(params) {
  return Api.get({
    url: '/api/v1/posts?'+queryString.stringify(params),
    params: params,
    headers: {
      'Content-type': 'application/json'
    }
  })
}

export { fetchPostList }
