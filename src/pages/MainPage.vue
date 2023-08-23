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
import {ref} from "vue";
import Post from "components/Post.vue";

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

const postRows = [
  {postNo: 1, title: '제목', content: '내용', thumbnailImgPath: 'https://cdn.quasar.dev/img/chicken-salad.jpg', explnCntnt: '', regDttm: '2023. 08. 23', regUserId: 'jieun', like: 3},
  {postNo: 2, title: 'fdsadfsadsadfsadfsadfdsfasdfasfasfsafsdafsdafasdfsdaffds', content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.', thumbnailImgPath: 'https://cdn.quasar.dev/img/parallax2.jpg', explnCntnt: '', regDttm: '2023. 08. 23', regUserId: 'jieun', like: 103},
  {postNo: 3, title: 'fdsafds', content: 'fdafdsfasfd', thumbnailImgPath: 'https://cdn.quasar.dev/img/mountains.jpg', explnCntnt: '', regDttm: '2023. 08. 23', regUserId: 'jieun', like: 10},
  {postNo: 4, title: 'fdsafds', content: 'fdafdsfasfd', thumbnailImgPath: 'https://cdn.quasar.dev/img/parallax1.jpg', explnCntnt: '', regDttm: '2023. 08. 23', regUserId: 'jieun', like: 201},
  {postNo: 5, title: 'fdsafds', content: 'fdafdsfasfd', thumbnailImgPath: 'https://cdn.quasar.dev/img/chicken-salad.jpg', explnCntnt: '', regDttm: '2023. 08. 23', regUserId: 'jieun', like: 56},
]
</script>
