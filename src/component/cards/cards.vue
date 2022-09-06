<template>
  <section class="cards">
    <section v-if="lenghtOfdata > 12">
      <div class="container">
        <div class="row">
          <div
            class="col-4 mb-3"
            v-for="card in cards"
            :key="card.name"
            :class="{ invisible: !card.visable }"
          >
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

    <section v-else class="cards__win">
      <h2>Congratulations You Win !!!!!!!!!!!!!!!!!!!!!</h2>
    </section>
  </section>
</template>
<script>
export default {
  data() {
    return {
      counter: 0,
      holdId: 100,
      lenghtOfdata: 12,
      cards: [
        {
          id: 1,
          name: 'apple',
          show: false,
          visable: true,
        },
        {
          id: 2,
          name: 'fig',
          show: false,
          visable: true,
        },
        {
          id: 3,
          name: 'grape',
          show: false,
          visable: true,
        },
        {
          id: 4,
          name: 'kiwi',
          show: false,
          visable: true,
        },
        {
          id: 5,
          name: 'lemon',
          show: false,
          visable: true,
        },
        {
          id: 6,
          name: 'melon',
          show: false,
          visable: true,
        },
        {
          id: 11,
          name: 'apple',
          show: false,
          visable: true,
        },
        {
          id: 12,
          name: 'fig',
          show: false,
          visable: true,
        },
        {
          id: 13,
          name: 'grape',
          show: false,
          visable: true,
        },
        {
          id: 14,
          name: 'kiwi',
          show: false,
          visable: true,
        },
        {
          id: 15,
          name: 'lemon',
          show: false,
          visable: true,
        },
        {
          id: 16,
          name: 'melon',
          show: false,
          visable: true,
        },
      ],
    };
  },
  computed: {},
  methods: {
    changeCard(id) {
      if (this.counter != 0) {
        this.checkCompare(this.holdId, id);
      }
      this.cards = this.cards.map((card) =>
        card.id === id ? { ...card, show: true } : card
      );
      console.log('counter : ', this.counter);
      this.counter++;
      console.log('res length of cards', this.lenghtOfdata);
      console.log();
      this.holdId = id;
    },
    checkCompare(previd, id) {
      //delete matching cards
      if (previd === id + 10 || previd + 10 === id) {
        this.lenghtOfdata -= 2;
        console.log('Match');
        setTimeout(
          () => {
            this.cards = this.cards.map((card) =>
              previd === card.id || id === card.id
                ? { ...card, visable: false }
                : card
            );
          },

          300
        );
      } else {
        setTimeout(
          () => {
            this.cards = this.cards.map((card) =>
              previd !== card.id || id !== card.id
                ? { ...card, show: false }
                : card
            );
          },

          1200
        );
      }

      console.log('Not Match');
    },
  },
};
</script>

<style scoped>
.cards {
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

.cards__win {
  height: 100vh;
}
.cards__win h2 {
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  font-size: 3.125rem;
  text-align: center;
  border: 2px dashed #fff;
  width: 50%;
  height: 50%;
}

/*
.cards__win {
  width: 100vh;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: black;
  color: #fff;
  z-index: 2000;
  font-size: 25px;
}

*/
</style>
