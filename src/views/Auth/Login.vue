<template>
  <div class="wrapper">
    <div class="sidebar">
      <AuthSideBar/>
    </div>
    <div class="mainContent">
      <div class="container">
        <h2>Einloggen</h2>
        <LoginRegisterSwitch/>
        <AuthForm 
          ref="loginForm"
          @onSubmitFormData="handleFormInput"/>
        <CustomButton
          class="loginButton"
          dark
          text="Einloggen"
          @click.native="login('basic')"/>
        <div class="sign">
          <p>oder mit ...</p>
        </div>
        <v-row>
          <v-col lg=6 sm=12 md=12 xs=12>
            <a class="createWithOAuth">
              <img :src="`/facebook.svg`"/>
              Facebook</a>
          </v-col>
          <v-col lg=6 sm=12 xs=12>
          <a class="createWithOAuth"> <img :src="`/google.svg`"/>Google</a>
        </v-col>
        </v-row>
    </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import AuthSideBar from '@/components/Auth/SideBar'
import LoginRegisterSwitch from '@/components/Buttons/LoginRegisterSwitch'
import CustomButton from '@/components/Buttons/AuthButton'
import AuthForm from '@/components/Input/Form'
export default {

  name: 'Register',
  components: {
    AuthSideBar,
    LoginRegisterSwitch,
    CustomButton,
    AuthForm
  },
  data: () => ({
  }),
  mounted () {

  },
  computed: {
  },
  methods: {
    ...mapActions('auth', ['signin']),
    async login (provider, signUpDetails) {
      let userInput = signUpDetails
      if(provider === 'basic') {
        if(!userInput) {
          userInput = this.$refs.loginForm.getInputData()
          console.log(userInput)
        }
      }
      await this.signin({ provider, userInput })

    },
    handleFormInput (inputData) {
      this.login('basic', inputData)
    }
    // ...mapMutations('common', ['showSidebar', 'showHeader'])
  }

}
</script>

<style lang="scss" scoped>

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
  justify-content: center;
  padding-left: 24px;
  padding-right:48px;
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
