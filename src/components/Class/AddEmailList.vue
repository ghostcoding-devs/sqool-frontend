<template>
  <v-dialog v-model="dialog" width="600px">
    <template v-slot:activator="{ on }">
      <v-btn v-if="isTeacher" v-on="on" color="secondary">Schüler hinzufügen</v-btn>
    </template>
    <v-card>
      <InviteList />
    </v-card>
  </v-dialog>
</template>

<script>
export default {
    data(){
        return{
            dialog="true"
        }
    }
}
</script>