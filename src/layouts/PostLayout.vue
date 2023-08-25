<template>
    <div class="row justify-center">
      <div v-if="browserSize >= 1300">left</div>
      <router-view class="content-area"></router-view>
      <div v-if="browserSize >= 1300">right</div>
    </div>
</template>

<script setup>
import {onMounted, ref} from "vue";

const browserSize = ref(window.innerWidth)
const handleBrowserSize = () => {
  browserSize.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleBrowserSize)
})
</script>

<style scoped>
  .content-area{
    width: 1100px;
  }

  @media (max-width: 1100px) {
    width: 100%;
  }

  .fixed-area{
    position: sticky;
    top: 0;
  }
</style>
