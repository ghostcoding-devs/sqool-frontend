<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row justify="center" v-if="newClass">
        <CreateClass  />
      </v-row>
      <v-row justify="center" v-else>
        <EditEmailList />
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CreateClass from "@/components/Class/CreateClass.vue";
import InviteList from "@/components/Class/create/InviteList.vue";
import EditEmailList from "@/components/Class/EditEmailList.vue";

export default {
  components: {
    CreateClass,
    InviteList,
    EditEmailList
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