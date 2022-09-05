<template>
  <section class="cards">
    <h2 class="text-center">Card Game</h2>
    <section>
      <div class="container">
        <div class="row">
          <div class="col-4 mb-3" v-for="card in cards" :key="card.name">
            <div class="cards__item" @click="changeCard(card.id)">
              <img
                :src="
                  require(`./../../assets/images/${
                    card.show ? card.name : 'qustion'
                  }.jpg`)
                "
                class="img-fluid"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
      holdId: 100,
      cards: [
        {
          id: 1,
          name: 'apple',
          show: false,
        },
        {
          id: 2,
          name: 'fig',
          show: false,
        },
        {
          id: 3,
          name: 'grape',
          show: false,
        },
        {
          id: 4,
          name: 'kiwi',
          show: false,
        },
        {
          id: 5,
          name: 'lemon',
          show: false,
        },
        {
          id: 6,
          name: 'melon',
          show: false,
        },
        {
          id: 11,
          name: 'apple',
          show: false,
        },
        {
          id: 12,
          name: 'fig',
          show: false,
        },
        {
          id: 13,
          name: 'grape',
          show: false,
        },
        {
          id: 14,
          name: 'kiwi',
          show: false,
        },
        {
          id: 15,
          name: 'lemon',
          show: false,
        },
        {
          id: 16,
          name: 'melon',
          show: false,
        },
      ],
    };
  },
  methods: {
    changeCard(id) {
      console.log(id);
      this.checkCompare(this.holdId, id);
      this.counter++;

      this.cards = this.cards.map((card) =>
        card.id === id ? { ...card, show: !card.show } : card
      );

      console.log('counter : ', this.counter);
      if (this.counter % 2 === 0) {
        setTimeout(() => {
          this.cards = this.cards.map((card) =>
            card.id === id ? { ...card, show: false } : card
          );
        }, 2000);
      }
      this.holdId = id;
    },
    checkCompare(previd, id) {
      if (previd === id + 10 || previd + 10 === id) {
        setTimeout(() => console.log('Delete'), 500);
      }
    },
  },
};
</script>

<style scoped>
.cards {
  background-color: cadetblue;
  padding-block: 110px;
}
.cards .container {
  max-width: 900px;
}
.cards__item {
  position: relative;
}
.cards__item img {
  height: 150px;
}
</style>
>
