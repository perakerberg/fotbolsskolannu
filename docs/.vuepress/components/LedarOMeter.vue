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
const bookedCoaches = 5;

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
  max-width: 1000px;
  position: relative;
  img {
    width: 1000px;
    height: auto;
    position: relative;
  }
  .Ledare--booked {
  }

  .Ledare {
    height: 42px;
    width: 65px;
    position: absolute;
    top: 26px;
    left: 70px;
    opacity: 0.4;
    background-position: center;
    background-size: cover;
    background-image: url("https://res.cloudinary.com/dpd5cqqpz/image/upload/v1708092075/ledartroja_sbhjsk.png");
    transform: rotate(0deg);

    &--booked {
      transform: rotate(8deg) scale(1.1);
      opacity: 1;

      transition: all 0.5s ease-in-out;
    }
  }

  @for $i from 1 through 10 {
    .Ledare1-#{$i} {
      top: 50px;
      left: -50px + ($i * 70px);
    }
  }
  @for $i from 1 through 10 {
    .Ledare2-#{$i} {
      top: 120px;
      left: -50px + ($i * 70px);
    }
  }
}

@media only screen and (max-width: 1000px) {
  .LedarOMeter {
    max-width: 500px;
    position: relative;
    img {
      width: 500px;
      max-width: 500px !important;
    }
    .Ledare {
      height: 30px;
      width: 40px;
    }

    @for $i from 1 through 10 {
      .Ledare1-#{$i} {
        top: 32px;
        left: -30px + ($i * 46px);
      }
    }
    @for $i from 1 through 10 {
      .Ledare2-#{$i} {
        top: 80px;
        left: -30px + ($i * 46px);
      }
    }
  }
}
@media only screen and (max-width: 499px) {
  .LedarOMeter {
    max-width: 300px;
    position: relative;
    img {
      width: 300px;
      max-width: 300px !important;
    }
    .Ledare {
      height: 20px;
      width: 25px;
    }

    @for $i from 1 through 10 {
      .Ledare1-#{$i} {
        top: 22px;
        left: -20px + ($i * 28px);
      }
    }
    @for $i from 1 through 10 {
      .Ledare2-#{$i} {
        top: 46px;
        left: -20px + ($i * 28px);
      }
    }
  }
}
</style>
