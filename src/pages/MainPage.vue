<template>
    <q-table
      grid
      :columns="postColumns"
      :rows="postRows"
    >
      <template v-slot:top-left>
        <div class="row items-center q-mb-sm">
          <q-tabs
            v-model="tab"
            class="text-grey text-h6"
            active-color="black"
          >
            <q-tab name="trending">
              <div>
                <q-icon name="fas fa-arrow-trend-up" class="q-mr-md"/>트렌딩
              </div>
            </q-tab>
            <q-tab name="recent">
              <div>
                <q-icon name="fa-regular fa-clock" class="q-mr-md"/>최신
              </div>
            </q-tab>
          </q-tabs>

          <q-select
            v-if="tab === 'trending'"
            style="width: 110px"
            filled dense
            class="q-ml-sm"
            v-model="period"
            :options="periodOptions"
            map-options
          />
        </div>
      </template>
      <template v-slot:item="props">
        <div class="col-xs-12 col-sm-6 col-md-4 col-lg-3 col-xl-2">
          <Post :post="props.row"></Post>
        </div>
      </template>
    </q-table>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import Post from "components/Post.vue";
import { usePostStore } from "../stores/post.js"

const store = usePostStore();

const tab = ref('trending')
const period = ref('week')
const periodOptions = [
  { label: '오늘', value: 'today' },
  { label: '이번 주', value: 'week' },
  { label: '이번 달', value: 'month' },
  { label: '올해', value: 'year' },
]

const postColumns = [
  {name: 'postNo', label:'게시물번호', field: 'postNo'},
  {name: 'title', label:'제목', field: 'title'},
  {name: 'content', label:'내용', field: 'content'},
  {name: 'thumbnailImgPath', label:'썸네일이미지경로', field: 'thumbnailImgPath'},
  {name: 'explnCntnt', label:'게시물설명', field: 'explnCntnt'},
  {name: 'regDttm', label:'등록일시', field: 'regDttm'},
  {name: 'regUserId', label:'등록사용자ID', field: 'regUserId'},
]

const postRows = computed(() => {
  return store.getPostList;
})

onMounted(() => {
  store.FETCH_POST_LIST({
    searchWord: null,
    searchStartDate: 20230820,
    searchEndDate: 20230824
  });
})
</script>
