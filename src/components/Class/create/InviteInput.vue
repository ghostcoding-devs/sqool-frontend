<template>
  <v-col align="center" display cols="12" xl="12" lg="6" md="6" sm="12" xs="12">
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
      <br />
      <v-btn @click="addToClass" :disabled="!valid">Hinzufügen</v-btn>
    </v-form>
  </v-col>
</template>

<script>
import store from "@/store";
import { mapMutations } from "vuex";

export default {
  data() {
    return {
      email: null,
      valid: true,
      familyname: null,
      childname: null,
      emailRules: [
        email => !!email || "Bitte fügen Sie eine Email hinzu",
        email =>
          /.+@.+\..+/.test(email) || "Bitte geben Sie eine gültige Email ein"
      ],
      inputRules: [input => !!input || "Diese Feld muss ausgefüllt werden"]
    };
  },
  methods: {
    ...mapMutations("class", ["addToClassList"]),
    addToClass() {
      if (this.$refs.form.validate()) {
        this.$emit('addToClass', {
          email: this.email,
          familyname: this.familyname,
          childname: this.childname
        });
      }
    }
  }
};
</script>