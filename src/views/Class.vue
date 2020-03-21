<template>
  <CreateClass/>
</template>

<script>
import { mapState, mapActions } from "vuex";
import CreateClass from '@/components/Class/CreateClass.vue'

export default {
  components: {
    CreateClass
  }
};
</script>