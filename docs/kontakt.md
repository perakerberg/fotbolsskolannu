<h1>Kontakt</h1> 

Vill du veta mer? Vill du hjälpa till? 
Har du en idé om hur vi kan göra detta till *sommarens roligaste dagar* ? 
Tveka inte att höra av er till oss!

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
  <p>
    <label>
      Email: <input type="text" name="email" />
    </label>
  </p>
  <p>
    <label>
      Message: <textarea name="message"></textarea>
    </label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>