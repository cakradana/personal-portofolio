import {useCvStore} from "~/stores/cvStore";

export const getCv = async () => {
    const store = useCvStore()
    await store.fetchCv()
    return store.getCv
}
