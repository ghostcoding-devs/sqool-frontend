<template>
  <v-app id="inspire" :style="{background: $vuetify.theme.themes[theme].background}">
    <Navigation />
    <v-content class="mx-3 mt-4">
      <NotificationSnack />
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
