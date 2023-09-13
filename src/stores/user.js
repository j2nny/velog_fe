import {defineStore} from "pinia";
import {fetchLogin} from "src/apis/user";

export const useUserStore = defineStore('user', {
  state: () => ({
    user: {},
    loginResponse: {},
  }),
  getters: {
    getUser (state) {
      return state.user
    },
    getLoginResponse (state) {
      return state.loginResponse
    },
  },
  actions: {
    FETCH_LOGIN(params) {
      return fetchLogin(params)
        .then((response) => {

          this.loginResponse = response.data;
          this.user = response.data.user;
          localStorage.clear();

          if(response.data.message === 'valid'){
            localStorage.setItem('velog-auth', this.loginResponse.token)
            localStorage.setItem('velog-userNo', this.user.userNo)
            localStorage.setItem('velog-id', this.user.id)
            localStorage.setItem('velog-name', this.user.name)
          }
        })
    }
  }
})
