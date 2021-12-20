<template>
  <h2 class="detail-title">{{ deal?.name }}</h2>
  <div class="price">
    <span class="normal-price">
      {{ $filters.currency(deal?.retailPrice) }}
    </span>
    <span class="sale-price">{{ $filters.currency(deal?.salePrice) }} </span>
    <span class="savings">
      {{ "You save " + $filters.currency(deal?.savings) }}
    </span>
  </div>
  <div class="store-name">
    {{ deal?.storeName }}
  </div>
  <img style="width: 100%" :src="deal?.thumb" />
</template>

<script lang="ts">
import Deal from "@/models/Deal";
import { defineComponent, ref } from "vue";

export default defineComponent({
  props: {
    datum: {
      type: Deal,
    },
  },
  setup(props) {
    const deal = ref(props.datum);

    return { deal };
  },
});
</script>

<style lang="scss" scoped>
.store-name {
  background: #f8f8f8;
  padding: 10px;
  margin-bottom: 0.5rem;
}
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
  margin-left: 10px;
}

.price {
  margin-bottom: 8px;
  display: flex;
}

.savings {
  margin-left: auto;
  font-style: italic;
  font-weight: 100;
  padding-right: 7rem;
}
</style>
