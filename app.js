"use strict";

const myInput = document.getElementById("name");
const dollar = document.getElementById("dollar");
const euro = document.getElementById("euro");
const lira = document.getElementById("lira");
const ruble = document.getElementById("ruble");
const grivna = document.getElementById("grivna");

const getDataOnload = () => {
  fetch(
    "http://api.currencylayer.com/live?access_key=d3174dd674f6831ebfa3ab45b697537c&currencies=EUR,USD,TRY,RUB,UAH&source=USD"
  )
    .then((res) => res.json())
    .then(displayCurrency);
  myInput.value = 1;
};

const getData = () => {
  fetch(
    "http://api.currencylayer.com/live?access_key=d3174dd674f6831ebfa3ab45b697537c&currencies=EUR,USD,TRY,RUB,UAH&source=USD"
  )
    .then((res) => res.json())
    .then(displayCurrency);
};
myInput.addEventListener("input", getData);

const displayCurrency = (res) => {
  euro.textContent = (`${res.quotes.USDEUR}` * myInput.value).toFixed(2);
  lira.textContent = (`${res.quotes.USDTRY}` * myInput.value).toFixed(2);
  ruble.textContent = (`${res.quotes.USDRUB}` * myInput.value).toFixed(2);
  grivna.textContent = (`${res.quotes.USDUAH}` * myInput.value).toFixed(2);
};

window.onload = getDataOnload();
