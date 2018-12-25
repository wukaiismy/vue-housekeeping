<template>
  <div>
    <mu-dialog title="消息提示" transition="slide-top" width="360" :open.sync="openSimple">注册成功，正在跳转登录页面</mu-dialog>
  </div>
</template>

<script>
export default {
  name: "Motal",
  data() {
    return {
      openSimple: false
    };
  },
  mounted() {},
  methods: {
    msgs() {
      this.openSimple = true;
      setTimeout(() => {
        this.openSimple = false;
        this.$router.push({
          path: "/Login"
        });
      }, 2000);
    }
  }
};
</script>

<style scoped>
</style>