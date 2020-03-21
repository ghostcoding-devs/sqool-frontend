<template>
  <v-form v-model="valid">
    <v-col cols="12" xl="12" lg="6" md="6" sm="12" xs="12" align="center" justify="center" display>
      <v-text-field label="Email" v-model="email"></v-text-field>
      <v-text-field label="Familienname" v-model="familyname"></v-text-field>
      <v-text-field label="Name des Kindes" v-model="childname"></v-text-field>
      <v-btn @click="addToClass">Hinzufügen</v-btn>
    </v-col>
  </v-form>
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
      childname: null
    };
  },
  methods: {
    ...mapMutations("class", ["addToClassList"]),
    addToClass() {
      this.addToClassList({
        email: this.email,
        familyname: this.familyname,
        childname: this.childname
      });
    }
  }
};
</script>