import {defineStore} from "pinia";

interface CvState {
    cv?: CvObject | null,
}

interface CvFieldsObject {
    content: string
}

interface CvObject {
    fields: CvFieldsObject | any,
    metadata: {
        tags: any[]
    }
    sys: {
        id: string,
        updatedAt: string,
    }
}

export const useCvStore = defineStore('cv', {
    state: () => ({
        cv: null,
        histories: []
    } as CvState),
    getters: {
        getCv: state => state.cv,
    },
    actions: {
        async fetchCv() {
            const {$client} = useNuxtApp()
            await Promise.all([
                $client.getEntries({
                    content_type: "cv",
                    order: '-sys.createdAt',
                })
            ]).then(([cvs]) => {
                this.cv = cvs.items[0];
            })
        },
    }
})
