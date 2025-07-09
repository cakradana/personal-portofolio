import { defineStore } from "pinia";
import { MarkedRenderer } from "~/utils/markedRenderer";

import type { Ref } from "vue";

interface TalkState {
  talks: TalkObject[];
  talk: TalkObject | null;
}

interface TalkCategoryObject {
  fields: {
    content: string;
    title: string;
  };
}

interface TalkFieldsObject {
  content: string;
  title: string;
  talkCategory: TalkCategoryObject;
}

interface TalkObject {
  contentRendered?: string | Ref;
  fields: TalkFieldsObject | any;
  metadata: {
    tags: any[];
  };
  sys: {
    createdAt: string;
    id: string;
  };
}

export const useTalkStore = defineStore("talk", {
  state: () =>
    ({
      talks: [],
      talk: null,
    } as TalkState),
  getters: {
    getTalks: (state) => state.talks,
    getTalk: (state) => state.talk,
  },
  actions: {
    async fetchTalk(slug: string | string[]) {
      const { $client } = useNuxtApp();
      await Promise.all([
        $client.getEntries({
          content_type: "talks",
          "fields.slug[in]": slug,
          order: ["-sys.createdAt"],
        }),
      ]).then(async ([talks]) => {
        this.talk = talks.items[0];
        const render = MarkedRenderer(this.talk.fields.content);
        this.talk.contentRendered = await render;
      });
    },
    async fetchTalks() {
      const { $client } = useNuxtApp();
      await Promise.all([
        $client.getEntries({
          content_type: "talks",
          order: ["-sys.createdAt"],
        }),
      ]).then(([talks]) => {
        this.talks = talks.items;
      });
    },
  },
});