<template>
  <div class="main detail-page">
    <div class="detail-img">
       <!-- Inconsistent deal structure -->
      <h2 class="title">{{ datum?.name || datum?.title }}</h2>
      <div class="price">
        <span class="normal-price">
          <!-- Inconsistent deal structure -->
          {{ $filters.currency(datum?.normalPrice || datum?.retailPrice) }}
        </span>
        <span class="sale-price"
          >{{ $filters.currency(datum?.salePrice) }}
        </span>

         <span class="savings">
          <!-- Inconsistent deal structure -->
          {{ 'You save ' + $filters.currency(datum?.savings) }}
        </span>
      </div>
 {{ 'STORE NAME ' + datum?.storeName }}
      <img style="width: 80%" :src="datum?.thumb" />
    </div>
    <div>
      <h2 class="title">{{ datum?.name }}</h2>
      <h2 class="title">{{ datum?.savings }}</h2>
      <h2 style="color: #ff0000">₵2.25</h2>
      <hr />
      Status: <span class="stock">In stock</span>

      <p>Freshness Guarantee:</p>
      <p>
        We guarantee that you will be satisfied with the freshness <br />
        and quality of this product
      </p>
      <hr />
      <p>Quantity</p>
      <p><input type="number" style="padding: 5px; display: inline-block" /></p>
      <button>Add to Cart</button>
      <img :src="datum?.thumb" />
    </div>
  </div>
</template>

<script>
import { defineComponent, watch, ref } from "vue";
import useDeals from "@/store/deals";

export default defineComponent({
  props: {
    dataId: {
      type: String,
      required: true,
    },
  },

  setup(props) {
    const dealId = ref(props.dataId);
    const saving = ref(0);

    const { datum, error, state, fetchById } = useDeals();

    watch(
      () => props.dataId,
      (newVal) => {
        fetchById(dealId.value);
      },
      { immediate: true }
    );


    return { dealId, datum, error, state, saving };
  },
});
</script>

<style lang="scss">


.normal-price {
    text-decoration: line-through;
    margin-right: 10px;
    font-size: 16px;
    font-weight: 600;
    line-height: 21px;
    letter-spacing: 0px;
}

.sale-price {
    color: #14A38B;
    font-size: 16px;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0px;
    margin-left:10px;
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



