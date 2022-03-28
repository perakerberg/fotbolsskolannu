<template><h1>Kontakt</h1> 
<p>Vill du veta mer? Vill du hjälpa till?
Har du en idé om hur vi kan göra detta till <em>sommarens roligaste dagar</em>? Vad du än undrar över - tveka inte med att höra av dig till oss! Använd kontaktformuläret, så hör vi av oss så fort som bara möjligt! 🏃‍♀️ 🏃‍♂️</p>
<form
  name="contact"
  method="POST"
  netlify-honeypot="bot-field"
  data-netlify="true"
  action="/tack"
>
  <p class="hidden">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>
  <div style="display: fle; flex-direction: column">
     <span style="font-family: Luckiest Guy; padding-top: 2rem;font-size:1.5rem; display: block;"> Ditt namn:</span>
      <input type="text" name="name" style="font-size: 1.5rem; width: 90%" />
    <span style="font-family: Luckiest Guy; padding-top: 2rem;font-size:1.5rem; display: block;"> Din e-postadress:</span>
      <input type="text" name="email" style="font-size: 1.5rem; width: 90%" />
   <span style="font-family: Luckiest Guy; font-size: 1.5rem; padding-top: 1rem; display:block;">Meddelande</span> 
   <textarea name="message" rows="15" style="font-size: 1.2rem; width: 90%"/>
  </div>
  <p>
    <button type="submit" style="font-family: Luckiest Guy; font-size: 2rem; padding-top:6px">Skicka</button>
  </p>
</form></template>
