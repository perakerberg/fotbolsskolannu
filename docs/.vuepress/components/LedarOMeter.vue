<template>
  <div class="LedarOMeter">
    <img
      src="https://res.cloudinary.com/dpd5cqqpz/image/upload/v1708101033/ledar-o-meter_vlkup3.png"
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
const bookedCoaches = 4;

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
          console.log("yo", this.coachCount);
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
  max-width: 500px;
  position: relative;
  img {
    width: 500px;
    height: auto;
    position: relative;
  }
  .Ledare--booked {
  }

  .Ledare {
    height: 30px;
    width: 44px;
    position: absolute;
    top: 26px;
    left: 70px;
    opacity: 0.4;
    background-position: center;
    background-size: cover;
    background-image: url("https://res.cloudinary.com/dpd5cqqpz/image/upload/v1708092075/ledartroja_sbhjsk.png");
    &--booked {
      opacity: 1;
      transition: opacity 0.4s ease;
    }
  }

  @for $i from 1 through 10 {
    .Ledare1-#{$i} {
      top: 40px;
      left: -38px + ($i * 48px);
    }
  }
  @for $i from 1 through 10 {
    .Ledare2-#{$i} {
      top: 80px;
      left: -38px + ($i * 48px);
    }
  }
}
@media only screen and (max-width: 500px) {
  .LedarOMeter {
    max-width: 500px;
    position: relative;
    img {
      width: 100vw;
      max-width: 100vw !important;
    }
    .Ledare {
      height: 24px;
      width: 32px;
    }

    @for $i from 1 through 10 {
      .Ledare1-#{$i} {
        top: 32px;
        left: -36px + ($i * 41px);
      }
    }
    @for $i from 1 through 10 {
      .Ledare2-#{$i} {
        top: 64px;
        left: -36px + ($i * 41px);
      }
    }
  }
}
</style>
