<template>
  <div class="users container">
    <section>
      <div class="row gx-5">
        <div
          class="col-4 users__card"
          v-for="user in users"
          :key="user.id"
          @click="moveToAlbums(user.id)"
        >
          <ul>
            <li>User Name: {{ user.name }}</li>
            <li>User Email: {{ user.email }}</li>
            <li>User Phone: {{ user.phone }}</li>
            <li>User website: {{ user.website }}</li>
          </ul>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapState } from 'vuex';
export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(['users']),
  },
  methods: {
    moveToAlbums(userId) {
      this.$router.push(`/users/${userId}`);
    },
  },
};
</script>
<style lang="scss">
.users {
  &__card {
    ul {
      padding: 10px;
      border-radius: 10px;
      background-color: #030e4f;
      cursor: pointer;
      li {
        list-style: none;
        color: #f49f1c;
      }
    }
  }
}
</style>
