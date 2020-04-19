import { ulLink, menu } from './constants'
export const handlMenu = () => {
    if(ulLink.style.left === '0px'){
        ulLink.style.left = '-400px'
        menu.style.width  = '15px'
    }else{
        ulLink.style.left = '0px'
        menu.style.width  = '60px'
    }
}