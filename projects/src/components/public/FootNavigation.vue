<template>
  <div class="bb">
    <mu-container>
      <mu-bottom-nav>
        <mu-bottom-nav-item title="首页" icon="home"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="消息" icon="message"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="好友" icon="favorite"></mu-bottom-nav-item>
        <mu-bottom-nav-item title="我的" icon="perm_identity"></mu-bottom-nav-item>
      </mu-bottom-nav>
    </mu-container>
  </div>
</template>

<script>
export default {
  name: "FootNavigation",
  data() {
    return {};
  }
};
</script>

<style>
.bb {
  background-color: #f9f9f9;
}
.mu-bottom-nav,
.mu-bottom-nav-shift {
  width: 100%;
}
.container {
  position: fixed;
  bottom: 0.1rem;
}
.mu-bottom-item-active {
  padding-top: 0.12rem;
  padding-bottom: 0.1rem;
  color: #c78d42;
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