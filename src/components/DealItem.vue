<template>
  <h3 class="category-name">{{ $filters.str_limit(item.title, 18) }}</h3>

  <div class="price">
    <span class="normal-price">{{ $filters.currency(item.normalPrice) }} </span>
    <span class="sale-price">{{ $filters.currency(item.salePrice) }} </span>
  </div>
  <button @click="showDetailScreen(item.dealID)" class="btn-outline">
    View More
  </button>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { showDetailScreen } from "@/helpers/utils";

export default defineComponent({
  name: "DealItem",
  props: {
    deal: {
      type: Object,
      required: true,
    },
  },
  setup(props) {
    const item = ref(props.deal);

    return {
      item,
      showDetailScreen,
    };
  },
});
</script>
<style lang="scss" scoped>

</style>
