<template>
    <Albums />
  </template>
  <script>
  import Albums from './../../component/albums/index.vue';
  export default {
    components: {
        Albums
    },
    computed: {
    userId() {
      return this.$route.params.userId;
    },
  },
  created() {
    this.$store.dispatch('actionAlbums', this.userId);
  },

  };
  </script>
  