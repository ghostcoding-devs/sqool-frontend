<template>
  <v-col cols="12" xl="12" lg="6" md="6" sm="12" xs="12">
    <span>Aktuelle Teilnehmerzahl:</span> {{updatedMemberList.length}}
    <v-simple-table height="200px" dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Familienname</th>
            <th class="text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in updatedMemberList" :key="item.email">
            <td>{{ item.familyname }}</td>
            <td>{{ item.email }}</td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-col>
</template>

<script>
import { mapState } from "vuex";
export default {
  props: ['memberList'],
  computed: {
    updatedMemberList() {
      console.log('hello')
      if (this.memberList.length) return this.memberList
    }
  }
};
</script>