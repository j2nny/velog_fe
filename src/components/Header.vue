<template>
  <div class="row justify-between q-mb-md">
    <div class="text-h4 text-weight-bold cursor-pointer" @click="$router.push('')" style="font-family: 'Lisu Bosa', serif;">velog</div>
    <div>
      <q-btn round unelevated icon="fa-solid fa-sun" class="q-mx-xs"></q-btn>
      <q-btn round unelevated icon="search" class="q-mx-xs"></q-btn>
      <q-btn rounded unelevated outline class="text-weight-bold q-mx-xs" style="line-height: 100%; border: 1px solid">새 글 작성</q-btn>
      <q-btn-dropdown unelevated>
        <template v-slot:label>
          <q-btn round unelevated icon="person"></q-btn>
        </template>
        <q-list>
          <q-item>내 벨로그</q-item>
          <q-item>임시 글</q-item>
          <q-item>읽기 목록</q-item>
          <q-item>설정</q-item>
          <q-item>로그아웃</q-item>
        </q-list>
      </q-btn-dropdown>
    </div>
  </div>
</template>

<script setup>

</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lisu+Bosa:wght@200&display=swap');
</style>
