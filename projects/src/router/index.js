import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  // mode: "history", // 访问路径不带井号 需要使用 history模式
  routes: [
    {
      path: "/",
      redirect: "/Homepage",
      component: () => import("@/components/Homepage")
    }, //这个是设置默认路由

    {
      path: "/Homepage",
      name: "Homepage",
      component: () => import("@/components/Homepage"),
      meta: {
        title: "demo-主页"
      }
    },
    {
      path: "/MsgList",
      name: "MsgList",
      component: () => import("@/components/MessageWall/MsgList"),
      meta: {
        title: "demo-疯言墙"
      }
    },
    {
      path: "/NovelStory",
      name: "NovelStory",
      component: () => import("@/components/Novel/NovelStory"),
      meta: {
        title: "demo-文学小说"
      }
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("@/components/Login/Login"),
      meta: {
        title: "demo-登录"
      }
    },
    {
      path: "/Reg",
      name: "Reg",
      component: () => import("@/components/Login/Reg"),
      meta: {
        title: "demo-注册"
      }
    }
  ]
});
