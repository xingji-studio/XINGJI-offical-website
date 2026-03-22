import App from "./App.vue";
import routes from "./router";
import { ViteSSG } from "vite-ssg";
import "./style.css";

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  
  // 启用路由守卫
  ctx.router.beforeEach((to, _from, next) => {
    const { title, description } = to.meta;
    const defaultTitle = "星际工作室";
    const defaultDescription = "星际工作室官方网站";
    if (typeof window !== "undefined") {
      document.title = typeof title === "string" ? title : defaultTitle;

      const descriptionElement = document.querySelector(
        'head meta[name="description"]'
      );

      descriptionElement?.setAttribute(
        "content",
        typeof description === "string" ? description : defaultDescription
      );
    }
    next();
  });
});

// const app = createApp(App)
// app.use(router)
// app.mount('#app')
