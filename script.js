/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./data.js":
/*!*****************!*\
  !*** ./data.js ***!
  \*****************/
/*! exports provided: data */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
const data = [[["forest", "лес", "https://extxe.com/wp-content/uploads/2019/04/%D0%BB%D0%B5%D1%81.jpg", "./src/audio/forest.mp3"], ["lighthing", "молния", "https://www.hse.ru/data/2019/04/24/1182248603/3iStock-940583584.jpg", "./src/audio/lightning.mp3"], ["rain", "дождь", "https://i.ytimg.com/vi/1-Z0EAobu_I/maxresdefault.jpg", "./src/audio/rain.mp3"], ["river", "река", "https://www.sb.by/upload/resize_cache/slam.image/iblock/610/855_2000_1/610ac3d8bb3ffb315d220fd5b3a59552.jpg", "./src/audio/river.mp3"], ["sky", "небо", "https://v-kosmose.com/wp-content/uploads/2017/03/8933.jpg", "./src/audio/sky.mp3"], ["snow", "снег", "https://klike.net/uploads/posts/2019-01/1547712226_1.jpg", "./src/audio/snow.mp3"], ["star", "звезда", "https://s13.stc.all.kpcdn.net/share/i/12/11199205/inx960x640.jpg", "./src/audio/star.mp3"], ["sun", "солнце", "https://www.poisknews.ru/wp-content/uploads/2020/01/shutterstock_1509870626-1500x500.jpg", "./src/audio/sun.mp3"]], [["bird", "птицы", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQTEIFTMN2Q40HYurdwqWBreGMv4Yjqb4PCa1WJmgzLL_-mjRzN&usqp=CAU", "./src/audio/bird.mp3"], ["cat", "кот", "https://www.belnovosti.by/sites/default/files/2020-01/5_28.jpg", "./src/audio/cat.mp3"], ["shark", "акула", "https://cdn.iz.ru/sites/default/files/styles/900x506/public/news-2019-03/TASS_17803801.jpg?itok=j06ZHFOC", "./src/audio/shark.mp3"], ["dog", "собака", "https://i.ytimg.com/vi/nLTTa0ToTU8/maxresdefault.jpg", "./src/audio/dog.mp3"], ["fish", "рыба", "https://i.pinimg.com/originals/e8/28/08/e82808ad3d19def0ba54b9a41f388267.jpg", "./src/audio/fish.mp3"], ["monkey", "обезьяна", "https://simple-fauna.ru/wp-content/uploads/2018/05/obezyany.jpg", "./src/audio/monkey.mp3"], ["tiger", "тигр", "https://s12.stc.all.kpcdn.net/share/i/12/11049186/inx960x640.jpg", "./src/audio/tiger.mp3"], ["wolf", "волк", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Canis_lupus_265b.jpg/275px-Canis_lupus_265b.jpg", "./src/audio/wolf.mp3"]], [["smile", "улыбаться", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTTJmTjy9dc0UEz3P5UafPYyWECq5NMX8pbo1G98LL40vZLhDcy&usqp=CAU", "./src/audio/smile.mp3"], ["cry", "плакать", "https://proza.ru/pics/2013/10/12/1730.jpg", "./src/audio/cry.mp3"], ["angry", "злиться", "https://n1s2.hsmedia.ru/c3/d4/2d/c3d42d31b6fb3ab1af37b452bba74088/440x326_21_215a124127e8bea5052fb889dfd41c41@690x460_0xc0a8392b_16001545251490974031.jpeg", "./src/audio/angry.mp3"], ["fear", "страх", "https://klike.net/uploads/posts/2019-01/1548661596_3.jpg", "./src/audio/fear.mp3"], ["curiosity", "любопытство", "https://republic.ru/images/photos/780/2fffbaa33c2c7a2425d7bef30b28e88f.jpeg", "./src/audio/curiosity.mp3"], ["happy", "счастье", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRc5HeGqYYsFOYQfU67A_9xguYJrr6zgGOZvxKx0tdF8FsFypCN&usqp=CAU", "./src/audio/happy.mp3"], ["boredom", "скука", "https://www.psychologos.ru/images/27662e2abe270e6ba7a3bf093c601bae.jpg", "./src/audio/boredom.mp3"], ["hurt", "боль", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQImHymmTMrNqyaJxjAPBF_WT9-datovUA5JvO0Crb-M7yCpJ7Z&usqp=CAU", "./src/audio/hurt.mp3"]], [["jump", "прыгать", "https://sportstyle-shop.com/upload/iblock/c44/c443d9514004478d1f61d33f172a0862.jpg", "./src/audio/jump.mp3"], ["lie", "лежать", "https://media.istockphoto.com/photos/children-lying-upside-down-on-bed-picture-id177723822", "./src/audio/lie.mp3"], ["sit", "сидеть", "https://politeka.net/crops/090a46/620x0/1/0/2019/02/06/WzgjZr11hBOeuHU8hwRIpi6XgtOkFdUQ.jpg", "./src/audio/sit.mp3"], ["swim", "плавать", "https://radio1.news/files/image/07/08/49/-lg!nbx.jpg", "./src/audio/swim.mp3"], ["throw", "бросать", "https://2kita.by/upload/sh/imagecache/b9f/95f/f157c20f1b43c2d35bf4ca361787a84e.jpg", "./src/audio/throw.mp3"], ["catch", "ловить", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR1izw9V2bzF3TA1S-eUGhyh59G2GH6AZw_gYm1_LXsWvnLz7S5&usqp=CAU", "./src/audio/catch.mp3"], ["fly", "лететь", "https://i-fly.su/upload/medialibrary/fde/deti03.jpg", "./src/audio/fly.mp3"], ["write", "писать", "https://купить-текст.рф/wp-content/uploads/2018/07/kopirajting-i-rerajting-tseny.jpg", "./src/audio/write.mp3"]], [["hat", "шапка", "https://ae01.alicdn.com/kf/HTB1TF.3cvJNTKJjSspoq6A6mpXaB/Molixinyu-2017.jpg", "./src/audio/hat.mp3"], ["shoes", "обувь", "https://blizko.by/system/photos/data/000/014/829/original/1.jpg?1519733538", "./src/audio/shoe.mp3"], ["costume", "костюм", "https://britishroom.ru/common/htdocs/upload/fm/kostyum-v-anglijskom-stile.jpg", "./src/audio/costume.mp3"], ["shirt", "рубашка", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQtK-d9-b4EaTsGxCjM8gXEVV6JH5FY56ls_ycUEct_eJ2Ytmld&usqp=CAU", "./src/audio/shirt.mp3"], ["short", "шорты", "https://modnica.info/wp-content/uploads/2014/04/1904-01.jpg", "./src/audio/short.mp3"], ["jacket", "куртка", "https://i.pinimg.com/736x/6c/ba/92/6cba92dc9b42dddd0bbe7987c9f7547e.jpg", "./src/audio/jacket.mp3"], ["cap", "кепка", "https://newbalance.ru/upload/iblock/9dc/mh834047rdw_40.jpg", "./src/audio/cap.mp3"], ["dress", "платье", "https://ms1.relax.by/images/07d5b2c4e6f0d23bf9ff9c6413fa94c1/resize/w%3D1200%2Ch%3D800%2Cq%3D80/product_photo/67/8c/05/678c05f8516b279ef2aee143b93a8151.jpg", "./src/audio/dress.mp3"]], [["clock", "часы", "https://images-na.ssl-images-amazon.com/images/I/812L5zyAmpL._AC_SL1500_.jpg", "./src/audio/clock.mp3"], ["phone", "телефон", "https://avatars.mds.yandex.net/get-mpic/1453843/img_id2840174048493358067.jpeg/9hq", "./src/audio/phone.mp3"], ["television", "телевизор", "https://www.ferra.ru/thumb/1800x0/filters:quality(75):no_upscale()/imgs/2019/09/06/15/3550315/6b83467fdefbdf89e2837a8b3bf5b3b9d1f5e04e.jpg", "./src/audio/television.mp3"], ["printer", "принтер", "https://www.expertcen.ru/uploads/article/rating/2016/07/591/500_4e975918fddee61ce8bab476804f6be7.jpg", "./src/audio/printer.mp3"], ["car", "машина", "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSvzwvvFSkBA6Hcfg5l3aSChY2in5dJcQwf5x7CDp6G8XEW2jRm&usqp=CAUg", "./src/audio/car.mp3"], ["airplane", "самолет", "https://www.biletik.aero/upload/iblock/a4b/a4bbd91ec672f4380814b219cc4ac41a.jpg", "./src/audio/airplane.mp3"], ["motorcycle", "мотоцикл", "https://miro.medium.com/max/4096/1*fInuASFNJKtZn5iE_iP-MQ.jpeg", "./src/audio/motorcycle.mp3"], ["bike", "велосипед", "https://deiz.by/image/cache/catalog/bike/2018/Greenway/275m031-1500x1500.jpg", "./src/audio/bike.mp3"]], [["football", "футбол", "https://www.pressball.by/images/stories/2019/10/20191023234251.jpg", "./src/audio/football.mp3"], ["referee", "судья", "https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F451278462%2F960x0.jpg%3Ffit%3Dscale", "./src/audio/referee.mp3"], ["gymnastic", "гимнастика", "https://i.insider.com/4fe0db41eab8ea7523000014?width=600&format=jpeg&auto=webp", "./src/audio/gymnastic.mp3"], ["wrestling", "борьба", "https://upload.wikimedia.org/wikipedia/commons/8/82/2016_Summer_Olympics%2C_Men%27s_Freestyle_Wrestling_57_kg_21.jpg", "./src/audio/wrestling.mp3"], ["basketball", "батскетбол", "https://ss.sport-express.ru/userfiles/materials/153/1533335/large.jpg", "./src/audio/basketball.mp3"], ["volleyball", "волейбол", "https://img.championat.com/s/735x490/news/big/k/a/ssha-rossija-brazilija-polsha-14-ijulja_1563103706681973822.jpg", "./src/audio/volleyball.mp3"], ["swim", "плавание", "https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/EK_Zwemmen_2006_100m_vlinder_vrouwen.jpg/1200px-EK_Zwemmen_2006_100m_vlinder_vrouwen.jpg", "./src/audio/swim.mp3"], ["run", "бег", "https://мои-правила.рф/wp-content/uploads/2019/03/jak-zaczac-biegac-1.jpg", "./src/audio/run.mp3"]], [["bed", "кровать", "https://www.mebelminsk.by/system/products/image1s/000/073/989/original/9_aphina_2.jpg?1511773074", "./src/audio/bed.mp3"], ["fridge", "холодильник", "https://cdn5.vectorstock.com/i/1000x1000/32/84/fridge-vector-13243284.jpg", "./src/audio/fridge.mp3"], ["chair", "стул", "https://cdn.laredoute.com/products/641by641/0/b/a/0ba68bc7265f2d8f55b17091b682218d.jpg", "./src/audio/chair.mp3"], ["table", "стол", "https://i.ytimg.com/vi/94sp0VHuQnk/maxresdefault.jpg", "./src/audio/table.mp3"], ["cupboard", "шкаф", "https://5.imimg.com/data5/YS/QT/MY-50347607/modern-cupboard-500x500.jpg", "./src/audio/cupboard.mp3"], ["shelf", "полка", "https://iddi.ua/image/catalog/easyphoto/12856/polka-nastennaya-pl-1-92-18-loft-design-1.jpg", "./src/audio/shelf.mp3"], ["door", "дверь", "https://content.onliner.by/news/1400x5616/d05dc6a661d20b5597b66ec6dea8975f.jpeg", "./src/audio/door.mp3"], ["mirror", "зеркало", "https://i.pinimg.com/originals/f5/23/f4/f523f4cc83c99fff93859e20edeb8a6c.jpg", "./src/audio/mirror.mp3"]]];

/***/ }),

/***/ "./src/cards.js":
/*!**********************!*\
  !*** ./src/cards.js ***!
  \**********************/
/*! exports provided: arr, drawCards */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "arr", function() { return arr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawCards", function() { return drawCards; });
/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../data */ "./data.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


let arr = [];
const drawCards = () => {
  const card = document.querySelectorAll(".content__cards");
  const content = document.querySelector(".content .wrapper");
  const stateObj = {
    foo: "/"
  };
  const li = document.querySelectorAll('.header ul li');
  const linkMainPage = document.querySelector('.link__main-page');

  const createTemplate = index => {
    content.innerHTML = "";

    for (let i = 0; i < _data__WEBPACK_IMPORTED_MODULE_0__["data"][index].length; i++) {
      const div = document.createElement("div");
      div.className = "content__cards";
      content.appendChild(div);
      div.innerHTML = `<img class = 'content__img' src = '${_data__WEBPACK_IMPORTED_MODULE_0__["data"][index][i][2]}'>
      <div class='subtitle'>
        <span>${_data__WEBPACK_IMPORTED_MODULE_0__["data"][index][i][0]}</span>
        <div class = 'cards__return'></div>
        <audio>
          <source src="${_data__WEBPACK_IMPORTED_MODULE_0__["data"][index][i][3]}" >
        </audio>
      </div>`;
      const contentImg = document.querySelectorAll('.content__img');
      const spanText = document.querySelectorAll('.subtitle span');
      const cardsReturn = document.querySelectorAll('.cards__return'); //audio

      contentImg[i].addEventListener('click', () => {
        const audio = document.createElement('audio');

        if (document.getElementsByClassName('header__button')[0].innerText === 'TRAIN') {
          audio.innerHTML = `<source src="${_data__WEBPACK_IMPORTED_MODULE_0__["data"][index][i][3]}" ></source>`;
          div.append(audio);
          audio.play();
        }
      }); //переворот картинки

      cardsReturn[i].addEventListener('click', () => {
        contentImg[i].style.transform = "rotateY(180deg)";
        spanText[i].innerHTML = _data__WEBPACK_IMPORTED_MODULE_0__["data"][index][i][1];
        cardsReturn[i].style.opacity = '0';
        const contentCards = document.querySelectorAll('.content__cards');
        contentCards[i].addEventListener('mouseout', () => {
          contentImg[i].style.transform = "rotateY(0deg)";
          spanText[i].innerHTML = _data__WEBPACK_IMPORTED_MODULE_0__["data"][index][i][0];
          cardsReturn[i].style.opacity = '1';
        });
      });
    }
  }; //main page


  card.forEach((item, i) => {
    item.onclick = () => {
      li.forEach(i => i.style.color = '#672a26');
      li[i].style.color = '#ffffff';
      history.pushState(stateObj, "page 2", "/");
      createTemplate(i);
      arr = _data__WEBPACK_IMPORTED_MODULE_0__["data"][i];
    };
  }); //menu

  for (let i = 0; i < li.length; i++) {
    li[i].color = '#672a26';

    li[i].onclick = () => {
      history.pushState(stateObj, "page 2", "/");
      _constants__WEBPACK_IMPORTED_MODULE_1__["ulLink"].style.left = '-400px';
      linkMainPage.style.color = '#672a26';
      li.forEach(i => i.style.color = '#672a26');
      li[i].style.color = '#ffffff';
      createTemplate(i);
    };
  }
};

/***/ }),

/***/ "./src/constants.js":
/*!**************************!*\
  !*** ./src/constants.js ***!
  \**************************/
/*! exports provided: headerButton, button, buttonPlay, buttonTrain, menu, ulLink, contentWrapper */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "headerButton", function() { return headerButton; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "button", function() { return button; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonPlay", function() { return buttonPlay; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buttonTrain", function() { return buttonTrain; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "menu", function() { return menu; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ulLink", function() { return ulLink; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "contentWrapper", function() { return contentWrapper; });
const headerButton = document.querySelector('.header__button');
const button = document.querySelector('.header__button_play');
const buttonPlay = document.querySelector('.button_play');
const buttonTrain = document.querySelector('.button_train');
const menu = document.querySelector('.header__menu');
const ulLink = document.querySelector('.header ul');
const contentWrapper = document.querySelector('.content .wrapper');

/***/ }),

/***/ "./src/img/main_page/bear.jpg":
/*!************************************!*\
  !*** ./src/img/main_page/bear.jpg ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/bear.jpg");

/***/ }),

/***/ "./src/img/main_page/bed.jpg":
/*!***********************************!*\
  !*** ./src/img/main_page/bed.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/bed.jpg");

/***/ }),

/***/ "./src/img/main_page/clothes.jpg":
/*!***************************************!*\
  !*** ./src/img/main_page/clothes.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/clothes.jpg");

/***/ }),

/***/ "./src/img/main_page/emotion.jpg":
/*!***************************************!*\
  !*** ./src/img/main_page/emotion.jpg ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/emotion.jpg");

/***/ }),

/***/ "./src/img/main_page/football.jpg":
/*!****************************************!*\
  !*** ./src/img/main_page/football.jpg ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/football.jpg");

/***/ }),

/***/ "./src/img/main_page/laptop.jpg":
/*!**************************************!*\
  !*** ./src/img/main_page/laptop.jpg ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/laptop.jpg");

/***/ }),

/***/ "./src/img/main_page/sky.jpg":
/*!***********************************!*\
  !*** ./src/img/main_page/sky.jpg ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/sky.jpg");

/***/ }),

/***/ "./src/img/main_page/smile.jpg":
/*!*************************************!*\
  !*** ./src/img/main_page/smile.jpg ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/smile.jpg");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _img_main_page_clothes_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./img/main_page/clothes.jpg */ "./src/img/main_page/clothes.jpg");
/* harmony import */ var _img_main_page_bear_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/main_page/bear.jpg */ "./src/img/main_page/bear.jpg");
/* harmony import */ var _img_main_page_bed_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./img/main_page/bed.jpg */ "./src/img/main_page/bed.jpg");
/* harmony import */ var _img_main_page_football_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./img/main_page/football.jpg */ "./src/img/main_page/football.jpg");
/* harmony import */ var _img_main_page_laptop_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./img/main_page/laptop.jpg */ "./src/img/main_page/laptop.jpg");
/* harmony import */ var _img_main_page_sky_jpg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./img/main_page/sky.jpg */ "./src/img/main_page/sky.jpg");
/* harmony import */ var _img_main_page_smile_jpg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./img/main_page/smile.jpg */ "./src/img/main_page/smile.jpg");
/* harmony import */ var _img_main_page_emotion_jpg__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./img/main_page/emotion.jpg */ "./src/img/main_page/emotion.jpg");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./constants */ "./src/constants.js");
/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./menu */ "./src/menu.js");
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./cards */ "./src/cards.js");
/* harmony import */ var _play__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./play */ "./src/play.js");













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
    cardsArr.forEach(item => {
      if (buttonMode) {
        item.style.background = "linear-gradient(to bottom, #83ace9 80%, #83ace9 20%)";
        _constants__WEBPACK_IMPORTED_MODULE_8__["ulLink"].style.background = "linear-gradient(to right, #83ace9, rgb(188, 205, 232)";
      } else {
        item.style.background = "linear-gradient(to bottom, #65c4a7 80%, #65c4a7 20%)";
        _constants__WEBPACK_IMPORTED_MODULE_8__["ulLink"].style.background = "linear-gradient(to right, #679788, #9ae8d1)";
      }
    });
  }

  menu() {
    const cardsArr = document.querySelectorAll(".content__cards");
    const li = document.createElement('div');
    li.className = 'link__main-page';
    li.innerText = 'Main page';
    _constants__WEBPACK_IMPORTED_MODULE_8__["ulLink"].appendChild(li);
    cardsArr.forEach(item => {
      const menyList = document.createElement("li");
      menyList.innerText = item.lastChild.innerText;
      _constants__WEBPACK_IMPORTED_MODULE_8__["ulLink"].appendChild(menyList);
    });
  }

}

window.addEventListener("DOMContentLoaded", function () {
  let buttonMode = true;
  let nature = new Card("Nature", _img_main_page_sky_jpg__WEBPACK_IMPORTED_MODULE_5__["default"]);
  const animal = new Card("Animal", _img_main_page_bear_jpg__WEBPACK_IMPORTED_MODULE_1__["default"]);
  const emotion = new Card("Emotion", _img_main_page_smile_jpg__WEBPACK_IMPORTED_MODULE_6__["default"]);
  const action = new Card("Action", _img_main_page_emotion_jpg__WEBPACK_IMPORTED_MODULE_7__["default"]);
  const clothes = new Card("Clothes", _img_main_page_clothes_jpg__WEBPACK_IMPORTED_MODULE_0__["default"]);
  const technics = new Card("Technics", _img_main_page_laptop_jpg__WEBPACK_IMPORTED_MODULE_4__["default"]);
  const sport = new Card("Sport", _img_main_page_football_jpg__WEBPACK_IMPORTED_MODULE_3__["default"]);
  const furniture = new Card("Furniture", _img_main_page_bed_jpg__WEBPACK_IMPORTED_MODULE_2__["default"]);

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
    _constants__WEBPACK_IMPORTED_MODULE_8__["button"].onclick = () => {
      new Card().changeStyle(buttonMode);
      const arrSubtitle = document.getElementsByClassName("subtitle");
      const contentImg = document.getElementsByClassName("content__img");
      const contentCards = document.getElementsByClassName("content__cards");

      if (buttonMode) {
        //play
        [...arrSubtitle].forEach(item => item.classList.add("display_none"));

        if (contentCards[0].innerText !== "Nature") {
          Object(_play__WEBPACK_IMPORTED_MODULE_11__["play"])();
          [...contentImg].forEach(i => i.classList.toggle('img_height'));
        }

        buttonMode = !buttonMode;
        _constants__WEBPACK_IMPORTED_MODULE_8__["buttonPlay"].style.display = "none";
        _constants__WEBPACK_IMPORTED_MODULE_8__["buttonTrain"].style.display = "block";
        const start = Date.now();
        _constants__WEBPACK_IMPORTED_MODULE_8__["headerButton"].className = "header__button header__button_off";
        const timer = setInterval(function () {
          let timePassed = Date.now() - start;
          _constants__WEBPACK_IMPORTED_MODULE_8__["button"].style.left = timePassed / 3.4 + "px";

          if (timePassed > 300) {
            clearInterval(timer);
          }
        }, 10);
      } else {
        //train
        if (contentCards[0].innerText === "Nature") {
          [...contentImg].forEach(i => i.classList.toggle('img_height'));
        }

        [...arrSubtitle].forEach(item => item.classList.remove("display_none"));
        [...contentImg].forEach(i => i.classList.toggle('img_height'));
        buttonMode = !buttonMode;
        _constants__WEBPACK_IMPORTED_MODULE_8__["buttonPlay"].style.display = "block";
        _constants__WEBPACK_IMPORTED_MODULE_8__["buttonTrain"].style.display = "none";
        let start = 300;
        _constants__WEBPACK_IMPORTED_MODULE_8__["headerButton"].className = "header__button header__button_on";
        const timer = setInterval(function () {
          start -= 10;
          let timePassed = start - 10;
          _constants__WEBPACK_IMPORTED_MODULE_8__["button"].style.left = timePassed / 3.4 + "px";

          if (timePassed == 0) {
            clearInterval(timer);
          }
        }, 10);
      }
    };
  };

  initButton();

  _constants__WEBPACK_IMPORTED_MODULE_8__["menu"].onclick = () => {
    Object(_menu__WEBPACK_IMPORTED_MODULE_9__["handlMenu"])();
  };

  Object(_cards__WEBPACK_IMPORTED_MODULE_10__["drawCards"])();
  const li = document.querySelector('.link__main-page');
  const linkPages = document.querySelectorAll('ul li');

  li.onclick = () => {
    li.style.color = '#ffffff';
    _constants__WEBPACK_IMPORTED_MODULE_8__["ulLink"].style.left = '-400px';
    [...linkPages].forEach(i => i.style.color = '#672a26');
    const content = document.querySelector(".content .wrapper");
    content.innerHTML = "";
    init();
    Object(_cards__WEBPACK_IMPORTED_MODULE_10__["drawCards"])();
  };

  window.addEventListener("popstate", function (e) {
    e.preventDefault();
    const content = document.querySelector(".content .wrapper");
    content.innerHTML = "";
    init();
    Object(_cards__WEBPACK_IMPORTED_MODULE_10__["drawCards"])();
  });
  history.back();
});

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/*! exports provided: handlMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handlMenu", function() { return handlMenu; });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constants */ "./src/constants.js");

const handlMenu = () => {
  if (_constants__WEBPACK_IMPORTED_MODULE_0__["ulLink"].style.left === '0px') {
    _constants__WEBPACK_IMPORTED_MODULE_0__["ulLink"].style.left = '-400px';
    _constants__WEBPACK_IMPORTED_MODULE_0__["menu"].style.width = '15px';
  } else {
    _constants__WEBPACK_IMPORTED_MODULE_0__["ulLink"].style.left = '0px';
    _constants__WEBPACK_IMPORTED_MODULE_0__["menu"].style.width = '60px';
  }
};

/***/ }),

/***/ "./src/play.js":
/*!*********************!*\
  !*** ./src/play.js ***!
  \*********************/
/*! exports provided: play */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "play", function() { return play; });
/* harmony import */ var _cards__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cards */ "./src/cards.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constants */ "./src/constants.js");


const play = () => {
  let pathAudioImg = '';
  let pathAudioBtn = '';
  const cards = document.getElementsByClassName('content__cards');
  let arrAudio = [];

  for (let i = 0; i < _cards__WEBPACK_IMPORTED_MODULE_0__["arr"].length; i++) {
    arrAudio.push(_cards__WEBPACK_IMPORTED_MODULE_0__["arr"][i][3]);
  } // random arr audio


  const randomSort = () => {
    arrAudio.sort(() => Math.random() - 0.5);
  };

  const a = document.querySelectorAll('.win');
  const reting = document.createElement('div');
  reting.className = 'reting';
  _constants__WEBPACK_IMPORTED_MODULE_1__["contentWrapper"].prepend(reting);
  randomSort();
  [...cards].forEach(item => {
    item.addEventListener('click', e => {
      pathAudioImg = e.target.parentElement.children[1].children[2].currentSrc;

      if (pathAudioImg === pathAudioBtn && a.length < 1) {
        const starGold = document.createElement('div');
        starGold.className = 'star__gold';
        reting.appendChild(starGold);
        const spanWin = document.createElement('div');
        spanWin.className = 'win';
        document.body.append(spanWin);
        spanWin.innerHTML = `<audio class = "win__audio"><source src="./src/audio/win31.mp3" ></audio>`;
        const winAudio = document.querySelector('.win__audio');
        winAudio.play();
        item.style.opacity = '.5';
        arrAudio.shift();
        setTimeout(() => spanWin.remove(), 1000);
        setTimeout(() => {
          for (let i = 0; i < arrAudio.length; i++) {
            btnPlay.innerHTML = `<audio class = 'audio__game'>
                            <source src="${arrAudio[0]}" >
                            </audio>`;
          }

          const audio = document.querySelectorAll('.audio__game');
          audio[0].play();
          pathAudioBtn = document.getElementsByClassName('audio__game')[0].children[0].src;

          if (arrAudio.length < 1) {
            const btn = document.querySelector('.button__play');
            const starLength = document.querySelectorAll('.star__simple');
            console.log(starLength.length);

            if (starLength.length === 0) {
              _constants__WEBPACK_IMPORTED_MODULE_1__["contentWrapper"].innerHTML = `<h1>WIN</h1> 
                            <div class = 'resul_page'></div>`;
              setTimeout(() => location.reload(true), 2000);
              btn.remove();
            } else {
              _constants__WEBPACK_IMPORTED_MODULE_1__["contentWrapper"].innerHTML = `<h1>${starLength.length} errors</h1> 
                            <div class = 'bad-resul_page'></div>`;
              setTimeout(() => location.reload(true), 2000);
              btn.remove();
            }
          }
        }, 1000);
      } else {
        const starSimple = document.createElement('div');
        starSimple.className = 'star__simple';
        reting.appendChild(starSimple);
        const spanWin = document.createElement('div');
        document.body.append(spanWin);
        spanWin.innerHTML = '<audio class = "win__audio"><source src="./src/audio/failure.mp3" ></audio>';
        const winAudio = document.querySelector('.win__audio');
        winAudio.play();
        setTimeout(() => spanWin.remove(), 500);
      }
    });
  });
  const btnPlay = document.createElement('div');
  btnPlay.classList.add('button__play');
  btnPlay.innerText = 'PLAY';
  document.body.append(btnPlay);
  btnPlay.addEventListener('click', () => {
    btnPlay.classList.add('button_repeat');
    btnPlay.innerText = '';

    for (let i = 0; i < arrAudio.length; i++) {
      btnPlay.innerHTML = `<audio class = 'audio__game'>
            <source src="${arrAudio[0]}" >
            </audio>`;
    }

    const audio = document.querySelectorAll('.audio__game');
    audio[0].play();
    pathAudioBtn = document.getElementsByClassName('audio__game')[0].children[0].src;
  });
};

/***/ }),

/***/ "./src/sass/style.scss":
/*!*****************************!*\
  !*** ./src/sass/style.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 0:
/*!**************************************************!*\
  !*** multi ./src/index.js ./src/sass/style.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/index.js */"./src/index.js");
module.exports = __webpack_require__(/*! ./src/sass/style.scss */"./src/sass/style.scss");


/***/ })

/******/ });
//# sourceMappingURL=script.js.map