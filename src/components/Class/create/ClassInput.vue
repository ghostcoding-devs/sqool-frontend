<template>
    <v-col cols="12" xl="12" lg="6" md="6" sm="12" xs="12">
        <v-form ref="form" v-model="validate" lazy-validation >
            <v-text-field label="Klassenname" v-model="classname" :rules="inputRules" dense shaped outlined @change="emitData"></v-text-field>
        </v-form>
    </v-col>
</template>

<script>
export default {
    data() {
        return {
            validate: true,
            classname: null,
            inputRules: [input => !!input || "Diese Feld muss ausgefüllt werden"]
        }
    },
    methods: {
        emitData(){
            if (this.$refs.form.validate()) {
                this.$emit('editClassInformation', {
                    classname: this.classname,
                })
            }
        }
    }
}
</script>