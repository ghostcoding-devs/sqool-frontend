<template>
  <v-simple-table dense fixed-header>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">Email</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="parent in parents" :key="parent">
          <td>{{ parent }}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
  props: {
    parents: {
      required: true,
      type: Array
    }
  }
}
</script>

<style>

</style>
