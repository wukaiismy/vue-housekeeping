<template>
  <div>
    <div class="navBox">
      <div class="Bas"></div>
      <NavBack name="家庭服务" @backjump="backjump"/>
    </div>
    <div class="gaidm"></div>
    <!-- 搜索框 -->
    <div class="bigBoxSearch">
      <mu-text-field v-model="value1"></mu-text-field>
      <div class="icon-container">
        <mu-icon value=" youtube_searched_for" color="amber" @click="searchs"></mu-icon>
      </div>
    </div>
    <!-- 下面是主体内容 -->
    <div class="bigBox">
      <!-- 下面是菜单部分 -->
      <div class="showServer">
        <mu-row>
          <mu-col span="3" v-for="(msg, ind) in dataList" :key="ind">
            <div class="grid-cell" v-waves @click="jumpServer(ind)">
              <div class="titleName" :class="selected==ind?'slected':''">{{msg}}</div>
            </div>
          </mu-col>
        </mu-row>
      </div>
      <div class="garid"></div>
      <!-- 下面是具体情况 -->
      <div class="contentBox">
        <component :is="componentId"></component>
      </div>
    </div>
  </div>
</template>

<script>
import NavBack from "../public/NavBack";
import ServiceS from "./public/Services";
import waves from "@/directive/waves"; // 水波纹指令
export default {
  name: "Service",
  directives: {
    waves
  },
  components: { NavBack, ServiceS },
  data() {
    return {
      value1: "",
      dataList: ["家庭保洁", "上门维修", "上门开锁", "搬家服务"],
      componentId: ServiceS,
      selected: 0
    };
  },
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
    // 菜单选择
    jumpServer(index) {
      console.log(index);
      this.selected = index;
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
.bigBoxSearch {
  width: 90%;
  height: 0.88rem;
  text-align: center;
  opacity: 0.7;
  filter: alpha(opacity=70); /* 针对 IE8 以及更早的版本 */
  background-color: wheat;
  border-radius: 0.22rem;
  position: relative;
  top: 0.32rem;
  left: 5%;
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
  height: 0.64rem;
  padding: 0.32rem;
}
.icon-container {
  position: absolute;
  top: 0.22rem;
  right: 0.32rem;
}
.material-icons {
  font-size: 0.48rem;
}
.bigBox {
  width: 100%;
  padding: 0.32rem;
  background-color: white;
  margin: 0.62rem auto;
  font-size: 0.34rem;
  color: #666666;
}
.slected {
  color: red;
}
.garid {
  width: 100%;
  border: 0.02rem solid #f9f9f9;
  margin: 0.32rem auto;
}
.contentBox {
  text-align: left;
  padding: 0.02rem;
}
</style>