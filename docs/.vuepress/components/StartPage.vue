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
      <div class="club-logos">
          
      </div>
  </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.logo{
    padding: 1px;
    border-radius: 10px;
    background: rgb(0,36,14);
background: linear-gradient(180deg, rgba(0,36,14,1) 0%, rgba(19,235,9,1) 0%, rgba(0,114,255,1) 100%);
height: 420px;
width:420px;
display:flex;
flex-direction: column;
align-items: center;
justify-content: center;
font-family: 'Luckiest Guy';
color: white;
.sommarens{
    font-size: 60px;
    position: relative;
    .sun{
        color: yellow;
       animation: pulse 0.5s ease forwards; 
       display: inline-block;
    }
}
.roligaste{
    font-size: 74px;
    .ball{       
       animation: roll 2s ease forwards; 
        animation-delay: 0.5s;
        opacity: 1;
       display: inline-block;
    }
}
.dagar{
    font-size: 120px;
}

}

@keyframes pulse{
    0%{
        transform: scale(1)

    }
    70%{
        transform: scale(3)
    }
    100%{
        transform: scale(1)
    }
}
@keyframes roll{
    0%{
        opacity: 1;
        transform: rotateZ(0deg) translateX(-300px);

    }
    1%{
        opacity: 0;
    }
    
    100%{
        transform: rotateZ(720deg) translateX(0);
    }
}
</style>