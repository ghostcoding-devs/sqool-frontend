<template>
  <v-app id="inspire" :style="{background: $vuetify.theme.themes[theme].background}">
    <Navigation />
    <v-content class="mx-3 mt-4">
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
    //
  }),
  computed: {
    theme () {
      return (this.$vuetify.theme.dark) ? 'dark' : 'light'
    }
  }
}
</script>
