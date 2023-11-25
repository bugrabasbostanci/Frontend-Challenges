const formEl = document.querySelector(".form");

formEl.addEventListener("submit", function (e) {
  // prevent the page reload
  e.preventDefault();

  // get rating value
  const selectedRating = formEl.rating.value;

  // guard clause
  if (!selectedRating) return;

  // clear formEl innerHTML
  formEl.innerHTML = "";

  const stateEl = `
  <article class="state">
        <img
          src="./assets/images/illustration-thank-you.svg"
          class="state__image"
          alt="state thank you image"
          title="thank you"
          role="presentation"
        />
        <p class="state__message">You selected ${selectedRating} out of 5</p>
        <section class="state__description flex-group">
          <h1 class="state__title">Thank you!</h1>
          <p class="state__text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
          </p>
        </section>
      </article>
  `;

  // add stateEl into main
  formEl.parentElement.innerHTML = stateEl;
});
