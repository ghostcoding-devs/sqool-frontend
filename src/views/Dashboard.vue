<template>
<v-card>
  <v-card-title>LOL</v-card-title>
  <p>{{currentUser}}</p>
</v-card>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Dashboard',
  beforeRouteEnter (to, from, next) {
    next(vm => {
      if (!vm.currentUser.settings.onboardingCompleted) {
        next({ name: 'onboarding' })
      } else {
        return next()
      }
    })
  },
  data () {
    return {
      lol: 'ja'
    }
  },
  computed: {
    ...mapGetters('user', ['currentUser'])
  }

}
</script>

<style>

</style>