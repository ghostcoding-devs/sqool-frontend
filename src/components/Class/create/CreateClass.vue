<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row justify="center">
        <h1>Klasse erstellen</h1>
      </v-row>
      <v-row justify="center">
        <v-form ref="form" v-model="validate" lazy-validation>
          <v-text-field
            label="Klassenname"
            v-model="classname"
            :rules="inputRules"
            dense
            shaped
            outlined
          ></v-text-field>
        </v-form>
      </v-row>
      <v-row justify="center">Fügen Sie Eltern zu der Klasse hinzu</v-row>
      <v-row justify="center">
        <InviteList memberList="inviteList" @editInviteList="updateInviteList" />
      </v-row>
      <br />
      <v-row justify="center">
        <v-btn color="primary" @click="sendInvites">Klasse erstellen</v-btn>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import InviteList from "@/components/Class/create/InviteList.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    InviteList
  },
  data() {
    return {
      classNameMissing: false,
      inviteList: [],
      validate: true,
      classname: null,
      inputRules: [input => !!input || "Diese Feld muss ausgefüllt werden"]
    };
  },
  methods: {
    ...mapActions("class", ["createClass"]),
    async sendInvites() {
      if (this.$refs.form.validate()) {
        const response = await this.createClass({
          name: this.classname
        })
      }
    },
    updateClassName(value) {
      this.classname = value.classname;
    },
    updateInviteList(value) {
      this.inviteList = value;
    }
  }
};
</script>