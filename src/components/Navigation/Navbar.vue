<template>
  <v-app-bar dense app flat color="inherit">
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
    <v-toolbar-title class="text-uppercase grey--text">
      <span class="font-weight-light">Sqool</span>
      <span>-Frontend</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Navigation Menu -->
    <v-menu offset-y>
    <v-btn flat slot="activator" color="grey">
      <v-icon left>expand_more</v-icon>
      <span>Menu</span>
    </v-btn>
    <v-list>
      <v-list-tile v-for="link in links" :key="link.text" router :to="link.route">
        <v-list-tile-title>{{ link.text }}</v-list-tile-title>
      </v-list-tile>
    </v-list>
  </v-menu>
    <v-btn icon>
      <v-icon>mdi-heart</v-icon>
    </v-btn>
    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
    <v-menu left bottom>
      <template v-slot:activator="{ on }">
        <v-btn icon v-on="on">
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="n in 5"
          :key="n"
          @click="() => {}"
        >
          <v-list-item-title>Option {{ n }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </v-app-bar>
</template>

<script>
export default {
  name: 'Navbar',
  data: () => ({
    links: [
      { icon: 'dashboard', text: 'Dashboard', route: '/' },
      { icon: 'folder', text: 'My Projects', route: '/projects' },
      { icon: 'person', text: 'Team', route: '/team' },
    ],
    drawer: false
  })

}
</script>

<style lang="scss" scoped>

</style> 
