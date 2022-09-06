<template>
  <h2 class="py-5 heading text-center">Memory Game</h2>
  <Cards></Cards>
</template>

<script>
import Cards from './component/cards/cards.vue';
export default {
  data() {
    return {};
  },
  components: {
    Cards,
  },
  methods: {},
};
</script>

<style class="scoped">
.heading {
  font-size: 40px;
  color: #fff;
}
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

html {
  font-family: 'Roboto', sans-serif;
}

body {
  margin: 0;
  background-color: cadetblue;
}
</style>
