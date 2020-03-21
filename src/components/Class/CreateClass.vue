<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row justify="center">
        <h1>Klasse erstellen</h1>
      </v-row>
      <v-row justify="center">
        <ClassInput @editClassInformation="updateClassName" />
      </v-row>
      <v-row justify="center">Fügen Sie Eltern zu der Klasse hinzu</v-row>
      <v-row justify="center">
        <InviteInput @addToClass="addClassmember" />
      </v-row>
      {{inviteList}}
      <v-row justify="center">
        <InviteList memberList="inviteList" />
      </v-row>
      <br />
      <v-row
        justify="center"
      >Wenn Sie alle der Klasse hinzugefügt haben können Sie die Klasse erstellen</v-row>
      <br />
      <v-row justify="center">
        <v-btn @click="sendInvites">Klasse erstellen</v-btn>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import ClassInput from "@/components/Class/create/ClassInput.vue";
import InviteInput from "@/components/Class/create/InviteInput.vue";
import InviteList from "@/components/Class/create/InviteList.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    InviteInput,
    InviteList,
    ClassInput
  },
  data() {
    return {
      class: null,
      inviteList: []
    };
  },
  methods: {
    ...mapState("class", ["classList"]),
    ...mapActions("class", ["inviteClass"]),
    async sendInvites() {
      this.inviteClass(this.classList);
    },
    updateClassName(value) {
      this.class.classname = value.classname;
    },
    addClassmember(value) {
      console.log(value);
      this.inviteList.push(value);
    }
  }
};
</script>