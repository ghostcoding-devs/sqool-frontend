<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row justify="center" v-if="newClass">
        <CreateClass  />
      </v-row>
      <v-row justify="center" v-else>
        <v-dialog v-model="dialog" width="600px">
          <template v-slot:activator="{ on }">
            <v-btn v-if="isTeacher" v-on="on" color="secondary">Schüler hinzufügen</v-btn>
          </template>
          <v-card>
            <InviteList />
          </v-card>
        </v-dialog>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CreateClass from "@/components/Class/CreateClass.vue";
import InviteList from "@/components/Class/create/InviteList.vue";

export default {
  components: {
    CreateClass,
    InviteList
  },
  data() {
    return {
      dialog: false
    };
  },
  computed: {
    ...mapState("user", ["isTeacher"]),
    newClass() {
      if (this.$route.params.classId === 'create') return true
      return false
    }
  }
};
</script>