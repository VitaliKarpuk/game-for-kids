import { arr } from './cards';
export const newGame = () => {
    const audio = document.querySelectorAll('audio');
    const arrAudio = [];
    for(let i = 0; i < arr.length; i++){
    arrAudio.push(arr[i][3])
    }
    const randomSort = () => {
    arrAudio.sort(() =>Math.random() - 0.5);
    }
    randomSort();
    const btnPlay = document.querySelector('.button__play');
    console.log(btnPlay);
    for(let i = 0; i < arrAudio.length; i++){
        btnPlay.addEventListener('click', () => {
        audio.innerHTML = `<source src="${arrAudio[i]}" ></source>`;
        audio[i].play();
    })
    audio.play();
    }
    
}
