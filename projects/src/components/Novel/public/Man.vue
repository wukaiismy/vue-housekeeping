<template>
  <div class="showServer">
    <!-- 下面是菜单部分 -->
    <mu-row>
      <mu-col span="6" v-for="(msg, ind) in Imglist" :key="ind">
        <div class="grid-cell" v-waves @click="jumpServer(ind)">
          <img class="imgServe" v-lazy="msg.imgurl" alt>
          <div class="titleName">{{msg.msg}}</div>
          <div class="titleNum">100,2部</div>
        </div>
      </mu-col>
    </mu-row>
  </div>
</template>

<script>
import img1 from "../../../assets/novel/9_s.jpg";

import waves from "@/directive/waves"; // 水波纹指令
export default {
  name: "Man",
  directives: {
    waves
  },
  data() {
    return {
      dataList: [
        { imgurl: img1, msg: "玄幻" },
        { imgurl: img1, msg: "奇幻" },
        { imgurl: img1, msg: "武侠" },
        { imgurl: img1, msg: "仙侠" },
        { imgurl: img1, msg: "都市" },
        { imgurl: img1, msg: "现实" },
        { imgurl: img1, msg: "历史" },
        { imgurl: img1, msg: "军事" },
        { imgurl: img1, msg: "游戏" },
        { imgurl: img1, msg: "体育" },
        { imgurl: img1, msg: "科幻" },
        { imgurl: img1, msg: "二次元" }
      ],
      Imglist: []
    };
  },
  mounted() {
    this.getMsg();
  },
  methods: {
    //   获取数据
    getMsg() {
      this.Imglist = this.dataList;
    },
    // 菜单选择
    jumpServer(index) {
      console.log(index);
    }
  }
};
</script>

<style scoped>
.showServer {
  width: 100%;
}

.grid-cell {
  height: 1.52rem;
  color: #666666;
  text-align: left;
  /* background-color: aliceblue; */
  margin: 0.32rem;
  position: relative;
}
.imgServe {
  height: 100%;
  width: 40%;
}
.titleName {
  position: absolute;
  top: 0.28rem;
  left: 50%;
  font-size: 0.3rem;
  font-family: KaiTi;
}
.titleNum {
  position: absolute;
  top: 0.8rem;
  left: 49%;
  font-size: 0.22rem;
}
</style>