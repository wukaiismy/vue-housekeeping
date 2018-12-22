<template>
  <div class="HomeBox">
    <!-- 这是主页 -->
    <!-- 导航 -->
    <div class="navLogin">demo</div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Homepage",
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["roles", "name", "ids", "avatar", "power"])
  },
  created() {
    console.log(666);
  },
  mounted() {},

  methods: {},
  destroyed() {},
  components: {}
};
</script>

<style scoped>
.HomeBox {
  background-color: #f9f9f9;
  width: 100%;
  /* position: fixed; */
  height: 100%;
}
.navLogin {
  font-size: 0.36rem;
  color: white;
  height: 0.88rem;
  line-height: 0.88rem;
  letter-spacing: 0.02rem;
  background-image: linear-gradient(-137deg, #142855 0%, #4553a4 100%);
}
.userShow {
  width: 100%;
  height: 1.8rem;
  position: relative;
  margin-top: 0.04rem;
  background-image: linear-gradient(-137deg, #142855 0%, #4553a4 100%);
}
.img {
  width: 1.2rem;
  height: 1.2rem;
  border-radius: 50%;
  position: absolute;
  top: 0.32rem;
  left: 0.32rem;
}
.userName {
  font-family: PingFangSC-Semibold;
  font-size: 0.36rem;
  color: #ffffff;
  width: 4.32rem;
  height: 0.5rem;
  position: absolute;
  top: 0.32rem;
  left: 1.83rem;
  height: 0.5rem;
  text-align: left;
  overflow: hidden;
  text-overflow: ellipsis;
  word-break: keep-all;
  white-space: nowrap;
}
.userId {
  font-size: 0.32rem;
  font-family: PingFangSC-Regular;
  color: #ffffff;
  position: absolute;
  top: 1.02rem;
  left: 1.83rem;
}
.setting {
  width: 0.48rem;
  height: 0.4rem;
  /* background-color: #4553a4; */
  position: absolute;
  top: 0.56rem;
  right: 0.44rem;
}
.FuSao {
  width: 100%;
  height: 1rem;
  position: relative;
  margin-top: 0.04rem;
  background-image: linear-gradient(-137deg, #142855 0%, #4553a4 100%);
}
.fuS {
  width: 3rem;
  height: 1rem;
  display: flex;
  align-items: center;
}
.fu {
  position: absolute;
  left: 0.32rem;
}
.sao {
  position: absolute;
  left: 4.2rem;
}
.gard {
  position: absolute;
  top: 0.26rem;
  left: 3.76rem;
  height: 0.48rem;
  border: 1px solid #ffffff;
}
.fuImg {
  width: 0.48rem;
  align-items: center;
  margin-left: 0.5rem;
}
.fuN {
  margin-left: 0.2rem;
  font-size: 0.28rem;
  color: #ffffff;
}
.Asset {
  margin-top: 0.32rem;
  width: 100%;
  /* height: 8.52rem; */
  height: 6.9rem;
  background-color: white;
}
.showAll {
  width: 100%;
  height: 2.14rem;
  position: relative;
  /* background-color: rgb(33, 41, 41); */
}
.showNav {
  width: 100%;
  height: 0.4rem;
  display: flex;
  align-items: center;
  position: relative;
  top: 0.32rem;
  /* background-color: rgb(33, 41, 41); */
}
.zz {
  margin-left: 0.32rem;
  font-size: 0.28rem;
  color: #333333;
}
.zz span {
  font-size: 0.24rem;
  color: #999999;
}

.zzImg1 {
  width: 0.48rem;
  position: absolute;
  right: 0.32rem;
}
.showMoney {
  width: 100%;
  height: 0.56rem;
  /* background-color: aqua; */
  position: relative;
  top: 0.4rem;
  font-size: 0.4rem;
  color: #1c3672;
  text-align: left;
  padding-left: 0.32rem;
}
.timeShow {
  width: 100%;
  height: 0.34rem;
  font-size: 0.24rem;
  color: #999999;
  text-align: left;
  padding-left: 0.32rem;
  position: relative;
  top: 0.56rem;
  /* background-color: aqua; */
}
.grads {
  width: 7.18rem;
  margin-left: 0.32rem;
}

.dan1 {
  position: relative;
  text-align: left;
  width: 4.8rem;
}
.danb {
  font-size: 0.28rem;
  color: #999999;
}
.danMoney {
  font-size: 0.36rem;
  color: #1c3672;
}
.moneyUse {
  width: 100%;
  height: 1.28rem;
  display: flex;
  align-items: center;
  padding-left: 0.32rem;
  position: relative;
}
.moneys {
  width: 1.4rem;
  height: 0.6rem;
  border-radius: 2rem;
  line-height: 0.6rem;
  font-size: 0.28rem;
  color: #1c3672;
  border: 0.02rem solid #4553a4;
  position: absolute;
  right: 2.24rem;
}
.chong {
  width: 1.6rem;
  background-color: #d0ddf5;
  right: 0.32rem;
  color: #1c3672;
  border: none;
}
.chong img {
  width: 0.3rem;
  margin-right: 0.2rem;
  position: relative;
  top: 0.04rem;
}
.centerServe {
  margin: 0.32rem 0 0.9rem 0;
  width: 100%;
  height: 4.82rem;
  background-color: #fff;
}
.buttoms {
  height: 0.1rem;
  width: 100%;
}
.serveTitlie {
  width: 100%;
  height: 1.08rem;
  line-height: 1.08rem;
  text-align: left;
  font-size: 0.32rem;
  padding-left: 0.32rem;
  color: #333333;
}
.showServer {
  margin-top: 0.32rem;
}
.grid-cell {
  height: 1.82rem;
  font-size: 0.28rem;
  color: #666666;
}
.imgServe {
  height: 0.6rem;
}
.grad1 {
  width: 6.86rem;
  position: relative;
  left: 0.32rem;
  top: -2.2rem;
}
.grad2 {
  width: 0.02rem;
  height: 2.8rem;
  position: relative;
  left: 2.48rem;
  top: -3.42rem;
}
.grad3 {
  width: 0.02rem;
  height: 2.8rem;
  position: relative;
  left: 5rem;
  top: -6.22rem;
}
.showDeal {
  width: 6.86rem;
  /* height: 4.76rem;*/
  height: 3.16rem;
  background-color: #f9f9f9;
  margin: 0.1rem 0 0 0.32rem;
  position: relative;
}
.deal {
  font-size: 0.28rem;
  color: #999999;
  position: absolute;
  top: 0.32rem;
  left: 0.32rem;
}

.numShow {
  font-size: 0.4rem;
  color: #666666;
  position: absolute;
  left: 0.32rem;
  top: 0.92rem;
}
.d2 {
  left: 3.42rem;
}
.n2 {
  color: #333333;
  left: 3.42rem;
}
.d3 {
  top: 1.8rem;
}
.n3 {
  top: 2.4rem;
}
.d4 {
  top: 1.8rem;
  left: 3.42rem;
}
.n4 {
  color: #333333;
  top: 2.4rem;
  left: 3.42rem;
}
.d5 {
  top: 3.28rem;
}
.n5 {
  top: 3.84rem;
}
.d6 {
  top: 3.28rem;
  left: 3.42rem;
}
.n6 {
  color: #1c3672;
  top: 3.84rem;
  left: 3.42rem;
}
</style>