import loadContent from "./loadContent.js";
import existence from "./existence.js";


let loadMenu = () => {
    if(existence.menuExist) {
        return;
    }
    existence.menuExist = 1;
    existence.homeExist = 0;
    existence.aboutExist = 0;
    let content = document.getElementById("content");
    content.innerHTML = "";
    loadContent();
}

export default loadMenu;