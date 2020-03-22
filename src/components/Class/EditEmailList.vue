<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on }">
      <v-btn v-if="isTeacher" v-on="on" color="secondary">Schüler hinzufügen</v-btn>
    </template>
    <v-col>
      <v-card>
        <v-row justify="center">
          <InviteList @editInviteList="updateEmailList"/>
        </v-row>
        <v-row justify="center">
          <v-card-actions>
            <v-btn color="green" @click="sendMails">Einladung senden</v-btn>
          </v-card-actions>
        </v-row>
      </v-card>
    </v-col>
  </v-dialog>
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
      dialog: false,
      emailList: []
    };
  },
  computed: {
    ...mapState("user", ["isTeacher"])
  },
  methods: {
    ...mapActions("class",["sendEmailInvites"]),
    updateEmailList(value){
      this.emailList = value
    },
    async sendMails(){
      if (this.emailList.length === 0) return alert('Bitte Personen hinzufügen')
      console.log('funzt', this.emailList)
    }
  }
};
</script>