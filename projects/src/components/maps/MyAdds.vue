<template>
  <div>
    <div class="HomeBox">
      <div class="navBox">
        <div class="Bas"></div>
        <NavBack name="常用地址管理" @backjump="backjump"/>
      </div>
      <div class="gaidm"></div>
    </div>
    <!-- 地址列表 -->
    <div class="contentBox">
      <div class="itemsBox" v-for="(ads, index) in dataList" :key="index">
        <div class="name">{{ads.name}}</div>
        <span class="tels">
          {{ads.tel}}
          <template>
            <span v-if="ads.bq=='默认'" class="bq">{{ads.bq}}</span>
            <span v-else class="bq bq1">{{ads.bq}}</span>
          </template>
        </span>
        <img @click="changeAdds(index)" class="changeAddressLogo" src="../../assets/xiugai.png" alt>
        <div class="adds">{{ads.add}}</div>
        <div class="gaird"></div>
      </div>
    </div>
    <div class="footg"></div>
    <!-- 底部 -->
    <div class="footNavs">
      <div class="addBox" v-waves @click="newAddressJump">
        <img class="addImg" src="../../assets/jia.png" alt>
        <span>新建地址</span>
      </div>
    </div>
  </div>
</template>

<script>
import NavBack from "../public/NavBack";
import waves from "@/directive/waves"; // 水波纹指令
export default {
  name: "MyAdds",
  directives: {
    waves
  },
  components: { NavBack },
  data() {
    return {
      dataList: [
        {
          name: "吴凯",
          tel: "135****0385",
          add:
            "四川省成都市高新区交子金融科技中心交子金融科技中心交子金融科技中心",
          bq: "公司"
        },
        {
          name: "吴凯",
          tel: "135****0385",
          add:
            "四川省成都市高新区交子金融科技中心交子金融科技中心交子金融科技中心",
          bq: "公司"
        },
        {
          name: "吴凯",
          tel: "135****0385",
          add:
            "四川省成都市高新区交子金融科技中心交子金融科技中心交子金融科技中心",
          bq: "公司"
        },
        {
          name: "吴凯",
          tel: "135****0385",
          add: "四川省成都市高新区交子金融科技中心",
          bq: "默认"
        },
        {
          name: "吴凯",
          tel: "135****0385",
          add: "四川省成都市高新区交子金融科技中心",
          bq: "公司"
        },
        {
          name: "吴凯",
          tel: "135****0385",
          add: "四川省成都市高新区交子金融科技中心",
          bq: "公司"
        },
        {
          name: "吴凯",
          tel: "135****0385",
          add: "四川省成都市高新区交子金融科技中心",
          bq: "公司"
        },
        {
          name: "吴凯凯",
          tel: "135****0385",
          add: "四川省成都市高新区交子金融科技中心",
          bq: "公司"
        }
      ]
    };
  },
  methods: {
    backjump() {
      this.$router.go(-1);
    },
    // 修改地址
    changeAdds(index) {
      console.log(index);
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
.contentBox {
  width: 100%;
  padding: 0;
  margin: 0;

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
}
.adds {
  font-size: 0.24rem;
  margin-top: 0.22rem;
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
.footNavs {
  width: 100%;
  height: 1.4rem;
  background-color: #f9f9f9;
  position: fixed;
  bottom: 0;
  text-align: center;
  line-height: 1.4rem;
}
.footg {
  width: 100%;
  height: 2rem;
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
.addBox span {
  font-size: 0.34rem;
  margin-top: -0.1rem;
  position: relative;
  top: -0.08rem;
  letter-spacing: 0.08rem;
}
.addImg {
  height: 0.4rem;
  margin: 0.22rem 0.1rem 0 0;
  /* position: absolute; */
}
</style>