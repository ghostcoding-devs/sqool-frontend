<template>
  <v-card>
    <v-list class="pa-0">
      <!-- TOOLBAR -->
      <v-toolbar dark flat color="#ed6e01">
        <v-btn icon dark @click="closeDialog">
          <v-icon >mdi-close</v-icon>
        </v-btn>
        <v-toolbar-title>Nutzerübersicht</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn
            :disabled="!unsavedChanges"
            dark 
            text 
            @click.native="saveChanges">Speichern</v-btn>
        </v-toolbar-items>
        </v-toolbar>
      <v-list-item>
      <!-- Card HEADER -->
      <v-list-item-avatar v-if="user">
        <img :src="user.photoURL" v-if="user.photoURL" alt="Avatar">
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>{{user.displayName}}</v-list-item-title>
        <v-list-item-subtitle>{{user.roles ? user.roles : 'Schüler'}}</v-list-item-subtitle>
      </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-divider></v-divider>
    <v-row :class="{'flex-column': !$vuetify.breakpoint.mdAndUp}">
      <v-col cols="{$vuetify.breakpoint.mdAndUp ? '6':'12'}">
        <v-list three-line subheader>
          <p class="mx-4" :style="{'color': 'grey'}">Allgemeine Einstellungen</p>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>Passwort ändern</v-list-item-title>
              <v-list-item-subtitle class="ma-0">Nach dem Ändern des Passworts werden sie automatisch ausgelogget. Bitte loggen sie sich danach mit ihrem neuen Passwort wieder ein. </v-list-item-subtitle>
              <v-row justify="center" no-gutters>
                <v-col class="pa-0 ma-0" cols=12 xs=12> <v-text-field color="secondary" label="Altes Passwort eingeben" outlined  class="mt-5"></v-text-field></v-col>
                <v-col class="pa-0 ma-0" cols=6 xs=12> <v-text-field color="secondary" label="Neues Passwort setzen" outlined ></v-text-field></v-col>
                <v-col class="pl-1 ma-0" cols=6 xs=12> <v-text-field color="secondary" label="Neues Passwort wiederholen" outlined ></v-text-field></v-col>
                <v-col class="pa-0 ma-0">
                  <v-btn class="ma-0" small dark color="green">Passwort ändern</v-btn>
                  <v-divider class="mt-5"></v-divider>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-content>
              <v-list-item-title>E-Mail Adresse ändern</v-list-item-title>
              <v-list-item-subtitle class="ma-0">Bitte melde dich nach dem Ändern deine Mail Addresse erneut an. </v-list-item-subtitle>
              <v-row no-gutters>
                <v-col class="pa-0 ma-0" cols=12 xs=12> 
                  <v-text-field color="secondary" label="Neue E-Mail Adresse" outlined class="mt-5"></v-text-field>
                </v-col>
                <v-col class="pa-0 ma-0" cols=12>
                  <v-btn class="ma-0" small dark color="green">E-Mail Addresse ändern</v-btn>
                </v-col>
              </v-row>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="{$vuetify.breakpoint.mdAndUp ? '6':'12'}">
        <v-list three-line subheader>
          <p class="mx-4" :style="{'color': 'grey'}">SQOOL Einstellungen</p>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox
               :inpute-value="notification"
                @change="toggleSetting('notification')"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Benachrichtungen</v-list-item-title>
              <v-list-item-subtitle>Sende mir E-Mails sobald neue Übungsaufgaben vorliegen</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
              <v-checkbox   
                :inpute-value="kidzMode"
                @change="toggleSetting('kidzMode')"></v-checkbox>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Kidz Modus freischalten</v-list-item-title>
              <v-list-item-subtitle>Den Kidz Modus aktivierst du außerhalb des Menüs in der Navigationsleiste.
                Um wieder auf den normalen Modus wechseln zu können, musst du dein Passwort erneut eingeben.
              </v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
    <v-divider class="mb-5"/>
    <v-row :class="{'flex-column': !$vuetify.breakpoint.mdAndUp}">
      <v-col cols="{$vuetify.breakpoint.mdAndUp ? '6':'12'}">
        <v-list three-line subheader>
          <p class="mx-4" :style="{'color': 'grey'}">Admin Einstellungen</p>
          <v-list-item>
            <v-list-item-action>
              <v-tooltip bottom>
                <template v-slot:activator="{ on }">
                  <v-switch  
                  v-on="on"
                  :disabled="adminUser"
                  :inpute-value="teacher"
                  @change="toggleSetting('teacher')"></v-switch>
                </template>
                <span>Änderungen werden erst beim Speichern übernommen</span>
            </v-tooltip>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="pb-5">{{teacher ? 'Lehrerrechte entziehen' : 'Lehrerrechte hinzufügen'}}</v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item>
            <v-list-item-action>
            <v-tooltip bottom>
              <template v-slot:activator="{ on }">
                <v-switch
                  :disabled="teacher"
                  v-on="on" 
                  :inpute-value="adminUser"
                  @change="toggleSetting('adminUser')"></v-switch>
              </template>
              <span>Änderungen werden erst beim Speichern übernommen</span>
            </v-tooltip>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title class="pb-5">{{adminUser ? 'Adminrechte entziehen' : 'Adminrechte hinzufügen'}} </v-list-item-title>
              <v-list-item-subtitle></v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
      <v-col cols="{$vuetify.breakpoint.mdAndUp ? '6':'12'}">
        <v-list three-line subheader>
          <p class="mx-4" :style="{'color': 'grey'}"></p>
          <v-list-item>
            <v-list-item-action>
              <v-btn
                class="mt-2"
                :loading="loading.resetPassword"
                @click="resetUserPassword" 
                color="primary">
              Reset</v-btn>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-subtitle class="pb-5 ma-0">
              </v-list-item-subtitle>
              <v-list-item-title class="pb-5 mb-1">Passwort zurücksetzen</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'EditUserContent',
  props: {
    user: Object
  },
  data () {
    return {
      kidzMode: false,
      adminUser: false,
      teacher: false,
      notification: false,
      loading: {
        resetPassword: false
      },
      changes: {
      },
      unsavedChanges: false
    }
  },
  methods: {
    ...mapMutations('notification', ['setNotification']),
    ...mapActions('auth', ['resetPassword']),
    closeDialog () {
      this.$emit('onCloseDialog')
    },
    async resetUserPassword () {
      this.loading.resetPassword = true
      await this.resetPassword(this.user.email)
      this.setNotification({
        type: 'success',
        message: 'Passwort Reset Mail wurde versandt'
      })
      this.loading.resetPassword = false
    },
    toggleSetting (field) {
      this[field] = !this[field]
      this.changes[field] = this[field]
      this.unsavedChanges = true
    },
    getunsavedChanges () {
      return !!this.unsavedChanges
    },
    getChanges () {
      return this.changes 
    },
    saveChanges () {
      this.$emit('onSaveChanges')
    },
    resetChanges () {
      this.changes = {
        teacher: null,
        admin: null
      }
      this.unsavedChanges = false
    }
  }
}
</script>

<style>

</style>