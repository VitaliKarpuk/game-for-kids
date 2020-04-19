import clothe from "./img/main_page/clothes.jpg";
import bear from "./img/main_page/bear.jpg";
import bed from "./img/main_page/bed.jpg";
import footbal from "./img/main_page/football.jpg";
import laptop from "./img/main_page/laptop.jpg";
import sky from "./img/main_page/sky.jpg";
import smile from "./img/main_page/smile.jpg";
import emotions from "./img/main_page/emotion.jpg";
import {
  headerButton,
  button,
  buttonPlay,
  buttonTrain,
  ulLink,
  menu,
} from "./constants";
import { handlMenu } from "./menu";
import { drawCards } from "./cards";
import { play } from './play'


class Card {
  constructor(name, path) {
    this.name = name;
    this.cards = null;
    this.path = path;
  }
  init() {
    const content = document.querySelector(".content .wrapper");
    this.cards = document.createElement("div");
    this.cards.className = "content__cards";
    content.appendChild(this.cards);
    this.cards.innerHTML = `<img class = "content__img"  style= 'width: 300px, height: 250px' src='${this.path}'/>
        <span>${this.name}</span>`;
  }
  changeStyle(buttonMode) {
    const cardsArr = document.querySelectorAll(".content__cards");
    cardsArr.forEach((item) => {
      if (buttonMode)  {
        item.style.background =
          "linear-gradient(to bottom, #83ace9 80%, #83ace9 20%)";
        ulLink.style.background =
          "linear-gradient(to right, #83ace9, rgb(188, 205, 232)";
      } else {
        item.style.background =
          "linear-gradient(to bottom, #65c4a7 80%, #65c4a7 20%)";
        ulLink.style.background = "linear-gradient(to right, #679788, #9ae8d1)";
      }
    });
  }

  menu() {
    const cardsArr = document.querySelectorAll(".content__cards");
    const li = document.createElement('div');
    li.className = 'link__main-page'
    li.innerText = 'Main page'
    ulLink.appendChild(li)
    cardsArr.forEach((item) => {
      const menyList = document.createElement("li");
      menyList.innerText = item.lastChild.innerText;
      ulLink.appendChild(menyList);
    });
  }
}

window.addEventListener("DOMContentLoaded", function() {
  let buttonMode = true;
  let nature = new Card("Nature", sky);
  const animal = new Card("Animal", bear);
  const emotion = new Card("Emotion", smile);
  const action = new Card("Action", emotions);
  const clothes = new Card("Clothes", clothe);
  const technics = new Card("Technics", laptop);
  const sport = new Card("Sport", footbal);
  const furniture = new Card("Furniture", bed);
  const init = () => {
    nature.init();
    animal.init();
    emotion.init();
    action.init();
    clothes.init();
    technics.init();
    sport.init();
    furniture.init();
  };
  init();
  new Card().menu();

  const initButton = () => {
    button.onclick = () => {
      new Card().changeStyle(buttonMode);
      const arrSubtitle = document.getElementsByClassName("subtitle");
      const contentImg = document.getElementsByClassName("content__img");
      const contentCards = document.getElementsByClassName("content__cards")
      if (buttonMode) {
        //play
        [...arrSubtitle].forEach((item) => item.classList.add("display_none"));
        if(contentCards[0].innerText !== "Nature"){
          play();
            [...contentImg].forEach((i) => i.classList.toggle('img_height'));
        }
        buttonMode = !buttonMode;
        buttonPlay.style.display = "none";
        buttonTrain.style.display = "block";
        const start = Date.now();
        headerButton.className = "header__button header__button_off";
        const timer = setInterval(function() {
          let timePassed = Date.now() - start;
          button.style.left = timePassed / 3.4 + "px";
          if (timePassed > 300) {
            clearInterval(timer);
          }
        }, 10);
      } else {
        //train
        if(contentCards[0].innerText === "Nature"){
            [...contentImg].forEach((i) => i.classList.toggle('img_height'));
        }
        [...arrSubtitle].forEach((item) => item.classList.remove("display_none"));
        [...contentImg].forEach((i) => i.classList.toggle('img_height'));
        buttonMode = !buttonMode;
        buttonPlay.style.display = "block";
        buttonTrain.style.display = "none";
        let start = 300;
        headerButton.className = "header__button header__button_on";
        const timer = setInterval(function() {
          start -= 10;
          let timePassed = start - 10;
          button.style.left = timePassed / 3.4 + "px";
          if (timePassed == 0) {
            clearInterval(timer);
          }
        }, 10);
      }
    };
  };
  initButton();

  menu.onclick = () => {
    handlMenu();
  };
  drawCards();
  const li = document.querySelector('.link__main-page')
  const linkPages = document.querySelectorAll('ul li')
  li.onclick = () =>{
    li.style.color = '#ffffff';
    ulLink.style.left = '-400px';
    [...linkPages].forEach(i => i.style.color = '#672a26')
    const content = document.querySelector(".content .wrapper");
    content.innerHTML = "";
    init();
    drawCards();
  }
  window.addEventListener("popstate", function(e) {
    e.preventDefault();
    const content = document.querySelector(".content .wrapper");
    content.innerHTML = "";
    init();
    drawCards();
  });
  history.back();
});