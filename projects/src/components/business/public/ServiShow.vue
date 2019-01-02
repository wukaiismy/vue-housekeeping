<template>
  <div>
    <img class="bannerImg" :src="logo" alt>
    <div class="contentBox">
      <div class="bigBox">
        <div class="title">家庭日常保洁</div>
        <img class="addLogo" src="../../../assets/buss/tuanduicankaoxian-.png" alt srcset>
      </div>
      <div class="itemBox">
        <div class="items">
          <span class="itemsNum">35</span>
          <span class="itemsw">元/小时</span>
          <span class="itemsYJ">原价60元</span>
          <span class="itemsSell">已售3000单</span>
        </div>
        <div class="Garid">
          <Garid/>
        </div>
      </div>
      <div class="itemBox">
        <div class="items">
          <span class="itemsMenber">会员</span>
          <span class="itemCharge">充返</span>
          <span class="itemsMenber">&nbsp;充500送50，充1000送150</span>
          <span class="itemsSell">
            <img class="forwardLogo" src="../../../assets/forward@2x.png" alt>
          </span>
        </div>
        <div class="Garid">
          <Garid/>
        </div>
      </div>
      <div class="itemBox">
        <div class="items BBB">
          <span class="itemsMenber">保障</span>
          <span class="itemsMenber">
            <img class="itemsImgs" src="../../../assets/65.png" alt>
            <span class="itemsImgsTitle">未服务全额退</span>
          </span>
          <span class="itemsMenber">
            <img class="itemsImgs" src="../../../assets/zijinbaozhang.png" alt>
            <span class="itemsImgsTitle">爽约包赔</span>
          </span>
          <span class="itemsMenber">
            <img class="itemsImgs" src="../../../assets/huanhuobz.png" alt>
            <span class="itemsImgsTitle">不满意重服务</span>
          </span>
        </div>
      </div>
    </div>
    <!-- 服务时间 -->
    <div class="serviceBox">
      <span>服务时间</span>
      <div class="serviceBoxRight">
        <span>
          最近可约
          <span class="serviceBoxRightTime">明天07:00</span>
        </span>
      </div>
      <img class="serviceBoxForwardLogo" src="../../../assets/forward@2x.png" alt>
    </div>
    <!-- 服务内容 -->
    <div class="serviceContentBox">
      <span>服务内容:</span>
      <p class="ppp">1.3小时起拍，不含擦玻璃，保洁人员上门携带清洁工具。</p>
      <p class="ppp">2.没人按每小时收费，此服务为1人费用，如需两人服务，请拍2笔订单，依次类推。</p>
      <p class="ppp">3.请填写详细地址以便精确定位。</p>

      <!-- <div class="gaird1"></div> -->
    </div>
    <div class="buttonBoxs"></div>
    <!-- 底部菜单 -->
    <div class="footNav">
      <mu-row>
        <mu-col span="4">
          <mu-row>
            <mu-col span="6" v-for="(msg, ind) in dataList" :key="ind">
              <div class="grid-cell" v-waves @click="jumpServer(ind)">
                <img class="imgServe" :src="msg.imgurl" alt>
                <div class="titleName">{{msg.msg}}</div>
              </div>
            </mu-col>
          </mu-row>
        </mu-col>
        <mu-col span="8" class="submitBox">
          <div class="submit">预约下单</div>
          <div class="submit">立即下单</div>
        </mu-col>
      </mu-row>
    </div>
  </div>
</template>

<script>
import Garid from "../../public/Garid";
import banners from "../../../assets/b2.jpg";
import waves from "@/directive/waves"; // 水波纹指令
import img1 from "../../../assets/kaixinkefu.png";
import img2 from "../../../assets/dianhua.png";
export default {
  name: "ServiShow",
  directives: {
    waves
  },
  components: {
    Garid
  },
  data() {
    return {
      logo: banners,
      dataList: [{ imgurl: img1, msg: "聊天" }, { imgurl: img2, msg: "电话" }]
    };
  },
  methods: {
    jumpServer(ind) {
      console.log(ind);
    }
  }
};
</script>

<style scoped>
.bigBox {
  width: 100%;
  padding: 0.32rem;
  /* background-color: darkcyan; */
  text-align: left;
  position: relative;
}
.bannerImg {
  width: 100%;
  height: 2.8rem;
}
.title {
  font-size: 0.32rem;
  font-weight: 700;
}
.addLogo {
  width: 0.56rem;
  position: absolute;
  top: 0.22rem;
  right: 0.62rem;
}
.contentBox {
  background-color: #fff;
  padding: 0 0 0.32rem 0;
}
.itemBox {
  width: 100%;
  height: 0.88rem;
  line-height: 0.2rem;
  /* background-color: navajowhite; */
  margin: 0rem auto;
  text-align: left;
  padding: 0.32rem;
}
.items {
  font-size: 0.24rem;
  color: red;
  position: relative;
  line-height: 100%;
}
.itemsNum {
  font-size: 0.32rem;
}
.itemsYJ {
  color: #999999;
  text-decoration: line-through;
  margin-left: 0.2rem;
}
.itemsSell {
  color: #999999;
  position: absolute;
  right: 0.02rem;
}
.Garid {
  width: 100%;
  height: 0.04rem;
  margin-top: 0.32rem;

  /* margin: 0.68rem auto; */
}
.itemsMenber {
  color: #999999;
  font-size: 0.28rem;
  margin-right: 0.1rem;
  display: inline-block;
  line-height: 0.36rem;
}
.itemCharge {
  display: inline-block;
  background-color: palevioletred;
  height: 0.36rem;
  width: 0.6rem;
  color: #fff;
  text-align: center;

  line-height: 0.36rem;
  font-size: 0.24rem;
}
.forwardLogo {
  height: 0.28rem;
}
.itemsImgs {
  /* width: 0.28rem; */
  height: 0.28rem;
  position: relative;
  top: 0.041rem;
}
.itemsImgsTitle {
  color: #999999;
  font-size: 0.2rem;
}
.BBB {
  line-height: 0.68rem;
  height: 0.88rem;
  /* background-color: palegoldenrod; */
}
.serviceBox {
  width: 100%;
  height: 0.88rem;
  background-color: #fff;
  margin: 0.22rem auto;
  line-height: 0.88rem;
  text-align: left;
  padding: 0 0 0 0.32rem;
  font-size: 0.32rem;
  font-weight: 500;
  position: relative;
}
.serviceBoxRight {
  position: absolute;
  top: 0;
  right: 0.78rem;
  font-size: 0.28rem;
}
.serviceBoxRightTime {
  color: red;
}
.serviceBoxForwardLogo {
  height: 0.28rem;
  position: absolute;
  top: 0.3rem;
  right: 0.32rem;
}
.serviceContentBox {
  width: 100%;
  background-color: #fff;
  margin: 0.22rem auto;
  padding: 0.32rem;
  text-align: left;
  font-size: 0.3rem;
}
.ppp {
  font-size: 0.24rem;
}
.gaird1 {
  width: 100%;
  border: 0.02rem solid #f9f9f9;
  margin: 0.32rem auto;
}
.footNav {
  width: 100%;
  height: 1.08rem;
  background-color: #fff;
  position: fixed;
  bottom: 0;
  /* line-height: 1.08rem; */
  border-top: #999999 solid 0.02rem;
}
.imgServe {
  margin-top: 0.12rem;
  height: 0.35rem;
}
.titleName {
  font-size: 0.22rem;
  font-family: "Microsoft YaHei";
  height: 0.2rem;
}
.footNav >>> .row,
.footNav >>> .col,
.grid-cell {
  height: 100%;
}
.submit {
  display: inline-block;
  width: 45%;
  height: 1.08rem;
  line-height: 1.08rem;
  color: #fff;
  font-size: 0.34rem;
  text-align: center;
  background-color: #ee8018;
}
.submitBox {
  /* background-color: aqua; */
  text-align: right;
}
.buttonBoxs {
  width: 100%;
  height: 1.08rem;
}
</style>