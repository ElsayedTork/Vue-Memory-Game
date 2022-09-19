<template>
  <div class="photos">
    <div class="container">
      <ul class="row">
        <li
          class="my-5 col-6 mx-auto photos__card"
          v-for="photo in photos"
          :key="photo.id"
        >
          <div class="card" style="width: 18rem">
            <img :src="photo.url" alt="" />
            <div class="card-body">
              <h5 class="card-title">Photo Number :{{ photo.id }}</h5>
              <p class="card-text">{{ photo.title }}</p>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: {
    ...mapState(['photos']),
  },
};
</script>
<style lang="scss" scoped>
.photos {
  &__card {
    width: fit-content;
    border-radius: 10px;
    padding: 20px;
    list-style: none;
    .card-body {
      min-height: 140px;
      h5 {
        color: #030e4f;
        font-weight: 700;
      }
      p {
        color: #030e4f;
        font-weight: 500;
      }
    }
  }
}
</style>
