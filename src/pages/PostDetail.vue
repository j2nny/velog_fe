<template>
  <div class="q-px-lg q-py-xl">
    <div class="text-h3 text-bold q-my-lg">{{ post.title }}</div>
    <div class="row">
      <div class="text-subtitle1 text-bold">{{ post.regUserId }}</div>
      <div class="q-px-sm">·</div>
      <div class="text-subtitle1">{{ post.regDttm }}</div>
    </div>
    <div class="q-my-lg">{{ post.content }}</div>
  </div>

</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import {useRoute} from "vue-router";
import {usePostStore} from "stores/post";

const route = useRoute();
const postStore = usePostStore();

const post = computed(() => {
  return postStore.post
})

onMounted(() => {
  postStore.FETCH_POST(route.params.postNo);
})
</script>
