<template>
  <v-navigation-drawer dark app clipped-right mini-variant permanent color="#616161">
    <v-list-item>
    </v-list-item>
    <v-list dense nav>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>
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
        { title: 'Dashboard', icon: 'mdi-view-dashboard' },
        { title: 'Photos', icon: 'mdi-image' },
        { title: 'About', icon: 'mdi-help-box' },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

</style>