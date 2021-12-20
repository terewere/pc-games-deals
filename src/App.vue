<template>
  <app-header/>
  <router-view/>
  <app-footer/>
</template>

<script lang="ts">
import AppHeader from '@/components/Header.vue'
import AppFooter from '@/components/Footer.vue'
import useStores from '@/store/stores'
import { onBeforeMount } from '@vue/runtime-core';

export default {

  components: {
    AppHeader,
    AppFooter
  },

  setup(){

      const {fetchStore } = useStores();

    onBeforeMount(fetchStore)

  }
  
}
</script>
