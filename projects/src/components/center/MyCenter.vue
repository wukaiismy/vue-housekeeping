<template>
  <div>
    <div class="HomeBox">
      <div class="navBox">
        <div class="Bas"></div>
        <NavBack name="个人中心" @backjump="backjump"/>
      </div>
      <div class="gaidm"></div>
    </div>
    <!-- 头部 -->
    <div class="contentBox">
      <img class="myImg" src="../../assets/9.jpg" alt>
      <div class="userName">Flipped</div>
      <div class="userName navl">至尊</div>
      <div class="userName nums">135******85</div>
      <div class="msgBox">
        <mu-badge content="12" circle color="secondary">
          <mu-button icon>
            <mu-icon value="notifications" color="red"></mu-icon>
          </mu-button>
        </mu-badge>
      </div>
      <div class="setting">
        <img class="settingImg" src="../../assets/center/tiaoshi.png" alt>
      </div>
    </div>
    <!-- 主体内容 -->
    <div class="workingBox">
      <mu-row>
        <mu-col span="9">
          <mu-row>
            <mu-col span="3" v-for="(msg, ind) in dataList" :key="ind">
              <div class="grid-cell" @click="jumpServer(ind)">
                <img class="imgServe" :src="msg.imgurl" alt>
                <div class="titleName">{{msg.msg}}</div>
              </div>
            </mu-col>
          </mu-row>
        </mu-col>
        <mu-col span="3">
          <div class="grid-cell" @click="jumpServer(1)">
            <img class="imgServe" :src="dd.imgurl" alt>
            <div class="titleName">{{dd.msg}}</div>
          </div>
        </mu-col>
      </mu-row>
      <!-- 隔离带 -->
      <div class="garidBox"></div>
    </div>
    <!-- 代金券 -->
    <div class="workingBox">
      <mu-row>
        <mu-col span="4" v-for="(item, ind) in moneyList" :key="ind">
          <div class="grid-cell" @click="jumpServer(ind)">
            <div class="imgServe numss">{{item.num}}</div>
            <div class="titleName name1">{{item.msg}}</div>
          </div>
        </mu-col>
      </mu-row>
    </div>
    <!-- 技师 -->
    <div class="workingBox">
      <mu-row>
        <mu-col span="3" v-for="(items, ind) in dataLists" :key="ind">
          <div class="grid-cell" @click="jumpServer(ind)">
            <div class="imgServe numss">{{items.num}}</div>
            <div class="titleName name1">{{items.msg}}</div>
          </div>
        </mu-col>
      </mu-row>
    </div>
    <!-- 剩余的功能 -->
    <div class="workingBox LastBox">
      <mu-row>
        <mu-col span="3" v-for="(items, ind) in buyList" :key="ind">
          <div class="grid-cell" @click="jumpServer1(ind)">
            <img class="imgServe" :src="items.imgurl" alt>
            <div class="titleName name1">{{items.msg}}</div>
          </div>
        </mu-col>
      </mu-row>
      <div class="gairds"></div>
    </div>
    <div class="gesss"></div>
  </div>
</template>

<script>
import NavBack from "../public/NavBack";
import img1 from "../../assets/center/daifukuan.png";
import img2 from "../../assets/center/jinxingzhong.png";
import img3 from "../../assets/center/yiwancheng.png";
import img4 from "../../assets/center/daipingjia01.png";
import img5 from "../../assets/center/tubiaolunkuo-.png";
// 最下面的图标
import img6 from "../../assets/center/xinhaojieshouqi.png";
import img7 from "../../assets/center/liwu.png";
import img8 from "../../assets/center/dizhi.png";
import img9 from "../../assets/center/quan.png";
import img10 from "../../assets/center/tousujubao.png";
import img11 from "../../assets/center/weibiaoti12.png";
import img12 from "../../assets/center/kefu.png";
import img13 from "../../assets/center/gengduo.png";

export default {
  name: "MyCenter",
  data() {
    return {
      dataList: [
        { imgurl: img1, msg: "待付款" },
        { imgurl: img2, msg: "进行中" },
        { imgurl: img3, msg: "已完成" },
        { imgurl: img4, msg: "待评价" }
        // { imgurl: img5, msg: "疯言墙" }
      ],
      dd: { imgurl: img5, msg: "订单" },
      moneyList: [
        { num: 11, msg: "余额" },
        { num: 0, msg: "代金券" },
        { num: 0, msg: "收入" }
      ],
      dataLists: [
        { num: 1, msg: "购物车" },
        { num: 2, msg: "关注服务" },
        { num: 0, msg: "关注店铺" },
        { num: 22, msg: "关注技师" }
      ],
      buyList: [
        { imgurl: img6, msg: "我的需求" },
        { imgurl: img7, msg: "分享有礼" },
        { imgurl: img8, msg: "常用地址" },
        { imgurl: img9, msg: "领券中心" },
        { imgurl: img11, msg: "我的评价" },
        { imgurl: img12, msg: "联系客服" },
        { imgurl: img10, msg: "投诉举报" },
        { imgurl: img13, msg: "更多" }
      ]
    };
  },
  components: { NavBack },
  methods: {
    backjump() {
      this.$router.push({
        path: "/"
      });
    },
    jumpServer(ind) {
      console.log(ind);
    },
    jumpServer1(ind) {
      if (ind == 2) {
        this.$router.push({
          path: "/MyAdds"
        });
      }
    }
  }
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
.contentBox {
  background: linear-gradient(limegreen, transparent),
    linear-gradient(90deg, skyblue, transparent),
    linear-gradient(-90deg, coral, transparent);
  background-blend-mode: screen;
  width: 100%;
  height: 2.4rem;
  margin: 0rem auto;
  /* background-color: white; */
  padding: 0.32rem;
  text-align: left;
  line-height: 2.4rem;
  position: relative;
}
.myImg {
  /* width: 2rem; */
  height: 1.76rem;
}
.userName {
  font-size: 0.38rem;
  position: absolute;
  top: -0.28rem;
  left: 2.4rem;
}
.nums {
  font-size: 0.28rem;
  top: 0.48rem;
}
.navl {
  left: 4.2rem;
  top: 0.68rem;
  font-size: 0.23rem;
  width: 1rem;
  height: 0.46rem;
  text-align: center;
  line-height: 0.46rem;
  border-radius: 0.46rem;
  background-color: #ee8018;
  color: white;
}
.setting {
  font-size: 0.38rem;
  position: absolute;
  top: -0.62rem;
  right: 0.32rem;
}
.settingImg {
  width: 0.48rem;
}
.msgBox {
  /* background-color: palegoldenrod; */
  display: inline-block;
  height: 1rem;
  line-height: 1rem;
  position: absolute;
  right: 0.52rem;
  top: 1.52rem;
}
.msgBox >>> .mu-icon-button {
  width: 0.96rem;
  height: 0.96rem;
  border-radius: 50%;
  font-size: 0.48rem;
  padding: 0.24rem;
}
.msgBox >>> .mu-badge-circle {
  width: 0.48rem;
  height: 0.48rem;
}
.msgBox >>> .mu-badge-float {
  position: absolute;
  top: -0.24rem;
  right: -0.24rem;
}
.msgBox >>> .mu-badge {
  font-size: 0.2rem;
  padding: 0 0.12rem;
  line-height: 1.5;
  font-size: 0.24rem;
  border-radius: 50%;
}
.workingBox {
  width: 95%;
  height: 2rem;
  border-radius: 0.12rem;
  padding-top: 0.2rem;
  background-color: #fff;
  margin: 0.32rem auto;
  position: relative;
}
.grid-cell {
  height: 1.82rem;
  color: #666666;
}
.imgServe {
  margin-top: 0.32rem;
  height: 0.6rem;
}
.titleName {
  font-size: 0.24rem;
  font-family: "Microsoft YaHei";
  color: #666666;
}
.garidBox {
  position: absolute;
  height: 1.36rem;
  border-left: solid 0.04rem #666666;
  top: 0.32rem;
  right: 1.78rem;
}
.numss {
  font-size: 0.38rem;
  color: #f6a623;
  margin: 0.12rem auto 0.2rem;
}
.name1 {
  color: #333333;
}
.LastBox {
  height: 4rem;
}
.gesss {
  /* margin: 0.32rem auto; */
  width: 100%;
  height: 1.32rem;
  /* background-color: #333333; */
}
.gairds {
  width: 100%;
  border: 0.01rem solid #999999;
  position: absolute;
  top: 50%;
}
</style>