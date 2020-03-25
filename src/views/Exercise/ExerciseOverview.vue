<template>
  <v-container fluid>
    <v-col cols="8">
      <v-row justify="center">
        <h1>Übungsübersicht</h1>
      </v-row>
      <ExerciseList :exercises="exercises" @goToExercise="goToExercise" />
      <v-btn text color="secondary" block to="/exercises/create">Übung erstellen</v-btn>
    </v-col>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"
import ExerciseList from '../../components/Exercise/ExerciseList'

export default {
  components: {
    ExerciseList
  },
  data: () => ({
    exercises: []
  }),
  computed: {
    ...mapState('class', ['classes'])
  },
  async mounted () {
    this.exercises = await this.getExercises()
  },
  methods: {
    ...mapActions('exercise', ['getExercises']),
    goToExercise (id) {
      this.$router.push('/exercises/' + id)
    }
  }
};
</script>

