<template>
  <div>
    <keep-alive include="Address">
      <component :is="componentId" :local="local" @searchJump="searchJump" @submitJump="submitJump"></component>
    </keep-alive>
  </div>
</template>
<script>
import Address from "./public/Address";
import MapSearch from "./public/MapSearch";
export default {
  name: "MapDemo",

  components: { Address, MapSearch },
  data() {
    return {
      componentId: Address,
      local: ""
    };
  },

  methods: {
    // 跳转到地图页面
    searchJump(val) {
      this.componentId = val;
    },
    // 获取地图组件传来的值
    submitJump(val) {
      this.componentId = Address;
      this.local = val.local;
      console.log(val);
    }
  }
};
</script>
<style scoped>
</style>
