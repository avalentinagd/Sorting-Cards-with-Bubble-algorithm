/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = function() {
  let middle = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let rmiddle = Math.floor(Math.random() * middle.length);
  let x = document.querySelector("#middle");
  x.innerHTML = middle[rmiddle];

  let simbol = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  let rsimbol = Math.floor(Math.random() * simbol.length);
  let y = document.querySelector("#up");
  y.innerHTML = simbol[rsimbol];

  let z = document.querySelector("#down");
  z.innerHTML = simbol[rsimbol];

  if (simbol[rsimbol] == "&hearts;" || simbol[rsimbol] == "&diams;") {
    y.style.color = "red";
    z.style.color = "red";
  }
};
