<template>
  <Users />
</template>
<script>
import Users from './../../component/users/index.vue';
export default {
  components: {
    Users,
  },
  created() {
    this.$store.dispatch('actionUsers');
  },
};
</script>
