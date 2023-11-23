const cardRateBtns = document.querySelector(".card__rate-buttons");
const submitBtn = document.querySelector(".submit-button");
const cardEl = document.querySelector(".card");

let rateValue;

cardRateBtns.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target;
  rateValue = target.textContent;

  submitBtn.addEventListener("click", function () {
    cardEl.classList.add("submitted");
    const html = `
      <img
        src="./assets/images/illustration-thank-you.svg"
        alt="thank you image"
        class="submitted-card__image"/>
    
        <div class="submitted-card__message">
        You selected ${rateValue} out of 5
        </div>
        <section class="submitted-card__content flex-group">
            <h1 class="submitted-card__title">Thank you!</h1>
            <p class="submitted-card__text">
            We appreciate you taking the time to give a rating. If you ever need
            more support, don’t hesitate to get in touch!
            </p>
        </section>
      `;
    cardEl.innerHTML = html;
  });
});
