<template>
  <div class="related-deal">
    <div>
      <p v-text="item.storeName"></p>
      <span class="normal-price">
        {{ $filters.currency(item?.normalPrice) }}</span
      >
      <span class="sale-price"> {{ $filters.currency(item?.salePrice) }}</span>
    </div>
    <button @click="showDetailScreen(item.dealID)" class="btn-outline">View More</button>
  </div>
  <hr />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import {showDetailScreen} from '@/helpers/utils'

export default defineComponent({
    props: {
        deal: {
            type: Object,
            required: true
        }
    },
    setup(props) {
        const item = ref(props.deal);

        return {
            item,
            showDetailScreen
        }
        
    },
})
</script>


