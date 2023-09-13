<template>
  <q-header class="row justify-between bg-white text-black"
            :class="{'q-px-lg q-py-md': browserSize < 600, 'q-px-xl q-py-md': browserSize >= 600}"
  >
      <div class="text-h4 text-weight-bold cursor-pointer" @click="$router.push('/')" style="font-family: 'Lisu Bosa', serif;">velog</div>
      <div>
        <q-btn round unelevated icon="fa-solid fa-sun" class="q-mx-xs"></q-btn>
        <q-btn round unelevated icon="search" class="q-mx-xs"></q-btn>
        <q-btn
          v-if="!isLogin"
          rounded unelevated color="black"
          class="text-weight-bold q-mx-xs"
          style="line-height: 100%; border: 1px solid"
          @click="loginDialog = true"
        >로그인</q-btn>
        <q-btn v-if="isLogin" rounded unelevated outline class="text-weight-bold q-mx-xs" style="line-height: 100%; border: 1px solid">새 글 작성</q-btn>
        <q-btn-dropdown v-if="isLogin" unelevated>
          <template v-slot:label>
            <q-avatar round unelevated size="md" icon="person"></q-avatar>
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
  </q-header>

  <q-dialog v-model="loginDialog"><Login @closeDialog="loginDialog = false" @isLogin="isLogin = true"></Login></q-dialog>
</template>

<script setup>
import {onMounted, ref} from "vue";
import Login from "components/Login.vue";

const browserSize = ref(window.innerWidth)
const handleBrowserSize = () => {
  browserSize.value = window.innerWidth
}

const loginDialog = ref(false)

const isLogin = ref(localStorage.getItem('velog-userNo') != null)

onMounted(() => {
  window.addEventListener('resize', handleBrowserSize)
})
</script>

<style scoped>
  @import url('https://fonts.googleapis.com/css2?family=Lisu+Bosa:wght@200&display=swap');
</style>
