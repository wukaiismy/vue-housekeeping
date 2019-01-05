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
        title: "demo-主页",
        navShow: true
      }
    },
    {
      path: "/MsgList",
      name: "MsgList",
      component: () => import("@/components/MessageWall/MsgList"),
      meta: {
        title: "demo-疯言墙",
        navShow: false
      }
    },
    {
      path: "/NovelStory",
      name: "NovelStory",
      component: () => import("@/components/Novel/NovelStory"),
      meta: { navShow: false, title: "demo-文学小说" }
    },
    {
      path: "/Login",
      name: "Login",
      component: () => import("@/components/Login/Login"),
      meta: { navShow: false, title: "demo-登录" }
    },
    {
      path: "/Reg",
      name: "Reg",
      component: () => import("@/components/Login/Reg"),
      meta: { navShow: false, title: "demo-注册" }
    },
    {
      path: "/MyCenter",
      name: "MyCenter",
      component: () => import("@/components/center/MyCenter"),
      meta: {
        title: "demo-我的",
        navShow: true
      }
    },
    {
      path: "/SubmitOrders",
      name: "SubmitOrders",
      component: () => import("@/components/business/SubmitOrders"),
      meta: {
        title: "demo-快速下单",
        navShow: false
      }
    },
    {
      path: "/QuickOrder",
      name: "QuickOrder",
      component: () => import("@/components/business/QuickOrder"),
      meta: {
        title: "demo-快速下单",
        navShow: false
      }
    },
    {
      path: "/Service",
      name: "Service",
      component: () => import("@/components/business/Service"),
      meta: {
        title: "demo-家庭服务",
        navShow: false
      }
    },
    {
      path: "/MoreMsg",
      name: "MoreMsg",
      component: () => import("@/components/business/MoreMsg"),
      meta: {
        title: "demo-more",
        navShow: false
      }
    },
    {
      path: "/Details",
      name: "Details",
      component: () => import("@/components/business/Details"),
      meta: {
        title: "demo-Details",
        navShow: false
      }
    },
    {
      path: "/FriendList",
      name: "FriendList",
      component: () => import("@/components/firends/FriendList"),
      meta: {
        title: "demo-好友列表",
        navShow: true
      }
    },
    {
      path: "/HomeBBs",
      name: "HomeBBs",
      component: () => import("@/components/community/HomeBBs"),
      meta: {
        title: "demo-社区",
        navShow: false
      }
    },
    {
      path: "/MapDemo",
      name: "MapDemo",
      component: () => import("@/components/maps/MapDemo"),
      meta: {
        title: "demo-MapDemo",
        navShow: false
      }
    },
    {
      path: "/MyAdds",
      name: "MyAdds",
      component: () => import("@/components/maps/MyAdds"),
      meta: {
        title: "demo-MyAdds",
        navShow: false
      }
    }
  ]
});
