import { defineStore } from "pinia";
import { MarkedRenderer } from "~/utils/markedRenderer";

import type { Ref } from "vue";

interface BlogState {
  blogs: BlogObject[];
  blog: BlogObject | null;
}

interface BlogCategoryObject {
  fields: {
    content: string;
    title: string;
  };
}

interface BlogFieldsObject {
  content: string;
  title: string;
  blogCategory: BlogCategoryObject;
}

interface BlogObject {
  contentRendered?: string | Ref;
  fields: BlogFieldsObject | any;
  metadata: {
    tags: any[];
  };
  sys: {
    createdAt: string;
    id: string;
  };
}

export const useBlogStore = defineStore("blog", {
  state: () =>
    ({
      blogs: [],
      blog: null,
    } as BlogState),
  getters: {
    getBlogs: (state) => state.blogs,
    getBlog: (state) => state.blog,
  },
  actions: {
    async fetchBlog(slug: string | string[]) {
      const { $client } = useNuxtApp();
      await Promise.all([
        $client.getEntries({
          content_type: "blogs",
          "fields.slug[in]": slug,
          order: ["-sys.createdAt"],
        }),
      ]).then(async ([blogs]) => {
        this.blog = blogs.items[0];
        const render = MarkedRenderer(this.blog.fields.content);
        this.blog.contentRendered = await render;
      });
    },
    async fetchBlogs() {
      const { $client } = useNuxtApp();
      await Promise.all([
        $client.getEntries({
          content_type: "blogs",
          order: ["-sys.createdAt"],
        }),
      ]).then(([blogs]) => {
        this.blogs = blogs.items;
      });
    },
  },
});
