<template>
  <v-dialog
    v-model="dialog"
    max-width="500px"
  >
    <v-card>
      <v-card-title>
        <span class="headline">Schüler hinzufügen</span>
      </v-card-title>
      <v-card-text>
        <v-simple-table dense fixed-header>
          <template v-slot:default>
            <thead>
              <tr>
                <th class="text-left">Vorname</th>
                <th class="text-left">Nachname</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="student in students" :key="student.id">
                <td>{{ student.firstName }}</td>
                <td>{{ student.lastName }}</td>
                <v-btn color="secondary" text @click="addStudent(student.id)">Hinzufügen</v-btn>
              </tr>
            </tbody>
          </template>
        </v-simple-table>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="secondary" text @click="addStudent()">Fertig</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    dialog: {
      required: true,
      type: Boolean
    },
    students: {
      required: true,
      type: Array
    }
  },
  methods: {
    addStudent (id) {
      this.$emit('addStudent', id)
    }
  }
}
</script>

<style>

</style>
