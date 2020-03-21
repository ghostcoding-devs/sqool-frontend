<template>
  <v-app-bar dense app flat color="inherit">
    <v-toolbar-title class="text-uppercase grey--text">
      <span class="font-weight-light">Sqool</span>
      <span>-Frontend</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <!-- Navigation Menu -->
    <v-menu offset-y>
     <template v-slot:activator="{ on }">
      <v-btn 
        text 
        slot="activator" 
        color="grey"
        v-on="on">
        <v-icon left>expand_more</v-icon>
        <span>Menu</span>
      </v-btn>
     </template>
    <v-list shaped dense>
      <v-list-item v-for="link in links" :key="link.text" router :to="link.route" color="primary">
        <v-list-item-title>{{ link.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
  </v-menu>
  <!-- Auth Menu -->
  <v-menu left bottom>
    <template v-slot:activator="{ on }">
      <v-btn icon v-on="on">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
    </template>
    <v-list dense>
      <v-list-item v-for="item in authLinks" :key="item.text" router :to="item.route">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
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
      { icon: 'dashboard', text: 'Übersicht', route: '/' },
      { icon: 'folder', text: 'My Projects', route: '/projects' },
      { icon: 'person', text: 'Team', route: '/team' },
    ],
    authLinks: [
     { icon: 'person', text: 'Profile', route: '/profile' },
     { icon: 'exit_to_app', text: 'LogOut', route: '/logout' },
    ],
    drawer: false
  }),
  methods: {
    toggleDrawer () {
      this.$emit('onToggleDrawer')
    }
  }

}
</script>

<style lang="scss" scoped>

</style> 
