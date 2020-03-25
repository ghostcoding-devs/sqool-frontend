<template>
  <v-container>
    <v-expansion-panels
      multiple
    >
      <v-expansion-panel class="ma-2" v-for="pkg in packages" :key="pkg.id">
        <v-expansion-panel-header>{{pkg.name}} - ({{pkg.exercises.length}} Übungen)</v-expansion-panel-header>
        <v-expansion-panel-content>
          <Package :pkg="pkg" />
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </v-container>
</template>

<script>
import Package from './Package'
export default {
  components: {
    Package
  },
  props: {
    packages: {
      required: true,
      type: Array
    }
  },
  mounted () {
    console.log(this.packages)
  }
}
</script>

<style>

</style>
