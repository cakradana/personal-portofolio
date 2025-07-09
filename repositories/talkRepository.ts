import {useTalkStore} from "~/stores/talkStore";

export const getAllTalks = async () => {
    const store = useTalkStore()
    if (store.getTalks.length === 0) {
        await store.fetchTalks()
    }
    return store.getTalks
}

export const getSingle = async (slug: string | string[]) => {
    const state = useTalkStore()
    await state.fetchTalk(slug)
    return state.getTalk
}