<template>
  <div>
    <div class="navBox">
      <div class="Bas"></div>
      <NavBack name="32字疯言墙" @backjump="backjump"/>
    </div>
    <div class="gaidm"></div>

    <div class="gridlist-demo">
      <div class="mu-sub-header">我来疯语</div>
      <img class="imgLogo" src="../../assets/home/liuyan.png" alt>
    </div>
    <!-- 下面是菜单部分 -->
    <div class="showServer">
      <mu-row>
        <mu-col span="6" v-for="(msg, ind) in list" :key="ind">
          <div class="grid-cell" @click="jumpServer(ind)">
            <div class="addsBox">
              <mu-icon value="person_add" @click="add(ind)"></mu-icon>
            </div>
            <img class="imgServe" v-lazy="msg.image" alt>
            <div class="titleName">{{msg.author}}</div>
            <div class="iconBox">
              <mu-icon value="thumb_up" @click="zan(ind)"></mu-icon>
              <mu-icon value="thumb_down" @click="cai(ind)"></mu-icon>
              <mu-icon value="device_hub" @click="enjoy(ind)"></mu-icon>
            </div>
          </div>
        </mu-col>
      </mu-row>
    </div>
  </div>
</template>

<script>
import NavBack from "../public/NavBack";
import carouselImg2 from "../../assets/B1.jpg";
export default {
  name: "MsgList",
  components: { NavBack },
  data() {
    return {
      list: [
        {
          image: carouselImg2,
          author: "想起那天在夕阳下的奔跑，那是我逝去的青春。  ---王二狗"
        },
        {
          image: carouselImg2,
          author: "黑夜赋予我黑色的眼睛，而我却用它来寻找光明。 ---张彩蛋"
        },
        {
          image: carouselImg2,
          author:
            "读你的眼睛像一片新大陆，我掩饰不住哥伦布一样的惊喜。---王小花"
        },
        {
          image: carouselImg2,
          author:
            "我永远都能认出你的脚步声，因为别人是踩在地上，只有你是踩在我的心里。"
        },
        {
          image: carouselImg2,
          author:
            "我喝过很烈的酒，也放过不该放的手，从前不会回头，往后不会将就。"
        },
        {
          image: carouselImg2,
          author:
            "城市太大，生活太苦，所以就有了一个个找不到回家的路的可怜孩子。"
        },
        {
          image: carouselImg2,
          author:
            "有些话不说就是个心结，说开了心头就有个伤疤，两者未必有好坏之分。"
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
    // 菜单选择
    jumpServer(index) {
      console.log(index + 1);
    },
    // 添加好友
    add(ind) {
      console.log("你添加好友第" + (ind + 1) + "个为好友");
    },
    // 点赞
    zan(ind) {
      console.log("你点赞了第" + (ind + 1) + "个留言");
    },
    // 踩一踩
    cai(ind) {
      console.log("你踩一踩了第" + (ind + 1) + "个留言");
    },
    // 分享
    enjoy(ind) {
      console.log("你分享了第" + (ind + 1) + "个留言");
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
.gridlist-demo {
  width: 100%;
  line-height: 0.96rem;
}
.mu-sub-header {
  position: relative;
  right: 1rem;
  text-align: right;
  font-size: 0.32rem;
  line-height: 0.96rem;
  padding-left: 0.32rem;
  color: black;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
.imgLogo {
  width: 0.62rem;

  position: absolute;
  right: 0.22rem;
  top: 1.42rem;
}
.mu-grid-tile-wrapper {
  padding: 0.04rem !important;
  height: 3.6rem !important;
}
.showServer {
  /* background-color: aquamarine; */
  height: 11rem;
  overflow-y: auto;
}
.grid-cell {
  width: 90%;
  background-color: #f1f1f1;
  text-align: center;
  margin: 0 auto 20px;
  padding: 0.24rem;
  height: 3.72rem;
  border-radius: 0.32rem;
}
.imgServe {
  width: 55%;
  /* height: 60%; */
  border-radius: 50%;
  margin-top: 0.32rem;
}
.titleName {
  font-size: 0.18rem;
  padding-top: 0.1rem;
  height: 1rem;
}
.iconBox {
  text-align: right;
  position: relative;
  right: 0.12rem;
  top: 0.32rem;
}
.addsBox {
  position: absolute;
  right: 0.42rem;
}
.material-icons {
  font-size: 0.36rem;
  margin-left: 0.1rem;
}
</style>