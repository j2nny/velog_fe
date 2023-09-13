<template>
    <q-card class="q-pa-lg">
      <p class="text-h6 text-bold">로그인</p>
      <q-card-section>
        <p class="text-body1 text-bold text-grey-6">이메일로 로그인</p>
        <q-input
          type="email"
          outlined dense
          class="q-my-sm"
          color="teal-5"
          placeholder="이메일을 입력하세요."
          v-model="user.email"
        ></q-input>
        <q-input
          type="password"
          outlined dense
          class="q-my-sm"
          color="teal-5"
          placeholder="비밀번호를 입력하세요."
          v-model="user.pwd"
        ></q-input>
        <div class="row justify-center">
          <q-btn
            unelevated color="teal-5"
            label="로그인"
            @click="login"
          ></q-btn>
        </div>
      </q-card-section>
      <q-card-section>
        <p class="text-body1 text-bold text-grey-6">소셜 계정으로 로그인</p>
        <div class="row justify-evenly">
          <q-btn round unelevated size="md" icon="fa-brands fa-github" color="black"></q-btn>
          <q-btn round unelevated size="md" icon="fa-brands fa-google" color="red-9"></q-btn>
          <q-btn round unelevated size="md" icon="fa-brands fa-facebook" color="indigo-9"></q-btn>
        </div>
      </q-card-section>
    </q-card>
</template>

<script setup>
import {ref} from "vue";
import { useUserStore } from "stores/user";
import {useRouter} from "vue-router";
import {useQuasar} from "quasar";

const userStore = useUserStore();
const router = useRouter()
const $q = useQuasar()

const user = ref({
  email: null,
  pwd: null,
})

const emits = defineEmits(['closeDialog', 'isLogin'])

const login = () => {
  userStore.FETCH_LOGIN(user.value).then( () => {
    if(userStore.getLoginResponse.message === 'valid') {
      $q.notify({
        message: "로그인 되었습니다.",
        color: "teal-5",
        timeout: 500
      })
      emits('closeDialog')
      emits('isLogin')
      router.push({name: 'main'})
    } else {
      $q.notify({
        message: "이메일과 비밀번호를 확인해주세요.",
        color: "red-8",
        timeout: 500
      })
    }
    }
  )
}
</script>
