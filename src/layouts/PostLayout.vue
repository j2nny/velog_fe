<template>
  <div class="column items-center">
        <q-page-sticky
          v-if="browserSize >= 1300"
          position="left"
          :offset="[150, 0]"
        >
          <div class="column items-center">
            <q-btn round unelevated outline color="grey-5" icon="fa-solid fa-heart"></q-btn>
            <div class="">32</div>
            <q-btn round unelevated outline color="grey-5" icon="fa-solid fa-share-nodes"></q-btn>
          </div>

        </q-page-sticky>
        <router-view class="content-area"></router-view>
        <q-page-sticky
          v-if="browserSize >= 1300"
          position="right"
          :offset="[200, 0]"
          style="border: black solid 1px"
        >right</q-page-sticky>
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
  width: 1000px;
}

@media (max-width: 1300px) {
  .content-area{
    width: 100%;
  }
}
</style>
