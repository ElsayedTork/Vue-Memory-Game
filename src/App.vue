<template>
  <Navbar />
  <router-view></router-view>
</template>

<script>
import Navbar from './component/navbar/index.vue';

export default {
  data() {
    return {};
  },
  components: {
    Navbar,
  },
  methods: {},
};
</script>

<style class="scoped">
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html {
  font-family: 'Roboto', sans-serif;
}
</style>
