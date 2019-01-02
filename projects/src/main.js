// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import router from "./router";
import Cookies from "js-cookie";
import axios from "axios";
import { post, get, del, put } from "./httpConfig/http";
import VueLazyLoad from "vue-lazyload";
import vueTouch from "kim-vue-touch";
//定义全局变量
Vue.prototype.$post = post;
Vue.prototype.$get = get;
Vue.prototype.$del = del;
Vue.prototype.$put = put;
import $ from "jquery";
import store from "./store";
import "./permission";
import MuseUI from "muse-ui";
import vueg from "vueg";
import "vueg/css/transition-min.css";
import "muse-ui/dist/muse-ui.css";
import "muse-ui-loading/dist/muse-ui-loading.css"; // load css
import Loading from "muse-ui-loading";
import * as NumFormat from "./common/filters/NumFormat";
Vue.use(MuseUI);
Vue.use(vueg, router);
Vue.use(Loading);
Vue.use(vueTouch);
Vue.use(VueLazyLoad, {
  preLoad: 1.3,
  error: require("../static/cw.jpg"), //请求失败后显示的图片"../static/cuowu.gif",
  loading: require("../static/jiazai.gif"), //"../static/jiazai.gif"
  attempt: 1 // 加载图片数量
});
Vue.config.productionTip = false;

Object.keys(NumFormat).forEach(key => {
  Vue.filter(key, NumFormat[key]);
});
/* eslint-disable no-new */
new Vue({
  el: "#app",
  router,
  store,
  components: { App },
  template: "<App/>"
});
