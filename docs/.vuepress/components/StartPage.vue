<template>
  <div class="logo">
    <div class="sommarens">
      <span>S</span><span class="sun">&#9728;</span><span>mmarens</span>
    </div>
    <div class="roligaste">
      <span>R</span><span class="ball">&#9917;</span><span>ligaste</span>
    </div>
    <div class="dagar">
      <span>Dagar!</span>
    </div>
    <div class="dates">
      <span>Fotbollsskola i <b>Öxnevalla</b> och <b>Horred</b></span>
      <span>15-17 Juni 2026</span>
    </div>

    <div class="club-logos">
      <img src="/images/hif_logo.png" class="hif-logo" />
      <img src="/images/svff_logo.png" class="svff-logo" />
      <img src="/images/ifk_logo.png" class="ifk-logo" />
    </div>
    <div class="instructions">Klicka på bilden för att gå vidare</div>
  </div>
</template>

<script></script>

<style lang="scss" scoped>
.instructions {
  padding-top: 1rem;
  opacity: 0;
  animation: appear 0.5s ease forwards;
  animation-delay: 2.5s;
}
.dates {
  font-family: "Verdana";
  font-size: 20px;
  margin-top: -18px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-bottom: 16px;
  span {
    display: block;
  }
}

.logo {
  border-radius: 10px;
  background: rgb(0, 36, 14);
  background: linear-gradient(
    225deg,
    rgba(48, 110, 30, 1) 0%,
    rgba(18, 47, 80, 1) 100%
  );
  height: 460px;
  width: 440px;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Luckiest Guy";
  color: white;
  opacity: 1;
  animation: bounce-in-right 2s ease forwards;

  .sommarens {
    font-size: 60px;
    position: relative;
    .sun {
      color: yellow;
      animation: pulse 0.5s ease forwards;
      animation-delay: 1.3s;
      display: inline-block;
      opacity: 0;
    }
  }
  .roligaste {
    font-size: 74px;
    .ball {
      animation: roll 2s forwards;
      animation-delay: 0.5s;
      opacity: 0;
      display: inline-block;
    }
  }
  .ifk-logo {
    animation: teeter-fw 1s ease forwards;
    animation-delay: 2.2s;
    height: 100px;
  }
  .hif-logo {
    animation: teeter-fw 1s ease forwards;
    animation-delay: 2.4s;
    justify-self: center;
    height: 100px;
  }
  .svff-logo {
    height: 100px;
  }
  .dagar {
    font-size: 120px;
  }
  .club-logos {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 0.5rem;
    height: 100px;
  }
}

@keyframes shrink {
  0% {
    transform: scale(1);
    transform-origin: top left;
    opacity: 1;
  }

  99% {
    transform-origin: top left;

    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform-origin: top left;
    transform: scale(0);

    opacity: 0;
    height: 0;
  }
}
@keyframes appear {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes bounce-in-right {
  0% {
    opacity: 0;
    transform: translateX(2000px);
  }
  60% {
    opacity: 1;
    transform: translateX(-30px);
  }
  80% {
    transform: translateX(10px);
  }
  100% {
    transform: translateX(0);
  }
}
@keyframes pulse {
  0% {
    transform: scale(1);
    opacity: 1;
  }
  70% {
    transform: scale(3);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes teeter-fw {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
  }
}
@keyframes roll {
  0% {
    opacity: 1;
    transform: translateX(-1000px) rotate(0deg);
  }

  100% {
    transform: translateX(0) rotate(7200deg);
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .dates {
    font-size: 16px;
  }

  .logo {
    border-radius: 10px;
    height: 400px;
    width: 380px;
    padding: 1rem;

    .sommarens {
      font-size: 58px;
    }
    .roligaste {
      font-size: 70px;
    }
    .dagar {
      font-size: 112px;
    }
    .club-logos {
      height: 80px;
    }
    .ifk-logo,
    .svff-logo,
    .hif-logo {
      height: 76px;
    }
  }
}

@media screen and (max-width: 400px) {
  .dates {
    font-size: 12px;
  }

  .logo {
    border-radius: 10px;
    height: 350px;
    width: 300px;
    padding: 1rem;

    .sommarens {
      font-size: 46px;
    }
    .roligaste {
      font-size: 56px;
    }
    .dagar {
      font-size: 95px;
    }
    .club-logos {
      height: 55px;
    }
    .ifk-logo,
    .svff-logo,
    .hif-logo {
      height: 55px;
    }
  }
}
</style>
