
export default class Deal {

    constructor(
            readonly dealID: string,
            readonly isOnSale: '0'|'1',
            readonly  normalPrice:string,
            readonly  retailPrice:string,
            readonly salePrice:string,
            public savings:string,
            readonly storeID:string,
            readonly gameID:string,
            readonly thumb:string,
            readonly title?:string,
            readonly name?:string,
            public storeName?:string
    ){

    }



    
}


