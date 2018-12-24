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
  background-image: linear-gradient(-137deg, #c78d42 0%, #d6a51f 100%);
}
.backLogo {
  width: 0.4rem;
  position: absolute;
  top: 0.24rem;
  left: 0.32rem;
}
</style>