<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Demo />
    
  </div>
</template>

<script>
import Demo from "./public/Ewm";
import img1 from "../assets/wukai.jpg";
import VueQr from "vue-qr";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "vue插件生成二维码",
      config: {
        value: "www.baidu.com", //显示的值、跳转的地址
        logo: img1 //中间logo的地址
      }
    };
  },
  components: {
    Demo
    // VueQr
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
