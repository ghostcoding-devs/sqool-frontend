<template>
  <v-navigation-drawer dark app clipped-right mini-variant color="#616161">
    <v-list-item class="pl-2 pt-1">
      <v-avatar size="43">
        <img src="Logo_grünHG.png"/>
      </v-avatar>
    </v-list-item>
    <br />
    <v-list dense shaped>
      <v-list-item v-for="item in items" :key="item.text" router :to="item.route" color="primary">
        <v-list-item-icon>
          <v-icon v-text="item.icon"></v-icon>
        </v-list-item-icon>
        <v-list-item-content>
          <v-list-item-title v-text="item.text"></v-list-item-title>
        </v-list-item-content>
        <v-list-item-title>{{ item.text }}</v-list-item-title>
      </v-list-item>
    </v-list>
    <template v-slot:append>
      <v-btn block icon>
        <v-icon class="flex">exit_to_app</v-icon>
      </v-btn>
    </template>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'Sidedrawer',
  data ()  {
    return {
      items: [
        { icon: 'dashboard', text: 'Übersicht', route: '/' },
        { icon: 'folder', text: 'My Projects', route: '/login' },
        { icon: 'person', text: 'Team', route: '/team' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>