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
.normal-price {
  text-decoration: line-through;
  margin-right: 10px;
  font-size: 16px;
  font-weight: 600;
  line-height: 21px;
  letter-spacing: 0px;
}

.sale-price {
  color: #14a38b;
  font-size: 16px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: 0px;
}

.price {
  margin-bottom: 8px;
}
</style>
