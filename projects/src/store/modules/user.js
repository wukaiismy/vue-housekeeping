import Cookies from "js-cookie";
import { getToken, setToken, removeToken } from "@/httpConfig/auth";
import axios from "axios";
const user = {
  state: {
    user: "",
    status: "",
    code: "",
    token: getToken(),
    name: "代号9527",
    ids: "13540020355",
    tel: "",
    admin_id: "",
    avatar:
      "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif",
    introduction: "",
    // roles: true,
    roles: false,
    power: "",
    setting: {
      articlePlatform: []
    }
  },
  mutations: {
    SET_CODE: (state, code) => {
      state.code = code;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_INTRODUCTION: (state, introduction) => {
      state.introduction = introduction;
    },
    SET_SETTING: (state, setting) => {
      state.setting = setting;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_AVATAR: (state, avatar) => {
      state.avatar = avatar;
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles;
    },
    SET_ID: (state, ids) => {
      state.ids = ids;
    },
    SET_ADMINID: (state, ID) => {
      state.admin_id = ID;
    },
    SET_TEL: (state, tel) => {
      state.tel = tel;
    },
    SET_POWER: (state, power) => {
      state.power = power;
    }
  },
  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      console.log(userInfo);
      return new Promise((resolve, reject) => {
        var datalist = {};
        var url = "";
        if (userInfo.types == "1") {
          datalist = {
            mobile: userInfo.mobile,
            verify_code: userInfo.verify_code
          };
          url = "/api/merchant/login_code/";
        } else if (userInfo.types == "2") {
          datalist = { mobile: userInfo.mobile, password: userInfo.password };
          url = "/api/merchant/login/";
        }
        axios
          .post(url, datalist)
          .then(response => {
            console.log("token信息");
            console.log(response);
            if (response.data.code == "200") {
              const data = response.data.token;
              var token = "Bearer " + data;
              console.log(data);
              setToken(token);
              commit("SET_TOKEN", token);
              resolve(response);
            } else {
              console.log("token信息有误，重新跳转到登录页面");
              resolve(response);
            }
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      var url = "/api/merchant/info/";
      return new Promise((resolve, reject) => {
        axios
          .get(url)
          .then(response => {
            console.log("+++++商户信息+++++++++");
            console.log(response);

            //如果用户信息存在
            if (response.data.admin.status == "PASS") {
              const data = response.data;
              console.log(data);
              commit("SET_NAME", data.admin.name);
              commit("SET_ADMINID", data.admin.id);
              commit("SET_ID", data.admin.merchant_id);
              commit("SET_TEL", data.admin.mobile);
              commit("SET_AVATAR", data.info.merchant_logo);
              commit("SET_POWER", data.merchant.settlement_method);
              commit("SET_ROLES", false);
            } else {
              //如果用户信息不存在
              // console.log("用户未注册");
              commit("SET_NAME", data.admin.name);
              commit("SET_ADMINID", data.admin.id);
              commit("SET_ID", data.admin.merchant_id);
              commit("SET_TEL", data.admin.mobile);
              commit("SET_AVATAR", data.info.merchant_logo);
              commit("SET_POWER", data.merchant.settlement_method);
              // commit("SET_ROLES", true);
            }
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        axios
          .get(state.token)
          .then(() => {
            commit("SET_TOKEN", "");
            removeToken();
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },
    //修改密码退出到首页
    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit("SET_TOKEN", "");
        removeToken();
        resolve();
      });
    },
    //个人中心修改昵称等
    changeNames({ commit }, userInfo) {
      var urlName = "/api/merchant/info/";
      console.log(userInfo);
      return new Promise((resolve, reject) => {
        axios
          .get(urlName, userInfo)
          .then(response => {
            commit("SET_NAME", response.name);
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    }
  }
};

export default user;
