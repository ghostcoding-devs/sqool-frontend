<template>
  <router-link :to="{ name: goTo.name }">{{goTo.title}}</router-link>
</template>
<script>
export default {
  name: 'LoginRegisterSwitch',
  computed: {
    goTo () {
      return this.$route.path === '/register' ? { name: 'login', title: 'einloggen' } : { name: 'register', title: 'Noch keinen Account?' }
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  float: right;
  font-family: Poppins,sans-serif;
  font-size: 12px;
  font-weight: 700;
  font-style: normal;
  line-height: 1.5;
  letter-spacing: 1.5px;
  color: #5468ff !important;
  margin-right: auto;
  padding-top: 11px;
  text-transform: uppercase;
  text-decoration: none;
  transform: translateY(-40px);
  z-index: -1;
}
a::after {
  font-size: 12px;
  padding-left: 10px;
  content: ' \25ba';
}
</style>
