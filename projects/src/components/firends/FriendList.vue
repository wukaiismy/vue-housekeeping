<template>
  <div>
    <div class="navBox">
      <div class="Bas"></div>
      <NavBack name="好友列表" @backjump="backjump"/>
    </div>
    <div class="gaidm"></div>
    <!-- 下面是主体部分 -->
    <div class="iptBox" id="searchBar" v-show="hidd">
      <mu-auto-complete
        @change="changShow"
        :data="fruits"
        :max-search-results="6"
        v-model="value6"
        avatar
      >
        <template slot-scope="scope">
          <mu-list-item-action>
            <mu-avatar color="primary">{{scope.item.substring(0, 1)}}</mu-avatar>
          </mu-list-item-action>
          <mu-list-item-content v-html="scope.highlight"></mu-list-item-content>
        </template>
      </mu-auto-complete>
    </div>
    <div class="bigBoxs" ref="viewBox">
      <mu-paper :z-depth="1" class="demo-list-wrap">
        <mu-list>
          <mu-list-item
            avatar
            button
            :ripple="false"
            v-for="(item, index) in dataList"
            :key="index"
          >
            <mu-list-item-action></mu-list-item-action>
            <mu-list-item-title>{{item.name}}</mu-list-item-title>
            <mu-list-item-action>
              <mu-avatar>
                <img :src="item.logoUrl">
              </mu-avatar>
            </mu-list-item-action>
            <div class="gaird2"></div>
          </mu-list-item>
        </mu-list>
      </mu-paper>
      <div class="allPerson">共有14个联系人</div>
    </div>
    <div class="bootS1"></div>
    <!-- <div class="bootS"></div> -->
  </div>
</template>

<script>
import NavBack from "../public/NavBack";
import logo from "../../assets/toux.jpg";
const fruits = [
  "张小花",
  "李玉环",
  "沈星海",
  "王小翠",
  "吴碧莲",
  "罗玉凤",
  "宋妮尚",
  "洛天梦",
  "舒仁梅",
  "黄凤霞",
  "轩辕洛",
  "欧尼"
];
const dataLists = [
  { logoUrl: logo, name: "张小花" },
  { logoUrl: logo, name: "李玉环" },
  { logoUrl: logo, name: "沈星海" },
  { logoUrl: logo, name: "王小翠" },
  { logoUrl: logo, name: "吴碧莲" },
  { logoUrl: logo, name: "罗玉凤" },
  { logoUrl: logo, name: "宋妮尚" },
  { logoUrl: logo, name: "洛天梦" },
  { logoUrl: logo, name: "舒仁梅" },
  { logoUrl: logo, name: "黄凤霞" },
  { logoUrl: logo, name: "轩辕洛" },
  { logoUrl: logo, name: "欧尼" }
];
export default {
  name: "FriendList",
  data() {
    return {
      fruits,
      value6: "",
      dataList: dataLists,
      dataLists: dataLists,
      hidd: true
    };
  },
  mounted() {
    //给window添加一个滚动滚动监听事件
    window.addEventListener("scroll", this.handleScroll);
  },
  methods: {
    backjump() {
      this.$router.push({
        path: "/"
      });
    },
    vueTouch: function(txt, e) {
      console.log(txt), console.log(e);
    },
    handleScroll() {
      //改变元素#searchBar的top值
      var scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop;
      //   console.log(scrollTop);
      //   var offsetTop = document.querySelector("#searchBar").offsetTop;

      if (scrollTop <= 44) {
        this.hidd = true;
      } else {
        this.hidd = false;
      }
    },

    changShow(val) {
      console.log(this.value6);
      console.log(val);
      if (val.length) {
        for (let index = 0; index < this.dataLists.length; index++) {
          if (val == this.dataLists[index].name) {
            this.dataList = [];
            this.dataList.push(this.dataLists[index]);
          } else {
          }
        }
        console.log(this.dataList);
      } else {
        this.dataList = this.dataLists;
      }
    }
  },
  destroyed() {
    //离开该页面需要移除这个监听的事件
    window.removeEventListener("scroll", this.handleScroll);
  },
  components: { NavBack }
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
.bigBoxs {
  margin: 0.88rem auto;
  /* background-color: #ee8018; */
}
.bigBoxs >>> .mu-paper-round {
  border-radius: 0.04rem;
}
.bigBoxs >>> .mu-item.has-avatar {
  height: 1.12rem;
}
.bigBoxs >>> .mu-item {
  height: 0.96rem;
  padding: 0 0.32rem;
}
.bigBoxs >>> .mu-item-action {
  min-height: 1.12rem;
}
.bigBoxs >>> .mu-item-title {
  font-size: 0.32rem;
  height: 0.48rem;
  line-height: 0.48rem;
}
.bigBoxs >>> .mu-item-action {
  min-height: 1.12rem;
}
.bigBoxs >>> .mu-avatar {
  width: 0.8rem !important;
  height: 0.8rem !important;
  font-size: 0.4rem !important;
}
.bootS {
  width: 100%;
  height: 1.12rem;
  position: fixed;
  bottom: 0;
  background: #f9f9f9;
  z-index: 10;
}
.bootS1 {
  width: 100%;
  height: 1.12rem;
  margin: 0.32rem auto;
}
.allPerson {
  font-size: 0.32rem;
}
.gaird2 {
  width: 100%;
  border: solid 0.02rem #f9f9f9;
  position: absolute;
  top: 1.1rem;
  left: 0rem;
}
.iptBox {
  width: 100%;
  height: 0.88rem;
  position: fixed;
  background-color: #f9f9f9;
  z-index: 10000;
  box-sizing: border-box;
  /* background-color: aquamarine; */
}
.iptBox >>> .mu-input {
  font-size: 0.32rem;
  width: 5.12rem;
  min-height: 0.96rem;
  margin-bottom: 0.32rem;
  padding-bottom: 0.24rem;
  padding-top: 0.08rem;
}
.iptBox >>> .mu-text-field-input {
  height: 0.64rem;
}
</style>