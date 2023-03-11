<template>
  <div class="AnmalOMeter">
    <img
      :="
        'Hittils har ' +
        count +
        ' barn anmält sig till sommarens roligaste dagar'
      "
      src="https://res.cloudinary.com/dpd5cqqpz/image/upload/v1678545721/fotbollsskola/anmal-o-meter_cboktg.png"
    />
    <div
      class="AnmalOMeter__progress"
      :style="'width: ' + (count / 100) * 89 + '%;'"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    count: Number,
  },
  computed: {
    progressStyle() {
      let progress = this.count / 100;
      let value = 89 * progress;
      console.log(progress);
      return "width " + value + "%;";
    },
  },
};
</script>

<style lang="scss" scoped>
.AnmalOMeter {
  position: relative;
  max-width: 500px;
  .AnmalOMeter__progress {
    position: absolute;
    height: 31%;
    background: linear-gradient(
      225deg,
      rgba(48, 110, 30, 1) 0%,
      rgba(18, 47, 80, 1) 100%
    );
    bottom: 9%;
    left: 6%;
    //transform: rotate(-2.4deg);
    animation: grow 2s ease-out forwards;
    animation-delay: 1s;
    opacity: 0;
  }
}
@keyframes grow {
  from {
    transform: scaleX(0) rotate(0deg);
    transform-origin: center left;
    opacity: 1;
  }
  to {
    opacity: 1;

    transform: scaleX(1) rotate(-2.4deg);
    transform-origin: center left;
  }
}
</style>
