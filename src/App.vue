<template>
  <v-app id="inspire" :style="{background: $vuetify.theme.themes[theme].background}">
    <NotificationSnack/>
    <Navigation v-if="!['login', 'register'].includes(this.$route.name)"/>
    <v-content class="`${test}`">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import Navigation from "@/components/Navigation/Navigation";
import NotificationSnack from "@/components/Notification/NotificationSnack.vue";

export default {
  name: "App",
  components: {
    Navigation,
    NotificationSnack
  },

  data: () => ({
    test: 'mx-3 mt-4'
    //
  }),
  computed: {
    theme() {
      return this.$vuetify.theme.dark ? "dark" : "light";
    }
  }
};
</script>
<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css?family=Poppins:400,500&display=swap");
body {
  padding: 0;
  margin: 0;
}
#inspire {
  padding: 0;
  margin: 0;
  font-family: "Poppins", Helvetica, Arial, sans-serif; /* this was it */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
