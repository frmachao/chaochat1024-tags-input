import { defineConfig } from "umi";

export default defineConfig({
  nodeModulesTransform: {
    type: "none",
  },
  routes: [
    {
      path: "/",
      component: "@/layouts/index",
      routes: [
        { path: "/page1", component: "@/pages/page1/index" },
        { path: "/page2", component: "@/pages/page2/index" },
      ],
    },
  ],
  fastRefresh: {},
});
