import { reactive } from "vue";
import Api from '@/helpers/api'
import Store from "@/models/Store";
import State from "@/helpers/state";
import DataStore from "@/helpers/DataStore";

const dataStore = reactive<DataStore<Store>>({
    data: [],
    datum: undefined,
    state: State.idle,
    error: undefined
});

export default function useStores() {

    const fetchStore = async () => {

        dataStore.state = State.loading

        try {

            dataStore.data = await Api.get('stores');
            dataStore.state = State.loaded


        } catch (e: any) {
            dataStore.state = State.failed
            dataStore.error = e
        }
    };


    return { fetchStore };
}


export const getBystoreID = (storeID: string) => {
    return dataStore.data.find((e) => e.storeID === storeID)

}

