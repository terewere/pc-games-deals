<template>
  <div v-show="state !== State.loading" class="load-more">
    <button @click="loadMore">Load More</button>
  </div>
</template>

<script lang="ts">
import State from "@/helpers/state";
import useDeals from "@/store/deals";
import { defineComponent } from "vue";

export default defineComponent({
  name: "Infinite",

  props: {
    target: { type: String, required: true },
    filters: {
      type: Object,
    },
  },
  emits: ["set-filters"],

  setup(props, { emit }) {
    const { state, data } = useDeals();

    //  onMounted(() => {
    //     window.addEventListener("scroll", handleScroll);
    //   });

    //   onUnmounted(() => {
    //     window.removeEventListener("scroll", handleScroll);
    //   });

    // const handleScroll = (e: any) => {

    //   const listElm =
    //     document.querySelector(props.target) || document.documentElement;

    //   if (listElm?.scrollTop + listElm?.clientHeight >= listElm?.scrollHeight) {

    //     emit("set-filters", {
    //       ...props.filters,
    //       page: props.filters?.page + 1,
    //     });
    //   }

    // };

    const loadMore = () => {
      emit("set-filters", {
        ...props.filters,
        page: props.filters?.page + 1,
      });
    };

    return { loadMore, State, state, data };
  },
});
</script>

<style lang="scss" scoped>
$green: #14a38b;

.load-more {
  text-align: center;

  button {
    border: none;
    cursor: pointer;
    color: $green;
    padding: 12px 16px;
    font-size: 16px;
  }
}
</style>