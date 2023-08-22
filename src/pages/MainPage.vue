<template>
  <div class="row">
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
  </div>
</template>

<script setup>
import {ref} from "vue";

const tab = ref('trending')

</script>
