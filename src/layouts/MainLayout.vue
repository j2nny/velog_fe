<template>
      <q-layout view="hHh LpR fFf">
        <Header/>
        <q-page-container>
          <router-view
            :class="{'q-mx-lg': browserSize < 600, 'q-mx-xl': browserSize >= 600}"
          ></router-view>
        </q-page-container>
      </q-layout>

</template>

<script setup>
import Header from "components/Header.vue";
import {onMounted, ref} from "vue";

const browserSize = ref(window.innerWidth)
const handleBrowserSize = () => {
  browserSize.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleBrowserSize)
})
</script>
