import Vue from 'vue'
import Vuetify from 'vuetify/lib'
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify)

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: colors.red.accent4,
        secondary: colors.blueGrey,
        accent: colors.shades.black,
        error: colors.red.accent3,
        background: colors.grey.lighten3
      }
    }
  }
})
