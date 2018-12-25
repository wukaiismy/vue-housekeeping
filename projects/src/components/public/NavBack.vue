<template>
  <div class="navLogin">
    <img class="backLogo" src="../../assets/fanhui.png" @click="backJump" alt>
    {{name}}
  </div>
</template>

<script>
export default {
  name: "NavBack",
  props: ["name"],
  methods: {
    backJump() {
      //返回上一页
      this.$emit("backjump");
    }
  }
};
</script>

<style scoped>
.navLogin {
  font-size: 0.36rem;
  color: white;
  height: 0.88rem;
  line-height: 0.88rem;
}
.backLogo {
  width: 0.4rem;
  position: absolute;
  top: 0.64rem;
  left: 0.32rem;
}
</style>