<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row justify="center">
        <h1>Klasse erstellen</h1>
      </v-row>
      <v-row justify="center">
        <ClassInput @editClassInformation="updateClassName"/>
      </v-row>
      <v-row justify="center">Fügen Sie Eltern zu der Klasse hinzu</v-row>
      <v-row justify="center">
        <InviteList memberList="inviteList" @editInviteList="updateInviteList"/>
      </v-row>
      <br />
      <v-row
        justify="center"
      >Wenn Sie alle der Klasse hinzugefügt haben können Sie die Klasse erstellen</v-row>
      <br />
      <v-row justify="center">
        <v-btn color="primary" @click="sendInvites">Klasse erstellen</v-btn>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import ClassInput from "@/components/Class/create/ClassInput.vue";
import InviteList from "@/components/Class/create/InviteList.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    InviteList,
    ClassInput
  },
  data() {
    return {
      classNameMissing: false,
      classname: null,
      inviteList: []
    };
  },
  methods: {
    ...mapActions("class", ["createClass"]),
    async sendInvites() {
      if (this.classname === null) {
        alert('Klassenname fehlt')
      }
      this.createClass({ 
        name: this.classname,
        emailList: this.inviteList
      });
    },
    updateClassName(value) {
      this.classname = value.classname;
    },
    updateInviteList(value){
      this.inviteList = value
    }
  }
};
</script>