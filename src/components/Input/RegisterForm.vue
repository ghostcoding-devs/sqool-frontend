<template>
  <form class="form">
    <InputField 
      ref="mailRef" 
      inputId="email" 
      placeholder="Email" 
      type="email" 
      @onInput="inputHandler"
      @onPressedEnter="keyBoardHandler"
      />
    <InputField 
      ref= "passwordRef" 
      inputId="password" 
      placeholder="Passwort" 
      type="password"
      @onInput="inputHandler"
      @onPressedEnter="keyBoardHandler"
      />
    <InputField 
      ref= "repeatPasswordRef" 
      inputId="repeatPassword" 
      placeholder="Passwort wiederholen" 
      type="password"
      @onInput="inputHandler"
      @onPressedEnter="keyBoardHandler"
      />
    <CheckBoxWithText v-if="['register'].includes(this.$route.name)" ref="checkBockRef" inputId="checkBox" @onChecked="inputHandler" :text="checkBoxText"/>
  </form>
</template>

<script>
import InputField from './InputField.vue'
import CheckBoxWithText from './CheckBoxWithText.vue'
export default {
  name: 'RegisterForm',
  components: {
    InputField,
    CheckBoxWithText
  },
  data: () => ({
    inputData: {},
    checkBoxText: 'Mit der Erstellung eines Kontos stimmen Sie den Allgemeinen Geschäftsbedingungen und den Datenschutzrichtlinien zu.'
  }),
  methods: {
    inputHandler (event) {
      this.inputData[event.target.id] = event.target.value
    },
    getInputData () {
      return this.inputData
    },
    resetForm () {
      this.$refs.checkBockRef.clearInput()
      this.$refs.mailRef.clearInput()
      this.$refs.passwordRef.clearInput()
      this.inputData = {}
    },
    resetPasswords () {
      this.$refs.passwordRef.clearInput()
      this.$refs.repeatPasswordRef.clearInput()
    },
    keyBoardHandler () {
      const inputData = this.getInputData()
      this.$emit('onSubmitFormData', inputData)
    }
  }
}
</script>

<style lang="scss" scoped>
$input-text-color: #848ab8;

.form {
  display: flex;
  flex-direction: column;
  width: 100%;
}
.form .checkboxWrapper{
  display: flex;
}
.form .checkboxWrapper .form__checkbox{
  margin-top: 23px;
  margin-right: 15px
}
.form .checkboxWrapper p {
  margin-top: 20px;
  color: #252845
}
</style>
