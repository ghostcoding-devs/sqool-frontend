<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row justify="center">Fügen Sie Eltern zu der Klasse hinzug</v-row>
      <Input />
      <InviteList />
      <br>
      <v-row>Wenn Sie alle der Klasse hinzugefügt haben können Sie die Einladungen verschicken.</v-row>
      <br>
      <v-row justify="center">
          <v-btn @click="sendInvites">Absenden</v-btn>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import Input from "@/components/Class/Input.vue";
import InviteList from "@/components/Class/InviteList.vue";
import { mapState, mapActions } from "vuex";

export default {
  components: {
    Input,
    InviteList
  },
  methods: {
    ...mapState("class", ["classList"]),
    ...mapActions("class", ["inviteClass"]),
    async sendInvites() {
      this.inviteClass(this.classList)
    }
  }
};
</script>