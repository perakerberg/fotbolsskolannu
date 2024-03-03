---
title: Reservlista
---

# Reservlista

Hann du inte anmäla ditt barn i tid? Inte så konstigt, platserna gick fort även i år.
Vi vill att så många som möjligt får vara med på fotbollsskolan och erbjuder därför möjligheten att skriva upp ditt barn på vår reservlista.

Om vi får plats i en lämplig åldersgrupp, pga avhopp eller annat så hör vi av oss till dig!
Fyll i dina uppgifter nedan.

<form
  name="reserves-24"
  method="POST"
  netlify-honeypot="bot-field"
  data-netlify="true"
  action="/tack-reserv"
>
  <p class="hidden">
    <label>
      Don’t fill this out if you’re human: <input name="bot-field" />
    </label>
  </p>
  <div style="display: flex; flex-direction: column">
    <span style="font-family: Luckiest Guy; padding-top: 2rem;font-size:1.5rem; display: block;">Barnets Namn: </span>
      <input type="text" name="child-name" style="font-size: 1.5rem; width: 90%" />
      <span style="font-family: Luckiest Guy; padding-top: 2rem;font-size:1.5rem; display: block;"> Barnets födelseår:</span>
      <select name="child-yearofbirth" style="font-size: 1.5rem; width: 90%">
      <option value="2018">2018</option>
      <option value="2017">2017</option>
      <option value="2016">2016</option>
      <option value="2015">2015</option>
      <option value="2014">2014</option>
      <option value="2013">2013</option>
      <option value="2012">2012</option>
      <option value="2011">2011</option>
       </select> 
       <span style="font-family: Luckiest Guy; padding-top: 2rem;font-size:1.5rem; display: block;">Ditt namn: </span>
      <input type="text" name="parent-name" style="font-size: 1.5rem; width: 90%" />
    <span style="font-family: Luckiest Guy; padding-top: 2rem;font-size:1.5rem; display: block;"> Din e-postadress:</span>
      <input type="email" name="parent-email" style="font-size: 1.5rem; width: 90%" />
      <span style="font-family: Luckiest Guy; padding-top: 2rem;font-size:1.5rem; display: block;"> Ditt telefonnummer:</span>
      <input type="tel" name="parent-phone" style="font-size: 1.5rem; width: 90%" />
   <span style="font-family: Luckiest Guy; font-size: 1.5rem; padding-top: 1rem; display:block;">Ev. meddelande</span> 
   <textarea name="message" rows="5" style="font-size: 1.2rem; width: 90%"></textarea>
    <p>
    <button type="submit" style="font-family: Luckiest Guy; font-size: 2rem; padding-top:6px">Skicka</button>
  </p>

</div>
   </form>
