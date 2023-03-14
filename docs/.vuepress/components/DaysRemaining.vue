<template>
  <div
    class="DaysRemaining"
    :class="{ 'DaysRemaining--done': daysLeft === daysToShow }"
  >
    <span class="DaysRemaining__days">{{ daysToShow }} dagar kvar</span>
  </div>
</template>

<script>
import dayjs from "dayjs";
export default {
  data() {
    return {
      daysLeft: dayjs("2023-06-19").diff(dayjs(), "day"),
      daysToShow: dayjs("2023-06-19").diff(dayjs(), "day") + 33,
    };
  },
  mounted() {
    this.countdown();
  },
  methods: {
    countdown() {
      if (this.daysToShow > this.daysLeft) {
        setTimeout(() => {
          this.daysToShow--;
          this.countdown();
        }, (this.daysToShow - this.daysLeft) * 2);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.DaysRemaining {
  font-family: "Luckiest Guy";
  font-size: 1.5rem;
  opacity: 0.5;
  &--done {
    animation: bounce 0.5s cubic-bezier(0.28, 0.84, 0.42, 1) forwards;
  }
}

@keyframes bounce {
  0% {
    transform: scale(1, 1) translateY(0);
    opacity: 0.5;
  }
  33% {
    transform: scale(1.5, 1.5) translateY(0);
    opacity: 0.6;
  }
  66% {
    transform: scale(1, 1) translateY(0);
    opacity: 0.7;
  }

  100% {
    transform: scale(1.5, 1.5) translateY(0);
    opacity: 1;
  }
}
</style>
