<template>
  <div id="main" class="main detail-page">
    <div class="detail-img" v-if="state === State.loaded">
      <deal-detail-item :datum="datum"></deal-detail-item>
    </div>
    <div class="detail-img" v-if="state === State.loading">
      <deal-detail-item-shimmer></deal-detail-item-shimmer>
    </div>
    <div v-if="state === State.loaded">
      <h2 class="others">Other deals for this game</h2>
      <div v-for="deal in relatedDeals" :key="deal.dealID">
        <related-deal :deal="deal"></related-deal>
      </div>
    </div>
    

  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref } from "vue";
import useDeals from "@/store/deals";
import State from "@/helpers/state";
import RelatedDeal from "@/components/RelatedDeal.vue";
import DealDetailItem from "@/components/DealDetailItem.vue";
import DealDetailItemShimmer from "@/components/DealDetailItemShimmer.vue";

export default defineComponent({
  props: {
    dealID: {
      type: String,
      required: true,
    },
  },
  components: {
    RelatedDeal,
    DealDetailItem,
    DealDetailItemShimmer,
  },

  setup(props) {
    const dealId = ref(props.dealID);

    const { datum, error, state, fetchById, relatedDeals } = useDeals();

    watch(
      () => props.dealID,
      (newVal) => {
        fetchById(newVal);
      },
      { immediate: true }
    );

    return {
      dealId,
      datum,
      error,
      state,
      relatedDeals,
      State,
    };
  },
});
</script>

<style lang="scss">
.detail-title {
  font-size: 28px;
  font-weight: 500;
}
.others {
  background: #f8f8f8;
  padding: 10px;
  font-size: 24px;
  font-weight: 500;
}

.related-deal {
  display: flex;
  align-items: center;
  p {
    font-size: 20px;
    font-weight: 500;
  }
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
}

.price {
  margin-bottom: 8px;
}
</style>



