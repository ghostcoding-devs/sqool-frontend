<template>
  <v-app id="inspire" :style="{background: $vuetify.theme.themes[theme].background}">
    <Navigation v-if="!['login', 'register'].includes(this.$route.name)"/>
     <!-- v-bind:class="{ active: isActive, 'text-danger': hasError }"
     !['login', 'register'].includes(this.$route.name) ? "mx-3 mt-4 : "" -->
    <v-content class="`${test}`">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from '@/components/Navigation/Navigation'

export default {
  name: 'App',
  components: {
    Navigation
  },

  data: () => ({
    test: 'mx-3 mt-4'
    //
  }),
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap');
 body, html{
    padding: 0;
    margin: 0;
    //  min-height: 100% !important;
    // height: 100%;
  }
#inspire {
  padding: 0;
  margin: 0;
  font-family: 'Poppins', Helvetica, Arial, sans-serif; /* this was it */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
