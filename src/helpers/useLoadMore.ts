import { ref, onMounted,onUnmounted} from 'vue'

const useLoadMore = () => {

    const scrollComponent = ref();

    onMounted(() => {
        window.addEventListener("scroll", handleScroll);
      });
  
      onUnmounted(() => {
        window.removeEventListener("scroll", handleScroll);
      });
  
      const loadMore = () => {
       // page.value++;
       // fetchDeals(`${endpoint}&pageSize=30&pageNumber=${page.value}`);

       console.log('scroll');
       
      };
  
      const handleScroll = (e: any) => {
        const element = scrollComponent.value;
  
        if (element?.getBoundingClientRect().bottom <= window.innerHeight) {
          loadMore();
        }
      };


      return {
        scrollComponent
        
      }
}

export default useLoadMore;


