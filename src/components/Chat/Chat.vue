<template>
  <v-container fluid>
    <v-row justify="space-around">
      <v-card width="20vw" class="pr">
        <v-list two-line height="90vh">
          <v-list-item v-for="(onlineUser) in online" :key="onlineUser.id">
            <v-list-item-content :key="onlineUser.id" @click="getConversation(onlineUser)">
              <v-list-item-title>{{onlineUser.name}}</v-list-item-title>
              <br />
              <v-list-item-subtitle
                v-if="onlineUser.conversation"
              >{{onlineUser.conversation[onlineUser.conversation.length-1].from}}: {{onlineUser.conversation[onlineUser.conversation.length-1].message}}</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-card>
      <v-card width="70vw" height="90vh">
        <template v-for="(messageObject, index) in conversation">
          <v-row justify="end" :key="index">{{messageObject.message}}</v-row>
        </template>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      user: null,
      conversation: null
    };
  },
  computed: {
    ...mapState("chat", ["online"])
  },
  methods: {
    getConversation(value) {
      this.user = value;
      const index = this.online.findIndex(
        onlineUser => onlineUser.id === value.id
      );
      this.conversation = this.online[index].conversation;
    }
  }
};
</script>