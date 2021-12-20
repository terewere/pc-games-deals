import Deal from "@/models/Deal";
import router from "@/router";
import { getBystoreID } from '@/store/stores'


const showDetailScreen = (dealID: string) => {
    router.push({ name: "deal.show", params: { dealID} });
  };
  


 const calculateSavings = (deal: Deal): string => {

  return `${(Number(deal.retailPrice) -  Number(deal.salePrice)).toFixed(2)}`
}

  //A list of other deals available for the game.
  const getDealByGame =  (deals: Deal[], dealId: string): Deal[] => {

    //removing current deal from the related deals
    return deals.filter(deal => deal.dealID != dealId);


};

const setStoreName = (data: Deal[]) => {

  data.forEach(async (deal: Deal) => {

      //we need storeName | we have storeID 
      const store = getBystoreID(deal.storeID)

      deal.storeName = store?.storeName

  });
}

export {
  showDetailScreen,
  calculateSavings,
  getDealByGame,
  setStoreName
}