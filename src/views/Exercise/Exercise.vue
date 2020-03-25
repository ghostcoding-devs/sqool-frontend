<template>
  <v-container fluid>
    <v-col cols="8">
      <v-row justify="center">
        <h1>Übung</h1>
        <Exercise :exercise="exercise" />
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"
import Exercise from '../../components/Exercise/Exercise.vue'

export default {
  components: {
    Exercise
  },
  data: () => ({
    exercise: null
  }),
  async mounted () {
    this.exercise = await this.getExercise(this.$route.params.id)
    console.log(this.exercise)
  },
  methods: {
    ...mapActions('exercise', ['getExercise'])
  }
};
</script>

