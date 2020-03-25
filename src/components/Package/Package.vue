<template>
  <v-container>
    <v-row>
      <v-col cols="4" class="custom">
        <p>Erstellt am</p>
      </v-col>
      <v-col cols="8" class="custom">
        <p>{{new Date(pkg.createdAt * 1000).toISOString().substr(0, 10)}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="4" class="custom">
        <p>Abgabedatum</p>
      </v-col>
      <v-col cols="8" class="custom">
        <p>{{new Date(pkg.due * 1000).toISOString().substr(0, 10)}}</p>
      </v-col>
    </v-row>
    <v-row>
      <v-col class="custom">
        <h3>Übungen</h3>
      </v-col>
    </v-row>
    <ExerciseList :exercises="pkg.exercises" />
  </v-container>
</template>

<script>
import ExerciseList from '../Exercise/ExerciseList.vue'
export default {
  components: {
    ExerciseList
  },
  props: {
    pkg: {
      required: true,
      type: Object
    }
  }
}
</script>

<style>
.custom {
  padding-bottom: 0px;
  padding-top: 0px;
}
</style>
