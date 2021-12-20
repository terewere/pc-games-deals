<template>
  <div class="filter" :class="accordionClasses" @click="toggleAccordion">
    <span>Filters</span>

    <div class="filter-body">
      <div class="filter-content">
        <label for="checkbox">On Sale</label>
        &nbsp;
        <label class="icheck">
          <input v-model="checked" type="checkbox" />
          <span class="checkmark"></span>
        </label>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch, ref, toRefs } from "vue";
import useAccordion from "@/helpers/useAccordion";

export default defineComponent({
  name: "Filter",
  emits:['set-filters'],
  props:{

    filters:{
      type: Object
    }

  },

  setup(props, {emit}) {
    const checked = ref(false);

    const { toggleAccordion, accordionClasses } = useAccordion();

    watch(checked,(newChecked) => { 
      const onSale = Number(newChecked) 

      emit('set-filters', {
        ...props.filters,
        onSale,
        page: 1
      })
    
    });


    return {
      toggleAccordion,
      accordionClasses,
      checked
    };
  },
});
</script>

<style lang="scss" scoped>


.filter {
  color: #888888;
  width: 100%;
  font-size: 28px;
  font-weight: 400;
  background: #fff;
  box-sizing: border-box;
  margin-bottom: 50px;
  cursor: pointer;
 

  span {
    background: #fcfcfc;
    width: 100%;
    display: block;
    padding: 8px;
  }
}

.filter-body {
  padding: 0;
  overflow: hidden;
  transition: 0.3s ease all;
  background: #fff;
}
.is-closed .filter-body {
  max-height: 0;
  background: #fff;
}
.filter-content {
  padding: 20px;
  background: #fff;
  font-size: 18px;
  font-weight: 400;
  font-style: normal;
  height: 54px;
  border-bottom: 0.5px solid #d2d2d2;

}

.filter:before {
  content: "\2303"; /* 2304 */
  font-size: 22px;
  color: #0880ae;
  float: right;
  margin-top: 12px;
}

.active:before {
  content: "\2304";
  font-size: 25px;
  color: #0880ae;
  float: right;
  margin-top: 0px;
}

@media only screen and (min-width: 600px) {
  .filter-content {
    height: 140px;
  }

  .filter { 
    margin-left: -25px;
  }
}
</style>