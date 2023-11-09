const summaryResults = document.querySelector(".summary__result");

const getData = async function () {
  try {
    const response = await fetch("./data.json");
    const data = await response.json();
    // console.log(data);
    data.forEach((el) => displayData(el));
  } catch (err) {
    console.error(err);
  }
};

const displayData = function (data) {
  const html = `
  <div class="result__${
    data.category.slice(0, 1).toLowerCase() + data.category.slice(1)
  }">
    <div class="result__logo">
      <img
        src="${data.icon}"
        alt=""
        class="logo__img"
      />
      <div class="logo__text">${data.category}</div>
    </div>
    <div class="result__numbers"><span>${data.score}</span> / 100</div>
  </div>
  `;
  summaryResults.insertAdjacentHTML("beforebegin", html);
};

getData();
