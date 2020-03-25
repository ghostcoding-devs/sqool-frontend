<template>
  <v-container fluid>
    <v-col cols="8">
      <v-btn @click="goBack" icon>
        <v-icon>keyboard_backspace</v-icon>
      </v-btn>
      <v-row justify="center">
        <h1>Übung erstellen</h1>
      </v-row>
      <v-row>
        <v-col class="custom-padding">
          <v-text-field
            v-model="title"
            label="Übungstitel"
          ></v-text-field>
        </v-col>
        <v-col class="custom-padding">
          <v-text-field
            v-model="subject"
            label="Fach"
          ></v-text-field>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="custom-padding">
          <v-textarea
            class="custom-padding"
            v-model="description"
            label="Erklärung"
          ></v-textarea>
        </v-col>
      </v-row>
      <v-row>
        <v-col class="custom-padding">
          <v-file-input v-model="file" label="Datei hochladen" outlined dense></v-file-input>
        </v-col>
      </v-row>
      <v-btn color="secondary" text @click="addExercise">Erstellen</v-btn>
    </v-col>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex"

export default {
  data: () => ({
    title: '',
    description: '',
    subject: '',
    file: null
  }),
  methods: {
    ...mapActions('exercise', ['createExercise']),
    goBack (id) {
      this.$router.go(-1)
    },
    addExercise () {
      this.createExercise({
        title: this.title,
        description: this.description,
        subject: this.subject,
        file: this.file
      })
      this.$router.push('/exercises')
    }
  }
};
</script>

<style>
.custom-padding {
  padding-bottom: 0px;
  padding-top: 0px;
}
</style>


