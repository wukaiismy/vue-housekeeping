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
      </div>
    </div>
    <div class="gaidm"></div>
    <!-- 下面是具体情况 -->
    <div class="contentBox">
      <component :is="componentId"></component>
    </div>
    <!-- 刷新按钮 -->
    <div class="refrenchBox" v-loading="loading1" data-mu-loading-size="24" @click="lodings">
      <img src="../../assets/shuaxin.png" alt>
    </div>
  </div>
</template>

<script>
import NavBack from "../public/NavBack";
import Recommend from "./public/Recommend";
import Focus from "./public/Focus";
import Videos from "./public/Videos";
import waves from "@/directive/waves"; // 水波纹指令
export default {
  name: "HomeBBs",
  directives: {
    waves
  },
  data() {
    return {
      slecteds: 1,
      loading1: false,
      titleList: ["关注", "推荐", "视频"],
      componentId: Recommend
    };
  },
  methods: {
    backJump() {
      this.$router.go(-1);
    },
    lodings() {
      this.loading1 = true;
      setTimeout(() => {
        this.loading1 = false;
      }, 3000);
    },
    choosed(ind) {
      this.slecteds = ind;
      if (ind == 0) {
        this.componentId = Focus;
      } else if (ind == 1) {
        this.componentId = Recommend;
      } else if (ind == 2) {
        this.componentId = Videos;
      }
      //   console.log(ind);
    }
  },
  components: { NavBack }
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
  /* border-bottom: 0.04rem solid #ee8018; */
  color: rgb(235, 47, 14) !important ;
}
.contentBox {
  margin: 0.32rem auto;
  /* background-color: #fbda61; */
}
.refrenchBox {
  position: fixed;
  z-index: 10000;
  bottom: 1rem;
  right: 0.32rem;
  background-color: white;
  line-height: 100%;
  border-radius: 50%;
  -moz-box-shadow: 0px 0px 0.04rem #666666;
  -webkit-box-shadow: 0px 0px 0.04rem #666666;
  box-shadow: 0px 0px 0.04rem #666666;
}
.refrenchBox img {
  width: 0.64rem;
}
</style>