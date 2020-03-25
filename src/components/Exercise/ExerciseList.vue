<template>
  <v-list two-line subheader>
    <v-list-item
      v-for="(exercise, index) in exercises"
      :key="index"
    >
      <v-list-item-content>
        <v-list-item-title v-text="exercise.title"></v-list-item-title>
        <v-list-item-subtitle v-text="exercise.description"></v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-btn text color="secondary" @click="goToExercise(exercise.id)">Zur Übung</v-btn>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>
export default {
  props: {
    exercises: {
      required: true,
      type: Array
    }
  },
  methods: {
    goToExercise (id) {
      this.$emit('goToExercise', id)
    }
  }
}
</script>

<style>

</style>
