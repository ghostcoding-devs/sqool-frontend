<template>
  <v-container fluid>
    <h1>Klasse: {{ currentClass.name }}</h1>
    <v-tabs v-model="tab">
      <v-tab>Übersicht</v-tab>
      <v-tab>Arbeitspakete</v-tab>
      <v-tab>Nachrichten</v-tab>
    </v-tabs>
    <v-tabs-items v-model="tab">
      <v-tab-item>
        <v-row>
          <v-col>
            <v-container>
              <v-row>
                <h2 class="pl-6">Elternliste</h2>
                <v-spacer></v-spacer>
                <v-btn text color="secondary" @click="addParentsDialog = true">Eltern hinzufügen</v-btn>
              </v-row>
              <ParentsList :parents="currentClass.parents || []" />
              <AddParentsDialog :dialog="addParentsDialog" @addParents="addParents" />
            </v-container>
          </v-col>
          <v-divider vertical />
          <v-col>
            <v-container>
              <v-row>
                <h2 class="pl-6">Schülerliste</h2>
                <v-spacer></v-spacer>
                <v-btn text color="secondary" @click="prepareStudentsDialog">Schüler hinzufügen</v-btn>
              </v-row>
              <StudentsList :students="currentClass.students || []" />
              <AddStudentsDialog :dialog="addStudentsDialog" :students="freeStudents" @addStudent="addStudent" />
            </v-container>
          </v-col>
        </v-row>
      </v-tab-item>
      <v-tab-item>
        <div class="text-center" v-if="showPackageForm">
          <br />
          <h3>Arbeitspaket erstellen</h3>
          <v-container>
            <v-row>
              <v-col>
                <v-text-field
                  label="Paketname"
                  v-model="packageName"
                ></v-text-field>
              </v-col>
              <v-col>
                <v-menu
                  v-model="menu"
                  :close-on-content-click="false"
                  :nudge-right="40"
                  transition="scale-transition"
                  offset-y
                  min-width="290px"
                >
                  <template v-slot:activator="{ on }">
                    <v-text-field
                      v-model="packageDueDate"
                      label="Abgabedatum"
                      prepend-icon="event"
                      readonly
                      v-on="on"
                    ></v-text-field>
                  </template>
                  <v-date-picker v-model="packageDueDate" @input="menu = false"></v-date-picker>
                </v-menu>
              </v-col>
            </v-row>
            <h5>Übungen</h5>
            <v-list class="text-left">
              <v-list-item v-for="(exercise, index) in exercises" :key="index">
                <v-list-item-action>
                  <v-checkbox 
                    :value="packageExercises.includes(exercise.id)" 
                    @click.native="addExerciseToPackage(exercise.id)"
                  ></v-checkbox>
                </v-list-item-action>
                <v-list-item-content>
                  <v-list-item-title>{{exercise.title}}</v-list-item-title>
                  <v-list-item-subtitle>{{exercise.description}}</v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>
            </v-list>
            <v-btn text color="secondary" @click="clearAddPackage">Abbrechen</v-btn>
            <v-btn text color="secondary" @click="addPackage">Erstellen</v-btn>
          </v-container>
        </div>
        <div v-else>
          <div class="text-center">
            <v-btn color="secondary" small @click="prepareAddPackage">Neues Arbeitspaket</v-btn>
          </div>
          <PackageList :packages="currentClass.packages || []" />
        </div>
      </v-tab-item>
      <v-tab-item>
        <h1>Hallo3</h1>
      </v-tab-item>
    </v-tabs-items>
  </v-container>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex"
import ParentsList from '../../components/Class/ParentsList'
import AddParentsDialog from '../../components/Class/AddParentsDialog'
import StudentsList from '../../components/Class/StudentsList'
import AddStudentsDialog from '../../components/Class/AddStudentsDialog'
import PackageList from '../../components/Package/PackageList'

export default {
  components: {
    ParentsList,
    StudentsList,
    AddParentsDialog,
    AddStudentsDialog,
    PackageList
  },
  data: () => ({
    tab: null,
    menu: false,
    addParentsDialog: false,
    addStudentsDialog: false,
    showPackageForm: false,
    packageName: '',
    packageDueDate: new Date().toISOString().substr(0, 10),
    packageExercises: [],
    exercises: [],
    freeStudents: []
  }),
  mounted () {
    this.getClass()
  },
  computed: {
    ...mapState('class', ['currentClass'])
  },
  methods: {
    ...mapActions('class', ['getClass', 'addParentsToClass']),
    ...mapActions('student', ['getFreeStudents']),
    ...mapActions('exercise', ['getExercises']),
    ...mapActions('package', ['createPackage']),
    ...mapMutations('notification', ['setNotification']),
    addParents (email) {
      if (!this.currentClass.parents.includes(email)) {
        this.addParentsToClass(email)
        this.addParentsDialog = false
      } else {
        this.setNotification({
          notificationMessage: 'Elternteil ist schon in der Liste.',
          notificationType: 'error'
        })
      }
    },
    async prepareStudentsDialog () {
      this.freeStudents = await this.getFreeStudents(this.currentClass.parents)
      this.addStudentsDialog = true
    },
    addStudent (id) {
      if (id) this.addStudentToClass(id)
      this.addStudentsDialog = false
    },
    addPackage () {
      const exercises = this.exercises.filter(ex => this.packageExercises.includes(ex.id))
      this.createPackage({
        name: this.packageName,
        due: this.packageDueDate,
        exercises
      })
      this.$router.push()
      this.clearAddPackage()
    },
    async prepareAddPackage () {
      this.exercises = await this.getExercises()
      this.showPackageForm = true
    },
    clearAddPackage () {
      this.showPackageForm = false
      this.packageName = ''
      this.packageDueDate = new Date().toISOString().substr(0, 10)
      this.packageExercises = []
    },
    addExerciseToPackage (id) {
      if (!this.packageExercises.includes(id)) {
        this.packageExercises.push(id)
      } else {
        this.packageExercises = this.packageExercises.filter(ex => ex !== id)
      }
    }
  }
};
</script>
