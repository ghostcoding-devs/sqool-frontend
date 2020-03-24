<template>
 <v-container fluid>
   <v-row>
    <v-dialog 
      @keydown.esc="closeDialog"
      v-model="showEditUserDialog"
      fullscreen 
      transition="dialog-bottom-transition">
    <EditUserContent
      ref="editUserRef"
      @onSaveChanges="saveChanges"  
      @onCloseDialog="closeDialog"
      :user="selectedUser"/>
   </v-dialog>
      <v-dialog v-model="showWarningDialog" max-width="500px">
        <WarningDialogContent
          @onDiscardCanges="discardChanges"
          @onSaveChanges="saveChanges"/>
      </v-dialog>
      <v-dialog v-model="showDeleteDialog" max-width="600px">
        <DeleteDialog
          :deletedUser="selectedUser"
          @onDiscardCanges="discardChanges"
          @onDeleteUser="myDeleteUser"/>
      </v-dialog>
     <v-col cols=12>
       <v-card shaped>
         <v-card-subtitle>Nutzerübersicht</v-card-subtitle>
         <v-card-text>
           <v-data-table
            item-key="uid"
            single-select
            :headers="headers"
            @click:row="selectRow"
            :loading="loading.listUsers"
            loading-text="Nutzer werden geladen"
            :items="users"
            hide-default-footer
            class="elevation-0"
            >
            <template v-slot:item.actions="{ item }">
              <v-btn :disabled=!selectedUser text color="transparent">
                <v-icon medium @click="toggleEditDialog(item)">mdi-pencil</v-icon>
              </v-btn>
              <v-btn :disabled=!selectedUser text color="transparent">
                <v-icon medium @click="toggleDeleteDialog(item)">mdi-delete</v-icon>
              </v-btn>
            </template>
           </v-data-table>
         </v-card-text>
       </v-card>
     </v-col>
   </v-row>
 </v-container>
</template>

<script>
import EditUserContent from './Dialog'
import WarningDialogContent from './WarningDialog'
import DeleteDialog from './DeleteDialog'
import { mapActions, mapMutations } from 'vuex'
export default {
  name: 'AdminDashBoard',
  components : {
    EditUserContent,
    WarningDialogContent,
    DeleteDialog
  },
  data () {
    return {
      headers: [
        { text: 'E-Mail', value: 'email' },
        { text: 'UID', value: 'uid' },
        { text: 'EmailVerified', value: 'emailVerified' },
        { text: 'DisplayName', value: 'displayName' },
        { text: 'Actions', value: 'actions' },
      ],
      loading: {
        listUsers: false,
        updateUser: false
      },
      users: [],
      showEditUserDialog: false,
      showDeleteDialog: false,
      showWarningDialog: false,
      selectedUser: {}
    }
  },
  async mounted () {
    this.loading.listUsers = true
    this.users = await this.getUsers()
    this.loading.listUsers = false
  },
  methods: {
    ...mapMutations('notification', ['setNotification']),
    ...mapActions('auth', ['getUsers', 'updateUser', 'deleteUser']),
    selectRow (rowData, row) {
      row.select(true)
      this.selectedUser = rowData
    },
    closeDialog () {
      this.showDeleteDialog = false
      if(this.$refs.editUserRef && this.$refs.editUserRef.getunsavedChanges()) {
        this.showWarningDialog = true
      } else {
        this.showEditUserDialog = false
      }
    },
    toggleEditDialog () {
      this.showEditUserDialog = true
    },
    toggleDeleteDialog () {
      this.showDeleteDialog = true

    },
    async saveChanges () {
      const user = this.selectedUser
      this.loading.updateUser = true
      const updatedUserData = this.$refs.editUserRef.getChanges()
      this.$refs.editUserRef.resetChanges()
      await this.updateUser(user, updatedUserData)
      this.showEditUserDialog = false
      this.showWarningDialog = false
      this.setNotification({
        type: 'success',
        message: `Nutzer ${ user.displayName ? user.displayName : user.email } wurde erfolgreich editiert`
      })
      this.loading.updateUser = false
    },
    async myDeleteUser (user) {
      await this.deleteUser(user)
      this.showDeleteDialog = false
      this.setNotification({
        type: 'success',
        message: `Nutzer ${ user.displayName ? user.displayName : user.email } wurde erfolgreich gelöscht`
      })
    },
    discardChanges (event) {
      if(this.$refs.editUserRef) this.$refs.editUserRef.resetChanges()
      this.closeDialog()
      this.showWarningDialog = false
    }
  }
}
</script>

<style lang="scss" scoped>
 ::v-deep tr.v-data-table__selected {
    color: white;
    background: #ed6e01 !important;
    .v-icon {
      box-sizing: border-box;
      color: white;
    }
    .v-icon:hover {
      transform: scale(2.0);
      border-radius: 10000px;
    }
  }
</style>
