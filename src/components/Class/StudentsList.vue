<template>
  <v-simple-table dense fixed-header>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Vorname</th>
          <th class="text-left">Nachname</th>
          <th class="text-left">Email der Eltern</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.firstName }}</td>
          <td>{{ student.lastName }}</td>
          <td>{{ student.parentId }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    students: {
      required: true,
      type: Array
    }
  }
}
</script>

<style>

</style>
