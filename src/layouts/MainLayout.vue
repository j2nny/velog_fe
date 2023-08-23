<template>
  <div :class="{'q-mx-lg q-my-lg': browserSize < 600, 'q-mx-xl q-my-lg': browserSize >= 600}">
    <Header></Header>
    <router-view></router-view>
  </div>
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
