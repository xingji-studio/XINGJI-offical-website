import App from "./App.vue";
import routes from "./router";
import { ViteSSG } from "vite-ssg";
import "./style.css";
import { provideAuth, authStore } from "./stores/auth";

export const createApp = ViteSSG(App, { routes }, (ctx) => {
  // 提供认证状态管理
  provideAuth();
  
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
  
  // 在应用挂载后初始化认证状态
  if (typeof window !== "undefined") {
    authStore.init();
  }
});

// const app = createApp(App)
// app.use(router)
// app.mount('#app')
