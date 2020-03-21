<template>
  <v-app id="inspire" :style="{background: $vuetify.theme.themes[theme].background}">
    <Navbar />
    <v-content class="mx-3 mt-4">
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>
import SideBar from '@/components/Navigation/Sidedrawer'
import Navbar from '@/components/Navigation/Navbar'

export default {
  name: 'App',
  components: {
    SideBar,
    Navbar
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
