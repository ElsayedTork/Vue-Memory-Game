<template>
  <div class="cards">
    <section class="text-white container my-2">
      <div
        class="d-flex cards__upper justify-content-between align-items-center"
      >
        <div>
          <b>Time : {{ timerCount }} second</b>
        </div>
        <div>
          <button @click="rePlay" class="btn btn-primary">
            restart A game
          </button>
        </div>
      </div>
    </section>
    <section
      v-if="timerCount > 0 && lenghtOfdata > 0"
      class="cards__items container"
    >
      <div class="cards__items__container">
        <div class="row">
          <div
            class="col-4 mb-3"
            v-for="card in cards"
            :key="card.name"
            :class="{ invisible: !card.visable }"
          >
            <div class="cards__items__container__item" @click="clickCard(card)">
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

    <section v-else-if="lenghtOfdata < 0 && timerCount > 0">
      <div>
        <h2>Congratulations You Win !!!!!!!!!!!!!!!!!!!!!</h2>
      </div>
    </section>
    <section v-else class="cards__win">
      <div>
        <h2>Game Over You Lose !!!!!!!!!!!!!!!!!!!!!</h2>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      timerCount: 30,
      viewedCard: null,
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
    clickCard(selectedCard) {
      this.flipCard(selectedCard);
      if (this.viewedCard) this.checkCompare(selectedCard);
      else this.viewedCard = selectedCard;
    },
    flipCard(selectedCard) {
      this.cards = this.cards.map((card) =>
        card.id === selectedCard.id ? { ...card, show: true } : card
      );
    },
    checkCompare(selectedCard) {
      if (selectedCard.name === this.viewedCard.name) {
        this.lenghtOfdata -= 2;
        setTimeout(() => {
          this.cards = this.cards.map((card) =>
            selectedCard.id === card.id || this.viewedCard.id === card.id
              ? { ...card, visable: false }
              : card
          );
          this.viewedCard = null;
        }, 300);
      } else {
        setTimeout(() => {
          this.cards = this.cards.map((card) =>
            selectedCard.id !== card.id || this.viewedCard.id !== card.id
              ? { ...card, show: false }
              : card
          );
          this.viewedCard = null;
        }, 500);
      }
    },
    shuffle(array) {
      let currentIndex = array.length,
        randomIndex;
      while (currentIndex != 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
          array[randomIndex],
          array[currentIndex],
        ];
      }
      return array;
    },
    rePlay() {
      this.cards = [
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
      ];
      this.shuffle(this.cards);
      this.lenghtOfdata = 12;
      this.timerCount = 30;
    },
  },
  watch: {
    timerCount: {
      handler(value) {
        if (value > 0) {
          setTimeout(() => {
            this.timerCount--;
          }, 1000);
        }
      },
      immediate: true,
    },
  },
  created() {
    this.shuffle(this.cards);
  },
};
</script>

<style lang="scss" scoped>
.cards {
  padding-block: 110px;
  &__upper {
    max-width: 900px;
    margin: 0 auto;
    button {
      text-transform: capitalize;
    }
  }
  &__items {
    position: relative;

    &__container {
      max-width: 900px;
      margin: 0 auto;

      &__item {
        img {
          width: 100%;
          height: 150px;
        }
      }
    }
  }
  &__win {
    height: 100vh;
    div {
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
      flex-direction: column;
    }
  }
}
</style>
