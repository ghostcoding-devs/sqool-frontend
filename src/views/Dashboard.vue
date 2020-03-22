<template>
  <v-container fluid>
    <v-col cols="12">
      <v-row justify="center">
        <v-card width="98%">
          <v-card-title>Neuigkeiten</v-card-title>
          <v-card-text>Neuste Nachricht vom Lehrer</v-card-text>
        </v-card>
      </v-row>
      <v-row :class="{'flex-column': !$vuetify.breakpoint.mdAndUp}">
        <v-col cols="{$vuetify.breakpoint.mdAndUp ? '6':'12'}">
          <!-- <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Nach Datum</v-expansion-panel-header>
              <v-expansion-panel-content></v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels>-->
          <v-card height="19rem" width="100%">
            <v-card-title>Aufgaben nach Datum sortiert</v-card-title>
            <v-card-text>Placeholder</v-card-text>
          </v-card>
          <div class="spacer"/>
          <v-card height="19rem" width="100%">
            <v-card-title>Aufgaben nach Datum sortiert</v-card-title>
            <v-card-text>Placeholder</v-card-text>
          </v-card>
          <!-- <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Erledigt - Offen</v-expansion-panel-header>
              <v-expansion-panel-content></v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels> -->
        </v-col>

        <v-col cols="{$vuetify.breakpoint.mdAndUp ? '6':'12'}">
          <v-card height="40rem" width="100%">
            <v-card-title>Material nach Fach sortiert</v-card-title>
            <Tree/>
          </v-card>
          <!-- <v-expansion-panels>
            <v-expansion-panel>
              <v-expansion-panel-header>Nach Fach</v-expansion-panel-header>
              <v-expansion-panel-content>
                <Tree />
              </v-expansion-panel-content>
            </v-expansion-panel>
          </v-expansion-panels> -->
        </v-col>
      </v-row>
    </v-col>
  </v-container>
</template>

<script>
import Tree from "@/components/Dashboard/Tree.vue";
export default {
  components: {
    Tree
  }
};
</script>

<style scoped>
.spacer {
  height: 2rem;
}
</style>