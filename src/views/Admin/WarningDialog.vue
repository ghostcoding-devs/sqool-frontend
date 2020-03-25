<template>
  <v-card>
    <v-card-title class="headline">Ungespeicherte Änderungen</v-card-title>
    <v-card-text>
     Du hast gerade Änderungen vorgenommen und diese nicht gespeichert. Möchtest du die Änderungen verwerfen oder übernehmen?
    </v-card-text>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn color="green darken-1" text @click="save">
        Übernehmen
      </v-btn>
      <v-btn color="red darken-1" text @click="discard">
       Verwerfen
      </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'WarningDialog',
  props: {
    deletedUser: {
      type: String
    }
  },
  methods: {
    save () {
      this.$emit('onSaveChanges')
    },
    discard () {
      this.$emit('onDiscardCanges')
    }
  }
}
</script>
