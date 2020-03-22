<template>
  <v-container fluid>
    <v-col cols="12" align="center">
      <v-row justify="center">
        <h1>Klassenübersicht</h1>
      </v-row>
      <v-row justify="center">
        <v-card height="100px" width="100px" shaped>
          <v-btn width="100%" height="100%" router to="/class/create">
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </v-card>
        <v-card class="d-flex" width="100px" height="100px" v-for="item in classes" :key="item.id">
          <v-btn height="100%" width="100%" router :to="`/class/${item.id}`" >{{item.name}}</v-btn>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState("user", ["classes"])
  }
};
</script>

