<template>
  <v-container fluid>
    <v-treeview
      v-model="tree"
      :items="subjects"
      activatable
      item-key="name"
      open-on-click
    >
      <template v-slot:prepend="{ item, open }">
        <v-badge v-if="!item.file" :value="checkIfNew(item.seen)" color="blue" content="1">
          <v-icon>{{ open ? 'mdi-folder-open' : 'mdi-folder' }}</v-icon>
        </v-badge>
        <v-icon v-else>{{ files[item.file] }}</v-icon>
      </template>
    </v-treeview>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data: () => ({
    files: {
      html: "mdi-language-html5",
      pdf: "mdi-file-pdf",
      png: "mdi-file-image",
      txt: "mdi-file-document-outline",
      mp3: "mdi-file-music"
    },
    tree: [],
  }),
  computed: {
      ...mapState("class",["subjects"])
  },
  methods: {
      checkIfNew(value){
          return !value ? 'true' : ''
      }
  }
};
</script>

