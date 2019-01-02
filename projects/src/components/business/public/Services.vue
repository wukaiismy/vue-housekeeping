<template>
  <div class="serviceBox">
    <img class="contentLogo" src="../../../assets/toux.jpg" alt>
    <div class="showContent">服务人员：{{dataList.name}}</div>
    <div class="showContent s1">服务类型：{{dataList.type}}</div>
    <div class="showContent s2">服务地址：{{dataList.add}}</div>
    <div class="showContent s3">所属公司：{{dataList.merchant}}</div>
    <div class="showContent s4">历史服务评分：{{dataList.num}}</div>
    <div class="lastBox">
      <span>联系电话：{{dataList.tel}}</span>
      <span v-waves @click="detailsJump">服务详情</span>
      <span v-waves @click="moreMsg">更多</span>
    </div>
  </div>
</template>

<script>
import waves from "@/directive/waves"; // 水波纹指令
export default {
  name: "Services",
  directives: {
    waves
  },
  data() {
    return {
      dataList: {
        name: "张小花",
        type: "家政服务",
        add: "铜锣湾",
        merchant: "艾莉丝服务公司",
        num: "4.9",
        tel: "135-8888-8788"
      }
    };
  },
  methods: {
    detailsJump() {
      // console.log("跳转到详情");
      this.$router.push({
        path: "/Details"
      });
    },
    moreMsg() {
      // console.log("更多介绍");
      this.$router.push({
        path: "/MoreMsg"
      });
    }
  }
};
</script>

<style scoped>
.serviceBox {
  width: 100%;
  padding: 0.32rem 0.32rem 0.1rem 0.32rem;
  background-color: #999999;
  position: relative;
  border-radius: 0.08rem;
  color: white;
}
.contentLogo {
  width: 2rem;
}
.showContent {
  display: inline-block;
  position: absolute;
  left: 2.72rem;
  top: 0.32rem;
  font-size: 0.24rem;
}
.s1 {
  top: 0.72rem;
}
.s2 {
  top: 1.12rem;
}
.s3 {
  top: 1.52rem;
}
.s4 {
  top: 1.92rem;
}
.lastBox {
  width: 100%;
  height: 0.66rem;
  /* background-color: blanchedalmond; */
  padding-left: 0.32rem;
}
.lastBox span {
  font-size: 0.24rem;
  margin-right: 0.32rem;
}
</style>