<template>
  <div class="LedarOMeter">
    <img
      src="https://res.cloudinary.com/dpd5cqqpz/image/upload/v1708149676/ledar-o-meter2_x1lugx.png"
    />
    <div v-for="index in 10" :key="index">
      <div class="Ledare" :class="getCoachClass(1, index)"></div>
    </div>
    <div v-for="index in 10" :key="index">
      <div class="Ledare" :class="getCoachClass(2, index)"></div>
    </div>
  </div>
</template>

<script>
const bookedCoaches = 13;

export default {
  data() {
    return {
      coachCount: 0,
    };
  },
  mounted() {
    this.showCoach();
  },
  methods: {
    showCoach() {
      if (this.coachCount < bookedCoaches) {
        setTimeout(() => {
          this.coachCount++;
          this.showCoach();
        }, 400);
      }
    },
    getCoachClass(row, index) {
      const vacancy = this.coachCount < (row - 1) * 10 + index;
      const suffix = vacancy ? "" : " Ledare--booked";
      return `Ledare${row}-${index}${suffix}`;
    },
  },
};
</script>

<style lang="scss" scoped>
.LedarOMeter {
  max-width: 100%;
  position: relative;
  box-sizing: border-box;
  img {
    width: 100%;
    height: auto;
    position: relative;
  }
  .Ledare--booked {
  }

  .Ledare {
    height: 42%;
    width: 8%;
    position: absolute;

    opacity: 0.4;
    background-position: center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url("https://res.cloudinary.com/dpd5cqqpz/image/upload/v1708092075/ledartroja_sbhjsk.png");
    transform: rotate(0deg) translateX(10px);

    &--booked {
      transform: rotate(8deg) scale(1.1) translateX(10px);
      opacity: 1;

      transition: all 0.5s ease-in-out;
    }
  }

  @for $i from 1 through 10 {
    .Ledare1-#{$i} {
      top: 18%;
      left: ($i - 1) * 9.5%;
    }
  }
  @for $i from 1 through 10 {
    .Ledare2-#{$i} {
      top: 50%;
      left: ($i - 1) * 9.5%;
    }
  }
}

// @media only screen and (max-width: 1000px) {
//   .LedarOMeter {
//     max-width: 500px;
//     position: relative;
//     img {
//       width: 500px;
//       max-width: 500px !important;
//     }
//     .Ledare {
//       height: 30px;
//       width: 40px;
//     }

//     @for $i from 1 through 10 {
//       .Ledare1-#{$i} {
//         top: 32px;
//         left: -30px + ($i * 46px);
//       }
//     }
//     @for $i from 1 through 10 {
//       .Ledare2-#{$i} {
//         top: 80px;
//         left: -30px + ($i * 46px);
//       }
//     }
//   }
// }
// @media only screen and (max-width: 499px) {
//   .LedarOMeter {
//     max-width: 300px;
//     position: relative;
//     img {
//       width: 300px;
//       max-width: 300px !important;
//     }
//     .Ledare {
//       height: 20px;
//       width: 25px;
//     }

//     @for $i from 1 through 10 {
//       .Ledare1-#{$i} {
//         top: 22px;
//         left: -20px + ($i * 28px);
//       }
//     }
//     @for $i from 1 through 10 {
//       .Ledare2-#{$i} {
//         top: 46px;
//         left: -20px + ($i * 28px);
//       }
//     }
//   }
// }
</style>
