import loadFooter from "./loadFooter.js";
import loadHeader from "./loadHeader.js";
import loadHome from "./loadHome.js";
import loadMenu from "./loadMenu.js";
import loadAbout from "./loadAbout.js";
import './style.css';

window.onload = function() {
   loadHeader()
   loadHome();
   loadFooter();

   document.getElementById("homeButt").addEventListener("click", () => {
      loadHome();
   })
   document.getElementById("menuButt").addEventListener("click", () => {
      loadMenu();
   })
   document.getElementById("aboutButt").addEventListener("click", () => {
      loadAbout();
   })

};
