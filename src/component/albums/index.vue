<template>
  <div class="albums">
    <div class="container">
      <!-- {{ albums }} -->
      <ul
        v-for="album in albums"
        class="my-5"
        :key="album.id"
        @click="moveToPhotos(album.id)"
      >
        <li>{{ album.id }} - {{ album.title }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['albums']),
  },
  methods: {
    moveToPhotos(albumId) {
      this.$router.push(`/albums/${albumId}`);
    },
    // moveToPhoto() {
    //   this.$router.push(
    //     `/users/${
    //       this.$store.state.albums[this.$route.params.userId].id - 1
    //     }/5`
    //   );
    // },
  },
};
</script>
<style lang="scss" scoped>
.albums {
  ul {
    li {
      margin-block-end: 5px;
      max-width: 400px;
      background-color: #f49f1c;
      color: #030e4f;
      border-radius: 10px;
      padding: 20px;
      list-style: none;
    }
  }
}
</style>
