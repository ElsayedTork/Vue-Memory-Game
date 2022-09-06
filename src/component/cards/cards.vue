<template>
  <div class="cards">
    <section v-if="lenghtOfdata > 10">
      <div class="container">
        <div class="row">
          <div
            class="col-4 mb-3"
            v-for="card in cards"
            :key="card.name"
            :class="{ invisible: !card.visable }"
          >
            <div class="cards__item" @click="changeCard(card)">
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
      <div>
        <h2>Congratulations You Win !!!!!!!!!!!!!!!!!!!!!</h2>
        <button @click="rePlay" class="btn btn-primary">restart A game</button>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
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
    changeCard(selectedCard) {
      this.cards = this.cards.map((card) =>
        card.id === selectedCard.id ? { ...card, show: true } : card
      );

      if (this.viewedCard) {
        this.checkCompare(selectedCard);
      } else {
        this.viewedCard = selectedCard;
      }
    },
    checkCompare(selectedCard) {
      //delete matching cards
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

      // While there remain elements to shuffle.
      while (currentIndex != 0) {
        // Pick a remaining element.
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        // And swap it with the current element.
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
    },
  },
  created() {
    this.shuffle(this.cards);
  },
};
</script>

<style scoped>
.cards {
  padding-block: 110px;
}

.cards img {
  width: 15rem;
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
