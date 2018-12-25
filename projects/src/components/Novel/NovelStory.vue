<template>
  <div>
    <div class="navBox">
      <div class="Bas"></div>
      <NavBack name="文学小说" @backjump="backjump"/>
    </div>
    <div class="gaidm"></div>

    <div class="allShow" @click="allShows">全部作品</div>
    <!-- 下面是具体的列表 -->
    <div class="showBigBox">
      <!-- 左边固定栏 -->
      <div class="showLightBox">
        <div
          v-for="(item, index) in titleList"
          :key="index"
          :class="selected==index?'slected':''"
          @click="jumpClass(index)"
        >{{item}}</div>
      </div>
      <!-- 右边固定栏 -->
      <div class="showRightBox">
        <div class="titleNum">共1,233,445部作品</div>
        <!-- 下面是组件展示页 -->
        <div class="contentBox">
          <!--is 特性动态绑定子组件 keep-alive 将切换出去的组件保留在内存中 -->
          <keep-alive>
            <component :is="componentId"></component>
          </keep-alive>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBack from "../public/NavBack";
import Man from "./public/Man";
import Women from "./public/Women";
import Romance from "./public/Romance";
import Published from "./public/Published";
export default {
  name: "NovelStory",
  components: { NavBack, Man, Women, Romance, Published },
  data() {
    return {
      componentId: Man,
      titleList: ["男生", "女生", "听书", "出版"],
      componentIdList: [Man, Women, Romance, Published],
      selected: 0
    };
  },
  methods: {
    backjump() {
      this.$router.push({
        path: "/"
      });
    },
    // 选择全部作品
    allShows() {
      console.log("你选择了全部的作品");
    },
    // 选择分类
    jumpClass(index) {
      this.componentId = this.componentIdList[index];
      this.selected = index;
      // 下面进行对应的Ajax请求
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
.allShow {
  color: rgb(151, 209, 211);
  font-size: 0.32rem;
  position: absolute;
  right: 0.32rem;
  top: 0.24rem;
}
.showBigBox {
  /* background-color: palegoldenrod; */
  width: 100%;
  padding: 0;
  margin: 0 auto 0.32rem;
  position: relative;
  text-align: left;
}
.showLightBox {
  width: 20%;
  /* background-color: aqua; */
  display: inline-block;
}
.showLightBox div {
  color: black;
  letter-spacing: 0.06rem;
  margin: 0.32rem auto;
  text-align: center;
  /* background-color: rgb(20, 170, 170); */
}
.showLightBox .slected {
  color: red;
}
.showRightBox {
  width: 80%;
  height: 12rem;
  border-left: 0.04rem solid #f1f1f1;
  margin-left: 0;
  display: inline-block;
  /* background-color: antiquewhite; */
  position: absolute;
  top: 0rem;
  padding: 0.1rem;
}
.titleNum {
  text-align: left;
  font-size: 0.28rem;
  height: 0.36rem;
  padding-left: 0.32rem;
  /* background-color: #ee8018; */
}
.contentBox {
  width: 100%;
  height: 95%;
  /* background-color: #fbda61; */
  overflow-y: auto;
  margin-top: 0.32rem;
  /* padding: 0.32rem; */
}
</style>