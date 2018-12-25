<template>
  <div>
    <div class="HomeBox">
      <div class="navBox">
        <div class="Bas"></div>
        <NavBack name="首页" @backjump="backjump"/>
      </div>
      <div class="gaidm"></div>
      <!-- 主体内容 -->
      <div class="searchBox">
        <mu-carousel hide-controls>
          <mu-carousel-item v-for="(item, index) in bannerList" :key="index">
            <img :src="item" class="imgBanners">
          </mu-carousel-item>
        </mu-carousel>
      </div>
      <!-- 搜索框 -->
      <div class="bigBoxSearch">
        <mu-text-field v-model="value1"></mu-text-field>
        <div class="icon-container">
          <mu-icon value=" youtube_searched_for" color="amber" @click="searchs"></mu-icon>
        </div>
      </div>
      <!-- 快速下单按钮 -->
      <div class="quekBox" v-waves @click="jumpMsg">快速下单</div>
      <!-- 下面是菜单部分 -->
      <div class="showServer">
        <mu-row>
          <mu-col span="4" v-for="(msg, ind) in dataList" :key="ind">
            <div class="grid-cell" v-waves @click="jumpServer(ind)">
              <img class="imgServe" :src="msg.imgurl" alt>
              <div class="titleName">{{msg.msg}}</div>
            </div>
          </mu-col>
        </mu-row>
      </div>
      <!-- 灰色线 -->
      <div class="gaids"></div>
      <div class="anotherBox">
        <div class="rightTitle">生活新闻</div>
        <div class="lightTitle">附近分享</div>
        <div class="garid1"></div>
      </div>
    </div>
    <div class="gaids ga"></div>
    <!-- 底部组件 -->
    <Foot/>
  </div>
</template>

<script>
import carouselImg1 from "../assets/B1.jpg";
import carouselImg2 from "../assets/b2.jpg";
import carouselImg3 from "../assets/b3.jpg";
import img1 from "../assets/home/fuwuxiangmu.png";
import img2 from "../assets/home/shequ.png";
import img3 from "../assets/home/baike.png";
import img4 from "../assets/home/wenxue.png";
import img5 from "../assets/home/liuyanban.png";
import img6 from "../assets/home/more.png";
import Foot from "./public/FootNavigation";
import waves from "@/directive/waves"; // 水波纹指令
import NavBack from "./public/NavBack";
import { mapGetters } from "vuex";

export default {
  name: "Homepage",
  directives: {
    waves
  },
  data() {
    return {
      value1: "",
      bannerList: [carouselImg1, carouselImg2, carouselImg3],

      dataList: [
        { imgurl: img1, msg: "家庭服务" },
        { imgurl: img2, msg: "囧囧社区" },
        { imgurl: img3, msg: "囧事百科" },
        { imgurl: img4, msg: "文学港湾" },
        { imgurl: img5, msg: "疯言墙" },
        { imgurl: img6, msg: "更多" }
      ]
    };
  },
  computed: {
    ...mapGetters(["roles", "name", "ids", "avatar", "power"])
  },
  created() {},
  mounted() {},

  methods: {
    backjump() {
      this.$router.push({
        path: "/"
      });
    },
    searchs() {
      console.log("你点击了搜索按钮");
      console.log(this.value1);
    },
    // 快速下单
    jumpMsg() {
      console.log("你点击了快速下单");
    },
    // 菜单选择
    jumpServer(index) {
      console.log(index);
      // 如果用户未注册就无法点击
      if (this.roles) {
        return;
      }
      if (index == 0) {
        // this.$router.push({
        //   path: "/AddCards"
        // });
      } else if (index == 2) {
        // this.$router.push({
        //   path: "/SaleAfter"
        // });
      } else if (index == 3) {
        this.$router.push({
          path: "/NovelStory"
        });
      } else if (index == 4) {
        this.$router.push({
          path: "/MsgList"
        });
      }
    }
  },
  destroyed() {},
  components: { Foot, NavBack }
};
</script>

<style scoped>
.HomeBox {
  background-color: #f9f9f9;
  width: 100%;
  /* position: fixed; */
  height: 100%;
}
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
  letter-spacing: 0.02rem;
  /* background-color: #ee8018; */
  width: 100%;
}
.searchBox {
  background-color: #f1f1f1;
  width: 100%;
  height: 3.82rem;
}
.mu-input.has-icon {
  padding-left: 1.12rem;
}
.mu-input {
  font-size: 0.32rem;
  width: 5.12rem;
}
.mu-carousel {
  height: 3.82rem;
  width: 100%;
  position: relative;
  overflow: hidden;
}
.imgBanners {
  width: 100%;
  opacity: 0.5;
  filter: alpha(opacity=50); /* 针对 IE8 以及更早的版本 */
}
.bigBoxSearch {
  width: 90%;
  height: 1.3rem;
  text-align: center;
  opacity: 0.7;
  filter: alpha(opacity=70); /* 针对 IE8 以及更早的版本 */
  background-color: white;
  position: fixed;
  top: 1.42rem;
  left: 5%;
  border-radius: 0.1rem;
}
.mu-input {
  min-height: 1.1rem;
  display: inline-block;
  position: relative;
  color: rgba(0, 0, 0, 0.54);
  margin-bottom: 0.1rem;
  padding-bottom: 0.1rem;
  padding-top: 0.08rem;
  margin-left: -0.5rem;
  text-align: left;
}
.bigBoxSearch >>> .mu-text-field-input {
  height: 0.84rem;
  padding: 0.32rem;
}
.icon-container {
  position: absolute;
  top: 0.32rem;
  right: 0.32rem;
}
.material-icons {
  font-size: 0.58rem;
}
.quekBox {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background-image: linear-gradient(-137deg, #ee8018 0%, #fbda61 100%);
  font-size: 0.38rem;
  color: white;
  text-align: center;
  padding: 0.5rem;
  position: relative;
  opacity: 1;
  z-index: 10000;
  top: -1rem;
  left: 37.5%;
  box-shadow: 0 0 0.08rem 0 rgba(0, 0, 0, 0.3);
  /* box-shadow: 0px 0px 0.06rem 0.06rem #c4c1c1; */
}
.flex-wrapper {
  width: 100%;
  height: 56px;
  margin-top: 8px;
}
.flex-demo {
  width: 200px;
  height: 32px;
  background-color: #e0e0e0;
  text-align: center;
  line-height: 32px;
  margin-left: 8px;
}
.showServer {
  margin-top: -0.42rem;
}
.grid-cell {
  height: 1.82rem;

  color: #666666;
}
.imgServe {
  height: 0.6rem;
}
.titleName {
  font-size: 0.28rem;
  font-family: "Microsoft YaHei";
}
.gaids {
  width: 100%;
  height: 0.48rem;
  background-color: #fff;
}
.ga {
  margin: 0.6rem;
}
.anotherBox {
  width: 100%;
  height: 0.88rem;
  position: relative;
  /* margin-bottom: 1.3rem; */
  color: #ee8018;
  font-size: 0.36rem;
  text-align: center;
  line-height: 0.88rem;
}
.rightTitle,
.lightTitle {
  width: 49%;
  display: inline-block;
}
.garid1 {
  position: absolute;
  border: 0.02rem solid #ee8018;
  height: 0.8rem;
  left: 50%;
  top: 0.051rem;
}
</style>