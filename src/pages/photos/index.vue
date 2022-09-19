<template>
    <Photos />
  </template>
  <script>
  import Photos from './../../component/photos/index.vue';
  export default {
    created() {
    this.$store.dispatch('actionPhotos', this.albumId);
  },
  computed:{
    albumId() {
      return this.$route.params.albumId;
    },
  },
    components: {
        Photos,
    },
    

  };
  </script>



  