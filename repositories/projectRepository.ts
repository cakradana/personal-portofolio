import {useProjectStore} from "~/stores/projectStore";
import {collect} from "collect.js";

export const getAllProjects = async () => {
    const store = useProjectStore()
    if (store.getProjects.length === 0) {
        await store.fetchProjects()
    }
    return store.getProjects
}


export const getSingle = async (slug: string | string[]) => {
    const store = useProjectStore()
    await store.fetchProject(slug)
    return store.getProject
}
