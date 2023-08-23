<template>
  <q-card class="post-card q-ma-sm">
    <q-img :src="post.thumbnailImgPath" class="thumbnail-img"></q-img>

    <q-card-section class="column q-pb-none" style="height: 175px">
      <div class="col text-weight-bold title-area">{{ post.title }}</div>
      <div class="col-8 content-area">{{ post.explnCntnt ? post.explnCntnt : post.content }}</div>
      <div class="col text-caption text-grey">{{ post.regDttm }} · 0개의 댓글</div>
    </q-card-section>
    <q-separator></q-separator>
    <q-card-section class="row items-center justify-between">
      <div>
        <q-avatar style="width: 40px; height: 40px" class="q-mr-sm">
          <img :src="post.thumbnailImgPath"/>
        </q-avatar>
        by {{ post.regUserId }}
      </div>
      <div><q-icon name="fa-solid fa-heart"/> {{ post.like }}</div>
    </q-card-section>
  </q-card>
</template>

<script setup>
defineProps({
  post: {
    postNo: Number,
    title: String,
    content: String,
    thumbnailImgPath: String,
    explnCntnt: String,
    regDttm: String,
    regUserId: String,
    like: Number
  }
})

</script>

<style scoped>
.title-area{
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.content-area{
  width: 100%;
  overflow-wrap: break-word;
  overflow: hidden;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  display: -webkit-box;
  -webkit-line-clamp: 5;
}
</style>
