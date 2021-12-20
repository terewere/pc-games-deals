<template>
  <div id="main" class="main">
    <div class="main-top">
      <div class="title">Deals</div>
      <search-box :filters="filters" @set-filters="load"></search-box>
    </div>

    <app-filter :filters="filters" @set-filters="load"> </app-filter>

    <div class="categories">
      <div
        v-for="(item, index) in data"
        :key="index"
        :item="item"
        :index="index"
        class="category-card"
      >
        <deal-item :deal="item"></deal-item>
      </div>
      <!-- <div v-if="data.length == 0">empty</div> -->
    </div>
    <div style="text-align: center" v-if="state === State.loading">
      <Spinner />
        <transition name="fade">
      <div class="loading" v-show="state === State.loading">
        <span class="fa fa-spinner fa-spin"></span> Loading
      </div>
    </transition>
    </div>
    <div style="text-align: center" v-if="state === State.failed">
      <h3>Something went wrong</h3>
    </div>
    <infinite-loading :state="state" :filters="filters" target=".categories" @set-filters="load"></infinite-loading>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive } from "vue";

import useDeals from "@/store/deals";

import State from "@/helpers/state";
import Spinner from "@/components/Spinner.vue";
import DealItem from "@/components/DealItem.vue";
import AppFilter from "@/components/AppFilter.vue";
import SearchBox from "@/components/SearchBox.vue";
import InfiniteLoading from "@/components/InfiniteLoading.vue";

export default defineComponent({
  components: {
    Spinner,
    DealItem,
    AppFilter,
    SearchBox,
    InfiniteLoading,
  },

  setup() {
    const endpoint = "deals";

    const { data, error, state, fetchDeals } = useDeals();

     const filters = reactive({
      title: '',
      onSale: 0,
      page: 1,
    });

    onMounted(() => {
      load(filters);
    });

  
      const load = (f: typeof filters) => {

        filters.title = f.title;
        filters.onSale = f.onSale;
        filters.page = f.page;

      const arr = [];

      arr.push(`pageSize=90`);
    //  arr.push(`exact=1`);

       if (filters.page) {
        arr.push(`pageNumber=${filters.page}`);
      }

      if (filters.title) {
        arr.push(`title=${filters.title}`);
      }

      if (filters.onSale) {
        arr.push(`onSale=${filters.onSale}`);
      }


    const url =  `${endpoint}?${arr.join('&')}`;

   fetchDeals(url);

   console.log(url);
   

    };

    return {
      data,
      error,
      state,
      State,
      load,
      filters,
    };
  },
});
</script>

<style lang="scss" scoped>
.title {
  color: #000;
  font-size: 28px;
  font-weight: 500;
}

@media only screen and (min-width: 600px) {
  .title {
    width: 100%;
  }

  .main-top {
    display: flex;
  }
}


</style>
