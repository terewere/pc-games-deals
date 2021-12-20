import { computed, ref } from 'vue'

const useAccordion = () => {

const isOpen = ref(false);

const toggleAccordion = () => {
    isOpen.value = !isOpen.value;
  };

  const accordionClasses = computed((): any => {
    return {
      "is-closed": !isOpen.value,
      active: isOpen.value,
      "is-dark": !isOpen.value,
    };
  });

  return {
      isOpen,
      accordionClasses,
      toggleAccordion
  }

}

export default useAccordion;