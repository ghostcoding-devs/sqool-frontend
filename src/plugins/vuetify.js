import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#9d9d9d',
        secondary: '#81c784',
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.grey.lighten3
      }
    }
  }
})
