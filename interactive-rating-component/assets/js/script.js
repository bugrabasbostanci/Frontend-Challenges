const cardRateBtns = document.querySelector(".card__rate-buttons");
const submitBtn = document.querySelector(".submit-button");
const submittedCardEl = document.querySelector(".submitted-card");
const submitMessage = document.querySelector(".submitted-card__message");
let rateValue;

cardRateBtns.addEventListener("click", function (e) {
  e.preventDefault();
  const target = e.target;
  rateValue = target.textContent;

  submitBtn.addEventListener("click", function () {
    submittedCardEl.previousElementSibling.classList.add("hidden");
    submittedCardEl.classList.remove("hidden");
    submitMessage.textContent = `You selected ${rateValue} out of 5`;
  });
});
