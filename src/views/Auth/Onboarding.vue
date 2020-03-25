<template>
  <div class="wrapper">
    <div class="sidebar">
      <AuthSideBar
      header="Willkommen bei Sqool"
      subHeader=""
      :sideBarList="sideBarList"/>
    </div>
    <div class="mainContent">
      <v-row justify=center class="ma-0">
        <v-col sm=12 xs=12 lg=10 xl=6 md=10>
          <v-card shaped class="ml-2 pr-2" :loading="loading">
            <v-card-title>Nur ein paar Fragen ...</v-card-title>
            <v-card-subtitle>Bevor wir anfangen können, brauchen wir noch ein paar Informationen von Dir.</v-card-subtitle>
            <v-stepper color="secondary" v-model="currentStep" vertical>
              <v-stepper-step color="secondary" :complete="currentStep > 1" step="1">
                <small>Angaben zu den Eltern</small>
              </v-stepper-step>
              <!-- STEP 1 -->
              <v-stepper-content step="1">
                <v-card flat class="mb-18">
                  <v-card-text class="pa-0">Wir versuchen so wenig Daten von Dir wie nur möglich zu erheben. Aus diesem Grund
                    reicht es für uns aus, wenn wir den Namen von einem Elternteil haben.</v-card-text>
                  <v-text-field @keydown.enter="currentStep = 2" color="secondary" class="mt-5" dense outlined label="Vorname" clearable v-model="parents.firstName"></v-text-field>
                  <v-text-field @keydown.enter="currentStep = 2" color="secondary" dense outlined label="Nachname" clearable v-model="parents.lastName"></v-text-field>
                </v-card>
                <v-btn :disabled="!parents.lastName || !parents.firstName" class="mt-0" color="secondary" small @click="currentStep = 2">Weiter</v-btn>
                <v-btn text @click="currentStep = 1">zurück</v-btn>
             </v-stepper-content>
              <!-- STEP 2 -->
              <v-stepper-step color="secondary" :complete="currentStep > 2" step="2">
                <small>Angaben zu den Kindern</small>
              </v-stepper-step>
              <v-stepper-content step="2">
                <v-card flat class="mb-5">
                  <v-card-text class="pa-0">Als nächstes brauchen wir bitte die Angabe wieviele Kinder du hast und ein paar persönliche Daten.</v-card-text>
                      <v-data-table
                      v-if="kidsList.length"
                      item-key="firstName"
                      single-select
                      :headers="kidsList"
                      @click:row="selectRow"
                      :items="kids"
                      hide-default-footer
                      class="elevation-0"
                      >
                      <template v-slot:item.actions="{ item }">
                        <v-btn :disabled=!selectedKid text color="transparent">
                          <v-icon medium @click="removeKidFromList(item)">clear</v-icon>
                        </v-btn>
                      </template>
                    </v-data-table>
                    <v-divider></v-divider>
                    <v-text-field  color="secondary" class="mt-5" dense outlined label="Vorname" v-model="kidFirstName"></v-text-field>
                    <v-text-field color="secondary" :placeholder="parents.lastName" clearable dense outlined label="Nachname" v-model="kidLastName"></v-text-field>
                  <v-card-actions class="pa-0 mt-5 justify-end">
                    <v-btn @click="addKid" rounded dark color="green">
                      <v-spacer></v-spacer>
                      <v-icon>add</v-icon>
                      Kind hinzufügen
                    </v-btn>
                  </v-card-actions>
                </v-card>
                <v-btn small :disabled = "kids.length === 0" color="secondary" @click="currentStep = 3">Weiter</v-btn>
                <v-btn text @click="currentStep = 1">Zurück</v-btn>
             </v-stepper-content>
              <!-- STEP 3 -->
              <v-stepper-step color="secondary" :complete="currentStep > 3" step="3">
                <small>Zusammenfassung</small>
              </v-stepper-step>
              <v-stepper-content step="3">
                <v-card flat class="mb-12" height="200px">
                  <v-card-text class="pa-0">Zum Schluss eine Übersicht über deine Daten:</v-card-text>
                  <v-row class="mt-5">
                    <v-col cols=6>
                      <p>Name des Erziehungsberechtigten</p>
                      <br>
                      <p v-if="kids.length === 1">Name des Kindes</p>
                      <p v-else> Namen der Kinder</p>
                    </v-col>
                    <v-col cols=6>
                      <p>Thomas Liebberger</p>
                      <br>
                      <p v-for="kid in kids" :key="kid.firstName">{{kid.firstName}} {{kid.lastName}}</p>
                    </v-col>
                  </v-row>
                </v-card>
                <v-btn dark :disabled="kids.length == 0" color="green" @click="finishOnboarding">Speichern</v-btn>
                <v-btn text @click="currentStep = 2">Zurück</v-btn>
             </v-stepper-content>
            </v-stepper>
          </v-card>
        </v-col>
      </v-row>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AuthSideBar from '@/components/Auth/SideBar'
export default {

  name: 'Register',
  components: {
    AuthSideBar
  },
  data () {
    return {
       kidsList: [
        { text: 'Vorname', value: 'firstName' },
        { text: 'Nachname', value: 'lastName' },
        { text: 'Bearbeiten', value: 'actions' },
      ],
      sideBarList: [],
      currentStep: 1,
      parents: {
        firstName: '',
        lastName: ''
      },
      kids: [],
      kidFirstName: '',
      kidLastName: '',
      selectedKid: {},
      loading: false
    }
  },
  mounted () {

  },
  computed: {
  },
  methods: {
    ...mapActions('auth', ['signin', 'onboarding']),
    ...mapActions('user', ['onboarding']),
    async login () {
      const loginDetails = this.$refs.loginForm.getInputData()
      await this.signin(loginDetails)
    },
    handleFormInput (inputData) {
      this.login(inputData)
    },
    addKid () {
      this.kids.push({
        firstName: this.kidFirstName,
        lastName: this.kidLastName
      })
      this.kidLastName = '',
      this.kidFirstName =''
    },
    selectRow (rowData, row) {
      row.select(true)
      this.selectedKid = rowData
    },
    removeKidFromList (item) {
     const index = this.kids.findIndex(kid => kid.firstName === item.firstName)
     this.kids.splice(index, 1)
    },
    async finishOnboarding () {
      this.loading = true
      this.currentStep = 4
      await this.onboarding({
        parents: this.parents,
        kids: this.kids
      })
      this.loading = false
    }
  }

}
</script>

<style lang="scss" scoped>
::v-deep .v-stepper {
  box-shadow: none;
}

 ::v-deep tr.v-data-table__selected {
    color: white;
    background: #3a416f !important;
    .v-icon {
      box-sizing: border-box;
      color: white;
    }
    .v-icon:hover {
      transform: scale(1.5);
      border-radius: 10000px;
    }
  }

$input-text-color: #848ab8;
.loginButton{
  margin-top: 25px
}
::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
  color: $input-text-color;
  font-size: 16px;
  opacity: 1; /* Firefox */
}
.wrapper{
  display: grid;
  grid-template-columns: 500px 1fr;
  grid-template-areas: 'sidebar content';
  min-height: 100%;
  min-width: 100%;
  background-color: white;
}
@media screen and (max-width: 1000px) {
  .wrapper {
    display: flex;
    grid-template-columns: 1fr;
    grid-template-areas: 'content';
  }
  .sidebar{
    display: none !important;
  }
}
@media screen and (max-width: 769px) {
  .wrapper {
    display: flex;
    grid-template-columns: 1fr;
    grid-template-areas: 'content';
  }
  .wrapper .mainContent .container{
    height: 100% !important
  }
  .wrapper .mainContent .container .goToLogin {
    flex-direction: column !important;
    align-items: flex-end !important;
    margin-top: 50px !important;
  }
  .sidebar{
    display: none !important;
  }
}

// SIDEBAR

.wrapper .sidebar {
  grid-area: sidebar;
  display: flex;
  position: relative;
  justify-content: center;
  background-color: #252845;
}

// MAINCONTENT

.wrapper .mainContent{
  grid-area: content;
  display: flex;
  align-items: center;
  min-width: 100%;
}
.wrapper .mainContent .container {
  width: 446px;
  max-width: 90vw;
  height: 500px;
}
.wrapper .mainContent .container h2{
  color: #3a416f;
  font-size: 32px;
  font-weight: 400;
  font-style: normal;
  font-stretch: normal;
  line-height: 1.13;
}

.wrapper .mainContent .sign {
  margin-top: 25px;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  align-content: center;
  text-align: center;
  height: 40px;
}
.wrapper .mainContent .sign p {
  margin: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #5d6494;
  font-size: 16px;
}
.wrapper .mainContent .sign p::before {
  content: "";
  width: 20%;
  margin-right: 40px;
  height: 1px;
  background: #dedfed;
}
.wrapper .mainContent .sign p::after {
  content: "";
  margin-left: 40px;
  width: 20%;
  height: 1px;
  background: #dedfed;
}
.wrapper .mainContent .container .createWithOAuth {
  display: flex;
  text-align: center;
  padding-left: 24px;
  align-items: center;
  text-transform: uppercase;
  height: 48px;
  width: 100%;
  border-radius: 40px;
  color: #5d6494;
  font-weight: 500;
  font-size: 13px;
  text-decoration: none;
  background: linear-gradient(to bottom,white,#e4e4e9) no-repeat;
  text-shadow: 0 1px 0 #fff;
  box-shadow: 0 7px 14px -3px rgba(45,35,66,.3), 0 2px 4px 0 rgba(45,35,66,.4), inset 0 -2px 0 0 #cfd1e3;
}
.wrapper .mainContent .container .createWithOAuth img{
  height: 24px;
  margin-right: 24px;
}
.wrapper .mainContent .createWithOAuth:hover{
  background-color: #5468ff;
  box-shadow: 0 2px 4px 0 rgba(45,35,66,.4),
             0 1px 1px rgba(0,0,0,0.11),
              0 2px 2px rgba(0,0,0,0.11),
              0 4px 4px rgba(0,0,0,0.11),
              0 8px 8px rgba(0,0,0,0.11),
              0 9px 9px rgba(0,0,0,0.11),
              0 10px 10px rgba(0,0,0,0.11);
  transform: translateY(-2px);
}

</style>
