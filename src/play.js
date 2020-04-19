import { arr } from './cards';
import { contentWrapper } from './constants'
export const play = () => {
    let pathAudioImg = '';
    let pathAudioBtn = '';
    const cards = document.getElementsByClassName('content__cards')
    let arrAudio = [];
    for(let i = 0; i < arr.length; i++){
        arrAudio.push(arr[i][3])
    }
    // random arr audio
    const randomSort = () => {
        arrAudio.sort(() =>Math.random() - 0.5);
    }
    const a= document.querySelectorAll('.win')
    const reting = document.createElement('div');
    reting.className = 'reting';
    contentWrapper.prepend(reting);
    randomSort();
        [...cards].forEach((item) => {
        item.addEventListener('click', (e) => {
            pathAudioImg = e.target.parentElement.children[1].children[2].currentSrc;
            if(pathAudioImg === pathAudioBtn && a.length < 1){
                    const starGold = document.createElement('div');
                    starGold.className = 'star__gold'
                    reting.appendChild(starGold)
                    const spanWin = document.createElement('div');
                    spanWin.className = 'win'
                    document.body.append(spanWin);
                    spanWin.innerHTML = `<audio class = "win__audio"><source src="./src/audio/win31.mp3" ></audio>`
                    const winAudio = document.querySelector('.win__audio');
                    winAudio.play()
                    item.style.opacity = '.5'
                    arrAudio.shift();
                    setTimeout (() => spanWin.remove(), 1000)
                    
                    setTimeout(() => {
                        for(let i = 0; i < arrAudio.length; i++) {
                            btnPlay.innerHTML = `<audio class = 'audio__game'>
                            <source src="${arrAudio[0]}" >
                            </audio>`
                        }
                        const audio = document.querySelectorAll('.audio__game');
                        audio[0].play();
                        pathAudioBtn = document.getElementsByClassName('audio__game')[0].children[0].src;
                        if(arrAudio.length < 1){
                            const btn = document.querySelector('.button__play')
                            const starLength = document.querySelectorAll('.star__simple')
                            console.log(starLength.length)
                            if(starLength.length === 0){
                                contentWrapper.innerHTML = `<h1>WIN</h1> 
                            <div class = 'resul_page'></div>`
                            setTimeout(() => location.reload(true),2000)
                            btn.remove()
                            }else{
                                contentWrapper.innerHTML = `<h1>${starLength.length} errors</h1> 
                            <div class = 'bad-resul_page'></div>`
                            setTimeout(() => location.reload(true),2000);
                            btn.remove()
                            }
                            
                            

                        }
                    },1000)
            }else{
                const starSimple = document.createElement('div');
                starSimple.className = 'star__simple'
                reting.appendChild(starSimple)
                const spanWin = document.createElement('div');
                document.body.append(spanWin);
                spanWin.innerHTML = '<audio class = "win__audio"><source src="./src/audio/failure.mp3" ></audio>'
                const winAudio = document.querySelector('.win__audio');
                winAudio.play()
                setTimeout (() => spanWin.remove(), 500)
                
            }
        })
    })


    
    const btnPlay = document.createElement('div');
    btnPlay.classList.add('button__play');
    btnPlay.innerText = 'PLAY';
    document.body.append(btnPlay);
    btnPlay.addEventListener('click', () => {
        btnPlay.classList.add('button_repeat');
        btnPlay.innerText = '';
        for(let i = 0; i < arrAudio.length; i++) {
            btnPlay.innerHTML = `<audio class = 'audio__game'>
            <source src="${arrAudio[0]}" >
            </audio>`
        }
        const audio = document.querySelectorAll('.audio__game');
        audio[0].play();
        pathAudioBtn = document.getElementsByClassName('audio__game')[0].children[0].src;

        
    })
    
}