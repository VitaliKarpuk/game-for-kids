import { data } from "../data";
import { ulLink } from './constants';
export let arr = [];
export const drawCards = () => {


  const card = document.querySelectorAll(".content__cards");
  const content = document.querySelector(".content .wrapper");
  const stateObj = { foo: "/" };
  const li = document.querySelectorAll('.header ul li');
  const linkMainPage = document.querySelector('.link__main-page')
  const createTemplate = (index) => {
    content.innerHTML = "";
    for (let i = 0; i < data[index].length; i++) {
      const div = document.createElement("div");
      div.className = "content__cards";
      content.appendChild(div);
      div.innerHTML = `<img class = 'content__img' src = '${data[index][i][2]}'>
      <div class='subtitle'>
        <span>${data[index][i][0]}</span>
        <div class = 'cards__return'></div>
        <audio>
          <source src="${data[index][i][3]}" >
        </audio>
      </div>`
      const contentImg = document.querySelectorAll('.content__img')
      const spanText = document.querySelectorAll('.subtitle span')
      const cardsReturn = document.querySelectorAll('.cards__return');
      //audio
      contentImg[i].addEventListener('click', () => {
        const audio = document.createElement('audio');
        if(document.getElementsByClassName('header__button')[0].innerText === 'TRAIN'){
          audio.innerHTML = `<source src="${data[index][i][3]}" ></source>`
          div.append(audio)
          audio.play();
        }
      })
      //переворот картинки
      cardsReturn[i].addEventListener('click', () => {
        contentImg[i].style.transform = "rotateY(180deg)";
        spanText[i].innerHTML = data[index][i][1]
        cardsReturn[i].style.opacity = '0';
        const contentCards = document.querySelectorAll('.content__cards')
        contentCards[i].addEventListener('mouseout', () => {
          contentImg[i].style.transform = "rotateY(0deg)";
          spanText[i].innerHTML = data[index][i][0];
          cardsReturn[i].style.opacity = '1'
          
        })
      })
    }

  };
  //main page
  card.forEach((item, i) => {
    item.onclick = () => {
      li.forEach(i => i.style.color = '#672a26')
      li[i].style.color = '#ffffff'
      history.pushState(stateObj, "page 2", "/");
      createTemplate(i);
      arr = data[i];
    };
    
    
  });
//menu
    for(let i = 0; i < li.length; i++){
      li[i].color = '#672a26'
      li[i].onclick = () => {
        history.pushState(stateObj, "page 2", "/");
        ulLink.style.left = '-400px'
        linkMainPage.style.color = '#672a26';
        li.forEach(i => i.style.color = '#672a26')
        li[i].style.color = '#ffffff'
        createTemplate(i);
      }
    }

    











};
