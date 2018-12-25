<template>
  <div class="box">
    <!-- 这是注册页面 -->
    <div class="navBox">
      <div class="Bas"></div>
      <NavBack name="注册" @backjump="backjump"/>
    </div>
    <div class="gaidm"></div>
    <div class="logoBox">
      <!-- <img class="logoImg" src="../../assets/9.jpg" alt> -->
    </div>
    <div class="loginShow">
      <!-- 该组件是注册组件 -->
      <div class="telShow">
        <!-- 手机输入 -->
        <LoginPhoto @photo="photo" ref="photomsg"/>
        <br>
        <!-- 验证码 -->
        <Yzm @yzms="yzms" ref="yam" @warmingMsg="warmingMsg"/>
        <br>
        <!-- 密码输入 -->
        <Pswd @pswd="pswd" name="输入密码"/>
        <br>
        <!-- 密码确认 -->
        <Pswd @pswd="pswd" name="再次输入" ref="chang1"/>
        <!-- 登录按钮 -->
        <br>
        <div>
          <mu-button class="sumbit" color="success" @click="submit">立即注册</mu-button>
        </div>
      </div>
      <!-- 底部的显示 -->
      <div class="regs">
        <span>已有账号？</span>
        <span class="reg" @click="regJump">立即登录</span>
      </div>
    </div>

    <!-- 模态框 -->
    <Motal ref="motai"/>
    <MotalFail ref="MotalFail"/>
  </div>
</template>

<script>
import NavBack from "../public/NavBack";
import LoginPhoto from "./public/LoginPhoto";
import Pswd from "./public/Pswd";
import Yzm from "./public/Yzm";
import Motal from "./public/Motal";
import MotalFail from "./public/MotalFail";
export default {
  name: "Reg",
  data() {
    return {
      tel: "",
      psword: "",
      rePsword: "",
      yzm: ""
    };
  },
  methods: {
    backjump() {
      this.$router.push({
        path: "/Login"
      });
    },
    //输入手机传值
    photo(data) {
      console.log(data);
      this.tel = data;
      // 将输入的手机号传入验证码组件
      this.$refs.yam.getTel(data);
    },
    //输入验证码传值
    yzms(data) {
      console.log(data);
      this.yzm = data;
    },
    //错误提示
    warmingMsg() {
      this.$refs.photomsg.tostal();
    },
    //输入密码传值
    pswd(data) {
      console.log(data);
      if (data.name == "输入密码") {
        this.psword = data.pswd;
      } else {
        this.rePsword = data.pswd;
      }
      if (this.rePsword != this.psword) {
        this.$refs.chang1.changIsShow();
      }
    },

    submit() {
      if (
        !this.psword.length ||
        this.rePsword != this.psword ||
        !this.tel ||
        !this.yzm
      ) {
        return;
      }
      let data = { tel: this.tel, psword: this.psword, yzm: this.yzm };
      console.log(data);

      this.$post("/api/customer/register/", {
        mobile: this.tel,
        password: this.psword,
        verify_code: this.yzm
      })
        .then(res => {
          console.log(res);
          if (res.code == "200") {
            console.log("注册成功，跳转到登录页面");
            this.$refs.motai.msgs();
          } else {
            console.log("注册失败");
            this.$refs.MotalFail.msgs(res.errors);
          }
        })
        .catch(err => {
          console.log(err);
        });
    },
    regJump() {
      console.log("跳转到登录页面");
      this.$router.push({
        path: "/Login"
      });
    }
  },
  components: {
    NavBack,
    LoginPhoto,
    Pswd,
    Yzm,
    Motal,
    MotalFail
  }
};
</script>

<style scoped>
.navBox {
  height: 1.28rem;
  width: 100%;
  background-image: linear-gradient(-137deg, #ee8018 0%, #fbda61 100%);
  position: fixed;
  z-index: 100000;
}
.Bas {
  width: 100%;
  height: 0.4rem;
}
.gaidm {
  width: 100%;
  height: 1.28rem;
}
.logoBox {
  width: 100%;
  height: 3.5rem;
  position: relative;
  background: url(~@/assets/b2.jpg) no-repeat;
  background-size: cover;
  padding: 1px;
  box-sizing: border-box;
  z-index: 1;
}
.logoBox:after {
  content: "";
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: inherit;
  filter: blur(2px);
  z-index: 2;
}

.logoImg {
  width: 3rem;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  z-index: 11;
  border-radius: 50%;
}
.loginClik {
  /* background-color: aqua; */
  position: relative;
  text-align: left;
}
.imgs {
  /* background-color: #1c3672; */
  width: 2.62rem;
  height: 1.16rem;
}
.telShow {
  margin: 0.32rem auto;
}
.loginShow {
  position: relative;
  padding-top: 0.32rem;
  padding-bottom: 0.46rem;
  background-color: #f9f9f9;
}
.sumbit {
  margin-top: 0.5rem;
  background-image: linear-gradient(-137deg, #ee8018 0%, #fbda61 100%);
  width: 6.85rem;
  height: 0.88rem;
  font-size: 0.36rem;
  color: white;
  border-radius: 0.2rem;
}
.regs {
  position: relative;
  top: 0.13rem;
  text-align: left;
  padding-left: 0.32rem;
  font-size: 0.24rem;
  color: #999;
}
.reg {
  color: #1c3672;
}
</style>