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
        <v-btn text color="secondary">Zur Übung</v-btn>
      </v-list-item-action>
      <v-divider v-if="exercises.length - 1 !== index" inset></v-divider>
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
  }
}
</script>

<style>

</style>
