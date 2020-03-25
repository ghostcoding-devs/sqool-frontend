<template>
  <v-snackbar v-model="show" :color="color" right bottom>
    {{message}}
    <v-btn text @click="disableNotification">Schließen</v-btn>
  </v-snackbar>
</template>

<script>
import { mapMutations, mapState } from 'vuex';

export default {
  data() {
    return {
      type: null,
      message: null,
      show: false,
      color: null
    }; 
  },
  computed: {
    ...mapState("notification", ["notificationMessage", "notificationType"]),
  },
    methods: {
      ...mapMutations("notification", ["removeNotification"]),
      disableNotification(){
          this.show = false
          this.removeNotification(null)
      }
    },
  watch: {
    notificationMessage() {
      if (this.notificationMessage !== null) {
        this.color = (this.notificationType === 'error') ? 'red' : 'green'
        this.show  = true
        this.message = this.notificationMessage
        setTimeout(() => {
          this.disableNotification()
        }, 5000);
      }
    }
  }
};
</script>