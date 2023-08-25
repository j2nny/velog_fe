import { defineStore } from 'pinia'
import {fetchPostList} from "src/apis/post";

export const usePostStore = defineStore('post', {
  state: () => ({
    postList: [],
  }),

  getters: {
    getPostList (state) {
      return state.postList;
    }
  },

  actions: {
    FETCH_POST_LIST(params) {
      fetchPostList(params)
        .then((response) => {
          this.postList = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
})
