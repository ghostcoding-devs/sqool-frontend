<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on }">
      <v-btn v-if="isTeacher" v-on="on" color="secondary">Schüler hinzufügen</v-btn>
    </template>
    <v-col>
      <v-card>
        <v-row justify="center">
          <InviteList />
        </v-row>
        <v-row justify="center">
          <v-card-actions>
            <v-btn color="green">Einladung senden</v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-col>
  </v-dialog>
</template>

<script>
import InviteList from "@/components/Class/create/InviteList.vue";
import { mapState } from "vuex";
export default {
  components: {
    InviteList
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapState("user", ["isTeacher"])
  }
};
</script>