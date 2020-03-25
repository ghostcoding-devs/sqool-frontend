<template>
  <v-container fluid>
    <v-col cols="12" align="center">
      <v-row justify="center">
        <h1>Klassenübersicht</h1>
      </v-row>
      <v-row justify="center">
        <v-card class="ma-5" height="100px" width="100px">
          <v-dialog v-model="dialog" max-width="600px">
            <template v-slot:activator="{ on }">
              <v-btn width="100%" height="100%" v-on="on"><v-icon>add</v-icon></v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="headline">Eine neue Klasse erstellen</span>
              </v-card-title>
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12">
                      <v-text-field label="Klassenname" required v-model="className"></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="secondary" text @click="dialog = false">Schließen</v-btn>
                <v-btn color="secondary" text @click="addClass">Erstellen</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-card>
        <v-card class="d-flex ma-5" width="100px" height="100px" v-for="item in classes" :key="item.id">
          <v-btn height="100%" width="100%" router :to="`/classes/${item.id}`" >{{item.name}}</v-btn>
        </v-card>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data: () => ({
    dialog: false,
    className: ''
  }),
  computed: {
    ...mapState('class', ['classes'])
  },
  mounted () {
    this.getClasses()
  },
  methods: {
    ...mapActions('class', ['getClasses', 'createClass']),
    addClass() {
      this.createClass({
        name: this.className
      })
      this.dialog = false
      this.className = ''
    }
  }
};
</script>

