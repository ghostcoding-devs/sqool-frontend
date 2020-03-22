<template>
  <v-col cols="12" xl="12" lg="6" md="6" sm="12" xs="12">
    <v-form v-model="valid" lazy-validation ref="form">
      <v-text-field label="Email" v-model="email" :rules="emailRules" shaped dense outlined></v-text-field>
      <v-text-field
        label="Familienname"
        v-model="familyname"
        :rules="inputRules"
        shaped
        dense
        outlined
      ></v-text-field>
      <v-text-field
        label="Name des Kindes"
        v-model="childname"
        :rules="inputRules"
        shaped
        dense
        outlined
      ></v-text-field>
      <v-row justify="center">
        <v-btn color="secondary" @click="addToClass" :disabled="!valid">Hinzufügen</v-btn>
      </v-row>
    </v-form>
    <br />
    <span>Aktuelle Teilnehmerzahl: {{updatedInviteList.length}}</span>
    <v-simple-table height="200px" dense fixed-header>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-left">Familienname</th>
            <th class="text-left">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in updatedInviteList" :key="item.email">
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
  data() {
    return {
      email: null,
      valid: true,
      familyname: null,
      childname: null,
      inviteList: [],
      emailRules: [
        email => !!email || "Bitte fügen Sie eine Email hinzu",
        email =>
          /.+@.+\..+/.test(email) || "Bitte geben Sie eine gültige Email ein"
      ],
      inputRules: [input => !!input || "Diese Feld muss ausgefüllt werden"]
    };
  },
  computed: {
    updatedInviteList() {
      return this.inviteList;
    }
  },
  methods: {
    addToClass() {
      if (this.$refs.form.validate()) {
        const index = this.updatedInviteList.findIndex(
          parent => parent.email === this.email
        );
        if (index > -1) {
          this.emailRules = [];
          this.emailRules.push("Keine doppelten Emails");
          return this.email = ''
        }
        this.inviteList.push({
          familyname: this.familyname,
          email: this.email,
          child: this.childname
        });
      }
    }
  },
  watch: {
    updatedInviteList(){
      this.$emit('editInviteList', this.updatedInviteList)
    }
  }
};
</script>