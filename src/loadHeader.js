import  spriteGa from './images/spriteSVG.svg';
import  milkGa from './images/milkSVG.svg';

let loadHeader = () => {
    // let imageHolder = document.createElement('div');
    let spriteG = document.createElement("img");
    spriteG.src = spriteGa;
    let milkG = document.createElement("img");
    milkG.src = milkGa;
    // imageHolder.append(milkG, spriteG);
    document.getElementById("header").prepend(milkG);
    document.getElementById("header").append(spriteG);
}

export default loadHeader;