import { defineStore } from 'pinia'
import {fetchPost, fetchPostList} from "src/apis/post";

export const usePostStore = defineStore('post', {
  state: () => ({
    postList: [],
    post: ''
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
    },
    FETCH_POST(postNo) {
      fetchPost(postNo)
        .then((response) => {
          this.post = response.data;
        })
        .catch((error) => {
          console.log(error);
        })
    }
  }
})
