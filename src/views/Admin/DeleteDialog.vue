<template>
  <v-card>
    <v-card-title class="headline pl-6 pt-5">Warnung</v-card-title>
    <v-card-actions>
      <v-row justify="center" >
        <v-col cols=12 class="pl-6 pr-6">
        <p >Bitte gebe <code>{{ name }} </code>ein um den Nutzer endgültig zu löschen</p>
        <v-text-field 
          class="pt-5" 
          solo 
          label="Regular" 
          placeholder="Placeholder"    
          v-model="input"         
          :rules="[rules.required, rules.counter]">
          </v-text-field>
        </v-col>
        <v-col cols=12>
            <v-btn :disabled="!formValidated" color="green darken-1" text @click="save">
              Löschen
            </v-btn>
            <v-btn color="red darken-1" text @click="discard">
              Nein
            </v-btn>
        </v-col>
      </v-row>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: 'DeleteDialog',
  props: {
    deletedUser: {
      type: Object,
      default : () => {}
    }
  },
  data () {
    return {
      formValidated: false,
      input: '',
      name: this.deletedUser.displayName ? this.deletedUser.displayName : this.deletedUser.email,
      rules: {
         required: value => !!value || 'Required.',
         counter: value => {
           if(value == this.name) {
             this.formValidated = true
             return true
           } else {
             return 'Bitte korrekten Namen / E-Mail Addresse eingeben'
           }
         }
       }
      }
  },
  methods: {
    save () {
      this.$emit('onDeleteUser', this.deletedUser)
    },
    discard () {
      this.$emit('onDiscardCanges')
    }
  }
}
</script>

<style lang="scss" scoped>
p {
  font-size: 14px;
  color: red;
}
</style>