<template>
  <v-container fluid>
    <v-row >
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
      <v-card width="70vw" height="90vh" color="white">
        <v-card max-height="80vh" class="overflow-y-auto mr-2 ml-2 mt-2 mb-2">
          <template v-for="(messageObject, index) in conversation">
            <div :key="index" class="pb-1 pt-1" justify="end">
              <v-col>
                <v-row :justify="(messageObject.from === user.name) ? 'end' : 'start'">
                  <v-card
                    class="messageText"
                    outlined
                    :key="index"
                    shaped
                    :color="(messageObject.from === user.name) ? '#81c784' : '#9d9d9d'"
                  >
                    <v-card-text v-if="messageObject.type === 'text'">{{messageObject.message}}</v-card-text>
                    <v-card-text v-if="messageObject.type === 'img'">
                    <v-img :src="messageObject.message" max-width="400px"></v-img>
                    </v-card-text>
                    <v-card-text class="caption">von: {{messageObject.from}}</v-card-text>
                  </v-card>
                </v-row>
              </v-col>
            </div>
          </template>
        </v-card>
        <v-row class="messageField">
          <v-text-field label="Nachricht"></v-text-field>
          <v-btn icon class="sendIcon">
            <v-icon>mdi-send</v-icon>
          </v-btn>
        </v-row>
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

<style scoped>
.messageText {
  width: 60%;
}
.messageField {
  position: absolute;
  right: 5%;
  bottom: 0;
  width: 90%;
  padding-left: 10%;
}

.sendIcon {
  padding-top: 3%;
  padding-left: 2%;
}
</style>