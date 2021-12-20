import { reactive, ref, toRefs } from "vue";
import Api from '@/helpers/api'
import Deal from "@/models/Deal";
import State from "@/helpers/state";
import DataStore from "@/helpers/DataStore";
import { calculateSavings, getDealByGame, setStoreName } from '@/helpers/utils'

const dataStore = reactive<DataStore<Deal>>({
    data: [],
    datum: undefined,
    state: State.idle,
    error: undefined
});

const relatedDeals = ref<Deal[]>([]) //related by title

export default function useDeals() : any {

    const fetchDeals = async (endpoint: string) => {

        const searchParams = new URLSearchParams(endpoint);

        try {

            dataStore.state = State.loading
            const json = await Api.get(endpoint);

            const pageNumber = searchParams.get('pageNumber')

            if (json.length < 30) State.completed;

            if (Number(pageNumber) === 1) {

                dataStore.data = json;

            } else {
                dataStore.data = [...dataStore.data, ...json]

            }
            dataStore.state = State.loaded

        } catch (e: unknown) {
            dataStore.state = State.failed
            dataStore.error = e
        }
    };

    const fetchById = async (dealID: string) => {

        try {

            dataStore.state = State.loading

            //looking up the current deal by ID
            const deal = await Api.get('deals?id=' + dealID);

            dataStore.datum = deal['gameInfo'];

            //setting store name for the deal.
            setStoreName([dataStore.datum as Deal])

            //we are calculating our own savings
            const savings = calculateSavings(dataStore.datum!);
            dataStore.datum!.savings = savings;

            //fetching related deals by game title

            const url = 'deals?exact=1&title=' + dataStore.datum!.name!

            const json = await Api.get(url);
            const filtered =  getDealByGame(json, dealID)

            setStoreName(filtered);

            relatedDeals.value = filtered

            dataStore.state = State.loaded;


        } catch (e: any) {
            console.log('errorr');
            console.log(e);

            dataStore.state = State.failed
            dataStore.error = e
        }
    };

    return { ...toRefs(dataStore), relatedDeals, fetchDeals, fetchById };
}



