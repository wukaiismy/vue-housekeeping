<template>
  <div class="bb">
    <mu-container>
      <mu-bottom-nav :value="bottomNav" @change="handleChange">
        <mu-bottom-nav-item value="0" title="首页" icon="home" to="/"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="1" title="消息" icon="message" to="/"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="2" title="好友" icon="favorite" to="/FriendList"></mu-bottom-nav-item>
        <mu-bottom-nav-item value="3" title="我的" icon="perm_identity" to="/MyCenter"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "FootNavigation",
  data() {
    return {
      bottomNav: "0"
    };
  },
  mounted() {
    this.bottomNav = sessionStorage.getItem("navItem");
  },
  methods: {
    handleChange(val) {
      console.log(val);
      this.bottomNav = val;
      sessionStorage.setItem("navItem", this.bottomNav); //存储状态
    }
  }
};
</script>

<style>
.bb {
  /* background-color: #d83636; */
}
.mu-bottom-nav,
.mu-bottom-nav-shift {
  width: 100%;
  background: #f9f9f9;
}
.container {
  position: fixed;
  bottom: 0rem;
  z-index: 11;
}
.mu-bottom-item-active {
  padding-top: 0.12rem;
  padding-bottom: 0.1rem;
  color: #ee8018;
}
.mu-bottom-item {
  min-width: 1.6rem;
  max-width: 3.36rem;
  padding: 0.12rem;
}
.mu-bottom-item-icon {
  width: 0.48rem;
}
.material-icons {
  font-size: 0.48rem;
}
.mu-bottom-item-active .mu-bottom-item-text {
  font-size: 0.28rem;
}
</style>