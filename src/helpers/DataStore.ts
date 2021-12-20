import State from "./state";

interface DataStore<T> {
    data: T[],
    datum?:T,
    error?: any
    state: State
}

export default DataStore;