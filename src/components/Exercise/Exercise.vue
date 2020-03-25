<template>
  <v-container>
    <v-row>
      <v-col cols="3">
        <strong>Titel</strong>
      </v-col>
      <v-col cols="9">
        {{exercise.title}}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <strong>Fach</strong>
      </v-col>
      <v-col cols="9">
        {{exercise.subject}}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <strong>Erklärung</strong>
      </v-col>
      <v-col cols="9">
        {{exercise.description}}
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <strong>Datei</strong>
      </v-col>
      <v-col cols="9">
        <v-btn icon>
          <v-icon>cloud_download</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="3">
        <strong>Erstellt von</strong>
      </v-col>
      <v-col cols="9">
        {{exercise.createdBy}}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    exercise: {
      required: true,
      type: Object
    }
  }
}
</script>

<style>

</style>
