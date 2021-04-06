"use strict";

const myInput = document.getElementById("name");

const dollar = document.getElementById("dollar");
const euro = document.getElementById("euro");
const lira = document.getElementById("lira");
const ruble = document.getElementById("ruble");
const grivna = document.getElementById("grivna");

const getData = () => {
  fetch(
    `http://api.currencylayer.com/live?access_key=d3174dd674f6831ebfa3ab45b697537c&currencies=EUR,USD,TRY,RUB,UAH&source=USD`
  )
    .then((res) => res.json())
    .then(displayCurrency);
};
myInput.addEventListener("input", getData);

const displayCurrency = (res) => {
  euro.innerText = `${res.quotes.USDEUR}` * myInput.value;
  lira.innerText = `${res.quotes.USDTRY}` * myInput.value;
  ruble.innerText = `${res.quotes.USDRUB}` * myInput.value;
  grivna.innerText = `${res.quotes.USDUAH}` * myInput.value;
};

