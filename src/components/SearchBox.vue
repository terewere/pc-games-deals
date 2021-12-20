<template>
     <input
        type="search"
        v-model="query"
        placeholder="Search deals by name"
        name="search"
        class="search"
      />
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import useDebouncedRef from "@/helpers/useDebouncedRef";

export default defineComponent({
  name: "Search",
  emits:['set-filters'],
  props:{
    filters:{
      type:Object
    }
  },

  setup(props, {emit}) {
    const query = useDebouncedRef("", 1000, false);

    watch(query,(title) => {  

        emit('set-filters', {
        ...props.filters,
        title,
        page: 1
      })
    });

    return {
      query
    };
  },
});
</script>
<style lang="scss" scoped>
.search {
  font-size: 14px;
  font-weight: 400;
  color: #888888;
  width: 100%;
  padding: 10px 10px;
  background: #ffffff;
  border: 1px solid #dbe2ea;
  box-sizing: border-box;
  border-radius: 6px;
  margin-top: 12px;
  margin-bottom: 25px;
  background-image: url("../assets/search-icon.svg");
  background-position: 95% 10px;
  background-repeat: no-repeat;
}


@media only screen and (min-width: 600px) {

  .search {
    width: 100%;
    margin-bottom: 77px;
  }
}
</style>
