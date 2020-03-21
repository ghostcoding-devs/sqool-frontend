<template>
  <v-col cols="12" xl="12" lg="6" md="6" sm="12" xs="12">
    <span>Aktuelle Teilnehmerzahl:</span> {{classList.length}}
    <v-simple-table height="200px" dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Email</th>
            <th class="text-left">Familienname</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in classList" :key="item.name">
            <td>{{ item.email }}</td>
            <td>{{ item.familyname }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-col>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState("class", ["classList"])
  }
};
</script>