<template>
  <div>
    <div class="navBox">
      <div class="Bas"></div>
      <NavBack name="快速下单" @backjump="backjump"/>
    </div>
    <div class="gaidm"></div>
    <!-- 主体内容 -->
    <div class="contentBigBox">
      <div class="contentItem">
        <span class="contentItemTitle">联系客户：</span>
        <span class="contentItemAddress">{{dataList.name}}</span>
      </div>
      <div class="contentItem">
        <span class="contentItemTitle">联系方式：</span>
        <span class="contentItemAddress">{{dataList.tel}}</span>
      </div>
      <div class="contentItem" @click="openBotttomSheet">
        <span class="contentItemTitle">服务地址：</span>
        <span class="contentItemAddress">{{dataList.add}}</span>
        <img class="rightBoxLocalForward" src="../../assets/forward@2x.png" alt>
      </div>
    </div>
    <!-- 订单信息 -->
    <div class="orderBox">
      <div class="orderBoxItem">
        <img class="orderBoxItemLogo" src="../../assets/iconfontzhizuobiaozhun33.png" alt>
        <span class="titless">准时宝</span>
        <img class="orderBoxItemLogo dd" src="../../assets/49.png" alt>
        <div class="shuom">商家已为您投保，保洁人员到达延误10分钟，赔3元；延误20分钟，赔6元；延误30分钟，赔12元</div>
        <div class="garids"></div>
      </div>
      <div class="orderBoxItem">
        <img class="orderBoxItemLogo" src="../../assets/baohu.png" alt>
        <span class="titless">放心服务</span>
        <img class="orderBoxItemLogo dd" src="../../assets/49.png" alt>
        <div class="shuom">商家已为您投保放心服务，安全,规范，请您放心下单</div>
        <div class="garids"></div>
      </div>
      <div class="orderBoxItem">
        <img class="orderBoxItemLogo" src="../../assets/18.png" alt>
        <span class="titless">号码保护</span>
        <img class="orderBoxItemLogo dd" src="../../assets/49.png" alt>
        <div class="shuom ss">对商家、保洁人员隐藏您的真实手机号，保护您的隐私</div>
        <mu-flex class="select-control-row">
          <mu-switch @change="changeMsg" v-model="switchVal.value1"></mu-switch>
        </mu-flex>
      </div>
    </div>
    <div class="footbb">-------我是有底线的-------</div>
    <!-- 底部导航 -->
    <div class="footNav" v-waves @click="jumpSubmit">提交订单</div>
    <!-- 底部抽屉 -->
    <mu-bottom-sheet :open.sync="open">
      <!-- 地址列表 -->
      <div class="sheetTitleq">选择服务地址</div>
      <div class="gaird g1"></div>
      <div class="contentBox">
        <div
          class="itemsBox"
          @click="changeJump(index)"
          v-for="(ads, index) in dataLists"
          :key="index"
        >
          <div class="name">{{ads.name}}</div>
          <span class="tels">
            {{ads.tel}}
            <template>
              <span v-if="ads.bq=='默认'" class="bq">{{ads.bq}}</span>
              <span v-else class="bq bq1">{{ads.bq}}</span>
            </template>
          </span>
          <img
            @click.stop="changeAdds(index)"
            class="changeAddressLogo"
            src="../../assets/xiugai.png"
            alt
          >
          <div class="adds">{{ads.add}}</div>
          <div class="gaird"></div>
        </div>
      </div>
      <div class="footg"></div>
      <!-- 底部 -->
      <div class="footNavs" v-waves @click="newAddressJump">
        <img class="addImg" src="../../assets/54.png" alt>
        <span>新建地址</span>
      </div>
    </mu-bottom-sheet>
  </div>
</template>

<script>
import NavBack from "../public/NavBack";
import waves from "@/directive/waves"; // 水波纹指令
import { mapGetters } from "vuex";
export default {
  name: "SubmitOrders",
  directives: {
    waves
  },
  components: { NavBack },
  computed: {
    ...mapGetters(["roles", "name", "ids", "avatar", "power"])
  },
  data() {
    return {
      open: false,
      switchVal: {
        value1: false
      },
      dataList: {
        name: "吴先生",
        tel: "135*****0385",
        add: "四川省成都市高新区交子金融科技中心"
      },
      dataLists: [
        {
          name: "吴凯1",
          tel: "135****0385",
          add:
            "四川省成都市高新区交子金融科技中心交子金融科技中心交子金融科技中心",
          bq: "公司"
        },
        {
          name: "吴凯2",
          tel: "135****0385",
          add:
            "四川省成都市高新区交子金融科技中心交子金融科技中心交子金融科技中心",
          bq: "公司"
        },
        {
          name: "吴凯3",
          tel: "135****0385",
          add:
            "四川省成都市高新区交子金融科技中心交子金融科技中心交子金融科技中心",
          bq: "公司"
        },
        {
          name: "吴凯4",
          tel: "135****0385",
          add: "四川省成都市高新区交子金融科技中心",
          bq: "默认"
        },
        {
          name: "吴凯5",
          tel: "135****0385",
          add: "四川省成都市高新区交子金融科技中心",
          bq: "公司"
        },
        {
          name: "吴凯6",
          tel: "135****0385",
          add: "四川省成都市高新区交子金融科技中心",
          bq: "公司"
        }
      ]
    };
  },
  methods: {
    backjump() {
      this.$router.push({
        path: "/"
      });
    },
    changeMsg() {
      console.log(this.switchVal.value1);
    },
    jumpSubmit() {
      this.$router.push({
        path: "/QuickOrder"
      });
    },
    // 打开下拉选框
    openBotttomSheet() {
      this.open = true;
    },
    // 关闭
    closeBottomSheet() {
      this.open = false;
    },
    // 修改地址
    changeAdds(index) {
      console.log(index);
    },
    // 确认地址
    changeJump(index) {
      this.dataList = this.dataLists[index];
      this.open = false;
    },
    //新建地址跳转
    newAddressJump() {
      setTimeout(() => {
        this.$router.push({
          path: "/MapDemo"
        });
      }, 500);
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
.contentBigBox {
  width: 100%;
  background-color: white;
  margin-top: 0.32rem;
  padding: 0.32rem;
}
.contentItem {
  /* background-color: #ee8018; */
  text-align: left;
  position: relative;
  font-size: 0.32rem;
  color: #333333;
  margin-top: 0.2rem;
}
.contentItemTitle {
  position: absolute;
}
.contentItemAddress {
  margin-left: 1.6rem;
  display: inline-block;
  width: 65%;
  font-size: 0.32rem;
}
.rightBoxLocalForward {
  width: 0.16rem;
  position: absolute;
  right: 0.21rem;
  top: 0.12rem;
}
.orderBox {
  margin: 0.32rem auto;
  padding: 0.32rem;
  background-color: #fff;
}
.orderBoxItem {
  text-align: left;
  position: relative;
  margin-bottom: 0.32rem;
  /* background-color: #67c1fd; */
}
.titless {
  margin-left: 0.57rem;
}
.orderBoxItemLogo {
  width: 0.38rem;
  position: absolute;
  top: 0.06rem;
}
.dd {
  margin-left: 0.1rem;
}
.shuom {
  width: 85%;
  padding: 0.2rem 0 0.32rem 0.2rem;
  font-size: 0.28rem;
  color: #999999;
  /* background-color: #ee8018; */
}
.ss {
  padding: 0.2rem 0 0rem 0.2rem;
}
.garids {
  width: 100%;
  border: 0.02rem solid #f9f9f9;
}
.select-control-row {
  position: absolute;
  /* background-color: palegoldenrod; */
  top: 0.32rem;
  right: 0.02rem;
}
.mu-switch {
  height: 0.64rem;
  line-height: 0.64rem;
}
.select-control-row >>> .mu-switch-wrapper {
  width: 100%;
  height: 0.64rem;
}
.select-control-row >>> .mu-switch-container {
  width: 0.76rem;
  padding: 0.08rem 0 0.08rem 0.04rem;
  margin-right: 0.16rem;
}
.select-control-row >>> .mu-switch-track {
  width: 100%;
  height: 0.28rem;
  border-radius: 0.6rem;
}
.select-control-row >>> .mu-switch-thumb {
  position: absolute;
  top: 1px;
  left: 0;
  width: 0.4rem;
  height: 0.4rem;
  line-height: 0.48rem;
}
.select-control-row >>> .mu-switch-checked {
  color: #ee8018;
}
.select-control-row >>> .mu-switch-checked .mu-switch-thumb {
  transform: translate3d(0.36rem, 0, 0);
}
.select-control-row >>> .mu-switch-ripple-wrapper {
  top: -0.2rem;
  left: -0.2rem;
}
.orderBoxItem:last-child {
  margin-bottom: 0;
}
.footNav {
  width: 100%;
  height: 1.2rem;
  background-color: #ee8018;
  position: fixed !important;
  bottom: 0;
  color: #fff;
  line-height: 1.2rem;
  font-size: 0.34rem;
}
.footbb {
  width: 100%;
  height: 1.2rem;
}
.contentBox {
  width: 100%;
  max-height: 9rem;
  overflow: hidden;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
  /* background-color: antiquewhite; */
}
.itemsBox {
  width: 100%;
  padding: 0.32rem 0.32rem 0 0.32rem;
  background-color: #fff;
  text-align: left;
  /* margin-top: 0.1rem; */
  position: relative;
}
.name {
  font-size: 0.36rem;
  color: black;
  display: inline-block;
}
.tels {
  position: absolute;
  left: 2.1rem;
  font-size: 0.3rem;
}
.adds {
  font-size: 0.24rem;
  margin-top: 0.12rem;
  width: 80%;
  text-align: left;
}
.bq {
  margin-left: 0.12rem;
  background-color: red;
  display: inline-block;
  font-size: 0.2rem;
  color: #fff;
  width: 0.84rem;
  height: 0.4rem;
  text-align: center;
  line-height: 0.4rem;
  border-radius: 0.4rem;
}
.bq1 {
  background-color: rgb(51, 51, 230);
}
.changeAddressLogo {
  position: absolute;
  width: 0.68rem;
  right: 0.32rem;
  top: 0.88rem;
}
.gaird {
  width: 100%;
  border: 0.02rem solid #f9f9f9;
  margin-top: 0.32rem;
}
.g1 {
  margin-top: 0rem;
}
.sheetTitleq {
  font-size: 0.34rem;
  text-align: center;
  width: 100%;
  height: 0.86rem;
  line-height: 0.86rem;
  /* background-color: #ee8018; */
}
.footNavs {
  width: 100%;
  height: 0.88rem;
  background-color: #f9f9f9;
  position: fixed;
  bottom: 0;
  text-align: center;
  line-height: 0.88rem;
}
.footg {
  width: 100%;
  height: 1.2rem;
  background-color: #f9f9f9;
}
.addBox {
  width: 80%;
  height: 0.88rem;
  line-height: 0.88rem;
  color: white;
  background-color: red;
  margin: 0.2rem auto;
  border-radius: 1rem;
}
.footNavs span {
  font-size: 0.34rem;
  /* margin-top: -0.1rem; */
  position: relative;
  top: -0.18rem;
  letter-spacing: 0.08rem;
}
.addImg {
  height: 0.56rem;
  margin: 0rem 0.1rem 0 0;
  /* position: absolute; */
}
</style>