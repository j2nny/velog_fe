<template>
  <div class="q-px-lg q-py-xl">
    <div class="text-h3 text-bold q-my-lg">{{ post.title }}</div>
    <div class="row">
      <div class="text-subtitle1 text-bold">{{ post.regUserId }}</div>
      <div class="q-px-sm">·</div>
      <div class="text-subtitle1">{{ post.regDttm }}</div>
    </div>
    <div class="text-h6 q-my-lg content-area">{{ post.content }}</div>
    <div class="row items-center">
      <q-avatar style="width: 70px; height: 70px" class="q-mr-md">
        <img :src="post.thumbnailImgPath"/>
      </q-avatar>
      <div class="text-h5 text-bold">{{ post.regUserId }}</div>
    </div>
    <q-separator class="q-my-lg"/>
    <div class="q-mb-xl">
      <q-btn round unelevated icon="fa-brands fa-github" size="md" color="grey-5" class="q-mr-sm"></q-btn>
      <q-btn round unelevated icon="fa-regular fa-envelope" size="md" color="grey-5" class="q-mr-sm"></q-btn>
    </div>
    <div class="row justify-between">
      <div class="row items-center">
        <q-btn class="q-mr-md" round unelevated outline color="teal-5" icon="fa-solid fa-arrow-left"></q-btn>
        <div>
          <div class="text-caption">이전 포스트</div>
          <div class="text-body1 text-bold">이전 포스트 제목</div>
        </div>
      </div>
      <div class="row items-center">
        <div class="column items-end">
          <div class="text-caption">다음 포스트</div>
          <div class="text-body1 text-bold">다음 포스트 제목</div>
        </div>
        <q-btn class="q-ml-md" round unelevated outline color="teal-5" icon="fa-solid fa-arrow-right"></q-btn>
      </div>
    </div>
  </div>

</template>

<script setup>
import {computed, onMounted, onUnmounted, ref} from "vue";
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

onUnmounted(() => {
  postStore.post = ''
})
</script>

<style scoped>
.content-area{
  min-height: 300px;
}
</style>
