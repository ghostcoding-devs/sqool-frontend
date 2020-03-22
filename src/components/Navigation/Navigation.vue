<template>
  <nav> 
    <Navbar />
    <Sidedrawer/>
  </nav>
</template>

<script>
import Sidedrawer from './Sidedrawer'
import Navbar from './Navbar'
export default {
  name: 'Navigation',
  components: {
    Sidedrawer,
    Navbar
  },
  data ()  {
    return {
      showDrawer: true
    }
  },

  methods: {

  },
}
</script>

<style>

</style>