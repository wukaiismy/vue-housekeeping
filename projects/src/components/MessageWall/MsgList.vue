<template>
  <div>
    <NavBack name="32字疯言墙" @backjump="backjump"/>
    <mu-grid-list class="gridlist-demo">
      <mu-sub-header>
        我来疯语
        <img class="imgLogo" src="../../assets/home/liuyanban.png" alt>
      </mu-sub-header>

      <mu-grid-tile v-for="(tile, index) in list" :key="index">
        <img :src="tile.image">
        <span slot="title">{{tile.title}}</span>
        <span slot="subTitle">
          by
          <b>{{tile.author}}</b>
        </span>
        <mu-button slot="action" icon>
          <mu-icon value="star_border"></mu-icon>
        </mu-button>
      </mu-grid-tile>
    </mu-grid-list>
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
          title: "神仙水",
          author: "阿卡再问一次可不可以啊再问一次可不可以啊"
        },
        {
          image: carouselImg2,
          title: "快乐肥仔水",
          author: "阿卡"
        },
        {
          image: carouselImg2,
          title: "我有32场延长胡",
          author: "阿卡"
        },
        {
          image: carouselImg2,
          title: "就问你屌不屌",
          author: "张杰"
        },
        {
          image: carouselImg2,
          title: "再问一次可不可以啊",
          author: "王菲"
        },
        {
          image: carouselImg2,
          title: "我有32场延长胡",
          author: "阿卡"
        },
        {
          image: carouselImg2,
          title: "就问你屌不屌",
          author: "张杰"
        },
        {
          image: carouselImg2,
          title: "再问一次可不可以啊",
          author: "王菲"
        }
      ]
    };
  },
  methods: {
    backjump() {
      this.$router.push({
        path: "/"
      });
    }
  }
};
</script>

<style scoped>
.gridlist-demo {
  width: 100%;
  height: 11.5rem;
  overflow-y: auto;
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
  width: 0.68rem;

  position: absolute;
  right: -0.78rem;
  top: 0.12rem;
}
.mu-grid-tile-wrapper {
  padding: 0.04rem !important;
  height: 3.6rem !important;
}
</style>