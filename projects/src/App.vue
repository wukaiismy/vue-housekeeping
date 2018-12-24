<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
body {
  font-size: 0.24rem;
  background: #fff;
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  position: relative;
  /* max-width: 7.5rem; */
  margin: 0 auto;
  font-family: PingFangSC-Regular;
}
* {
  box-sizing: border-box;
  /* 在X5新内核Blink中，在排版页面的时候，会主动对字体进行放大，会检测页面中的主字体，当某一块字体在我们的判定规则中，认为字号较小，并且是页面中的主要字体，就会采取主动放大的操作。然而这不是我们想要的，可以采取给最大高度解决 */
  max-height: 100000px;
  margin: 0;
  padding: 0;
}
/* // *:before,
// *:after {
//   box-sizing: border-box;
//   max-height: 100000px;
// }

// *,
// *:before,
// *:after {
//   -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
// } */
</style>
