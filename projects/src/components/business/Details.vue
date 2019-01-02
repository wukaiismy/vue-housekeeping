<template>
  <div>
    <div class="navBox">
      <div class="Bas"></div>
      <div class="navLogin">
        <img class="backLogo" src="../../assets/fanhui.png" @click="backJump" alt>
        <div class="titleBox">
          <mu-row>
            <mu-col
              span="4"
              v-for="(item, index) in titleList"
              :key="index"
              @click="choosed(index)"
            >
              <span :class="slecteds==index?'slected':''">{{item}}</span>
            </mu-col>
          </mu-row>
        </div>
        <!-- 右边的菜单 -->
        <div class="logosBox">
          <img class="logos" src="../../assets/buss/fenxiang.png" alt>
          <img class="logos" src="../../assets/buss/caidan.png" alt>
        </div>
      </div>
    </div>
    <div class="gaidm"></div>
    <!-- 下面是主体部分 -->
    <!-- 下面是具体情况 -->
    <div class="contentBox">
      <component :is="componentId"></component>
    </div>
  </div>
</template>

<script>
import NavBack from "../public/NavBack";
import ServiShow from "./public/ServiShow";
import ServiDetail from "./public/ServiDetail";
import Fbw from "./public/Fbw";
import waves from "@/directive/waves"; // 水波纹指令
export default {
  name: "Details",
  directives: {
    waves
  },
  components: { NavBack, ServiShow, ServiDetail, Fbw },
  data() {
    return {
      slecteds: 0,
      titleList: ["服务", "详情", "评价"],
      componentId: ServiShow
    };
  },
  methods: {
    backJump() {
      this.$router.go(-1);
    },
    choosed(ind) {
      this.slecteds = ind;
      if (ind == 0) {
        this.componentId = ServiShow;
      } else if (ind == 1) {
        this.componentId = ServiDetail;
      } else if (ind == 2) {
        this.componentId = Fbw;
      }
      //   console.log(ind);
    }
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
.navLogin {
  font-size: 0.36rem;
  color: white;
  height: 0.88rem;

  line-height: 0.88rem;
}
.backLogo {
  width: 0.4rem;
  position: absolute;
  top: 0.64rem;
  left: 0.32rem;
}
.titleBox {
  width: 55%;
  height: 100%;
  /* background-color: rgb(32, 14, 134); */
  margin: 0 auto;
}
.titleBox span {
  font-size: 0.32rem;
  display: inline-block;
  padding: 0 0.15rem 0 0.15rem;
  color: white;
  box-sizing: border-box;
}
.slected {
  border-bottom: 0.04rem solid #ee8018;
}
.logosBox {
  display: inline-block;
  /* background-color: aqua; */
  position: absolute;
  top: 0.4rem;
  right: 0.32rem;
}
.logos {
  width: 0.32rem;

  margin-left: 0.14rem;
}
.contentBox {
  margin: 0.02rem auto;
}
</style>