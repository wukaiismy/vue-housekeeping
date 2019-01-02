<template>
  <div>
    <div class="navBox">
      <div class="Bas"></div>
      <NavBack name="快速下单" @backjump="backjump"/>
    </div>
    <div class="gaidm"></div>
    <!-- 主体内容 -->
    <div class="conentBox">
      <p class="titles">
        尊敬的至尊会员{{name}}：
        您的普通家政保洁已成功接单，请耐心等待人工上门！
      </p>
      <div class="orderNum">
        当前订单号：
        <span>122200220210001</span>
      </div>
      <div class="garids"></div>
      <!-- 下面是人员基本情况 -->
      <div class="personObj">
        <img class="personImg" src="../../assets/toux.jpg" alt>
        <div class="personName">
          接单人：
          <span>张曼玉</span>
        </div>
        <div class="personName">
          联系电话：
          <span>13540020328</span>
        </div>
        <div class="personName">
          身份证号：
          <span>511*****01</span>
        </div>
        <div class="personName">
          所属公司：
          <span>艾斯利保洁公司</span>
        </div>
        <div class="personName p1">
          综合评分：
          <span class="stard">
            <star-rate
              :value="4.2"
              :star-half="true"
              :disabled="true"
              type="star1"
              font-size="0.5rem"
            />
          </span>
        </div>
      </div>
      <div class="garids"></div>
      <!-- 倒计时 -->
      <div class="timeEnd">
        <div class="timeEndTitle">上门倒计时</div>
        <CountDown
          class="aasass"
          v-on:start_callback="countDownS_cb(1)"
          v-on:end_callback="countDownE_cb(1)"
          :currentTime="1481450110"
          :startTime="1481450110"
          :endTime="1481451115"
          :tipText="'距离开始文字1'"
          :tipTextEnd="'距离结束文字1'"
          :endText="'结束自定义文字2'"
          :dayTxt="'天'"
          :hourTxt="':'"
          :minutesTxt="':'"
          :secondsTxt="''"
        />
      </div>
      <div class="shuom">（该倒计时为预计到达时间，请以工人实际时间为准）</div>
      <div class="quxiaoBox" v-waves>取消订单</div>
      <div class="shuom">订单被接收后5分钟内可免费取消</div>
    </div>
  </div>
</template>

<script>
import NavBack from "../public/NavBack";
import StarRate from "vue-cute-rate";
import CountDown from "vue2-countdown";
import { mapGetters } from "vuex";
import waves from "@/directive/waves"; // 水波纹指令
export default {
  name: "QuickOrder",
  directives: {
    waves
  },
  components: { NavBack, StarRate, CountDown },
  computed: {
    ...mapGetters(["roles", "name", "ids", "avatar", "power"])
  },
  methods: {
    backjump() {
      this.$router.push({
        path: "/"
      });
    },
    countDownS_cb(x) {
      console.log(x);
    },
    countDownE_cb(x) {
      console.log(x);
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
.conentBox {
  width: 95%;
  padding: 0.32rem;
  margin: 0.32rem auto;
  background-color: #fff;
  color: #666666;
  /* min-height: 5rem; */
}
.titles {
  font-size: 0.32rem;
  text-align: left;
  text-indent: 2em;
  /* font-family: SimSun; */
}
.orderNum {
  margin: 0.22rem auto;
  font-size: 0.32rem;
  /* background-color: #ee8018; */
}
.orderNum span {
  color: #333333;
}
.garids {
  width: 100%;
  border: 0.02rem solid #f9f9f9;
}
.personObj {
  width: 100%;
  padding: 0.32rem 0.32rem 0 0.32rem;
}
.p1 {
  /* background-color: palegoldenrod; */
  height: 1rem;
}
.personImg {
  width: 2.4rem;
}
.personName {
  text-align: left;
  width: 80%;
  font-size: 0.32rem;
  color: #666666;
  margin-top: 0.12rem;
  position: relative;
  left: 1rem;
  top: 0.32rem;
}
.stard {
  display: inline-block;
  /* background-color: palegoldenrod; */
  height: 0.88rem;
  line-height: 0.88rem;
  position: relative;
  top: -0.91rem;
  left: 1.5rem;
}
.timeEnd {
  width: 100%;
  height: 2rem;
  /* background-color: palegoldenrod; */
  padding: 0.32rem;
  position: relative;
}
.timeEndTitle {
  font-size: 0.36rem;
  /* padding-bottom: 0.32rem; */
}
.aasass {
  font-size: 0.48rem;
  color: #ee8018;
  background: linear-gradient(limegreen, transparent),
    linear-gradient(90deg, skyblue, transparent),
    linear-gradient(-90deg, coral, transparent);
  background-blend-mode: screen;
  width: 4rem;
  text-align: center;
  margin: 0.32rem auto 0.1rem;
}
.shuom {
  font-size: 0.22rem;
  color: #999999;
}
.quxiaoBox {
  width: 5rem;
  height: 0.88rem;
  font-size: 0.38rem;
  color: white;
  line-height: 0.88rem;
  background-color: #ee8018;
  margin: 0.32rem auto 0.1rem;
}
</style>