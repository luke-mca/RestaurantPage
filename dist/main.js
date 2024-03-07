(()=>{"use strict";var e={208:(e,t,n)=>{n.d(t,{A:()=>c});var o=n(601),i=n.n(o),r=n(314),a=n.n(r)()(i());a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Jacquarda+Bastarda+9&display=swap);"]),a.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100..700;1,100..700&display=swap);"]),a.push([e.id,"/* Import Google Fonts */\n\n:root {\n    --dark-green: #008B47;\n    --light-green: #6BB64A;\n    --yellow: #F8CD24;\n    --white: #FDFFF5; \n    font-family: 'Josefin Sans', sans-serif;\n}\nhtml {\n    min-height: 100vw;\n}\nbody {\n    display: flex;\n    flex-direction: column;\n    width: 100vw;\n    margin: 0px;\n}\nbutton {\n    font-family: 'Josefin Sans', sans-serif;\n}\n\n\nheader {\n    height: 80px;\n    background-color: var(--white);\n    display: flex;\n    flex-direction: row;\n    justify-content: space-between;\n    align-items: center;\n    background-color: var(--dark-green);\n    font-family: 'Jacquarda Bastarda 9', sans-serif;\n}\nheader>img {\n    height: 70px;\n    width: 70px;\n    padding: 5px;\n}\nheader>nav>button {\n    font-size: 20px;\n    border: 0px;\n    border-radius: 4px;\n    background-color: transparent;\n    margin: 2px;\n    font-weight: 700;\n    color: var(--white);\n}\nheader>nav>button:active {\n    color: var(--light-green);\n}\n\n\n\n#content {\n    min-height: calc(100vh - 120px);\n    position: relative;\n    background-color: var(--white);\n    padding: 24px;\n    padding-top: 0px;\n}\n#title {\n    height: 48px;\n    font-weight: 700;\n    font-size: 32px;\n    padding: 12px;\n    padding-bottom: 0px;\n    color: var(--dark-green);\n    display: flex;\n    justify-content: center;\n    align-items: center;\n}\n#image-display {\n    height: auto;\n    width: 100%;\n    display: flex;\n    flex-direction: column;\n    background-color: var(--white);\n    gap: 4px;\n}\nbody::-webkit-scrollbar {\n    display: none;\n}\n.big-box {\n    display: flex;\n    flex-direction: row;\n}\n.img-box {\n    width: calc(100%-24px);\n    padding: 30px;\n}\n.img-box>img{\n    max-width: 300px;\n    max-height: 300px;\n    height: auto;\n    border-radius: 12px;\n}\n.image-descrip {\n    font-size: 16px;\n    display: flex;\n    flex-direction: column;\n    justify-content: center;\n    padding: 24px;\n}\n.image-title {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    font-size: 22px;\n    font-weight: 600;\n}\n\n\n#description {\n    font-size: 16px;\n    padding: 14px;\n    padding-top: 0px;\n    word-spacing: 2px;\n    line-height: 28px;\n}\n#bottomHome {\n    display: flex; \n    flex-direction: row;\n    justify-content: space-evenly;\n}\n#hours {\n    padding: 14px;\n}\n#hours>p {\n    text-indent: 0px;\n}\n#location {\n    padding: 14px;\n}\n#locationImage>img {\n    width: 300px;\n}\np {\n    text-indent: 28px;\n}\n\n#owner {\n    margin-top: 108px;\n}\n\n\n\n\n#footer {\n    position: fixed;\n    width: 100vw;\n    bottom: 0px;\n    height: 40px;\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    background-color: var(--dark-green);\n    color: var(--white);\n}",""]);const c=a},314:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n="",o=void 0!==t[5];return t[4]&&(n+="@supports (".concat(t[4],") {")),t[2]&&(n+="@media ".concat(t[2]," {")),o&&(n+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),n+=e(t),o&&(n+="}"),t[2]&&(n+="}"),t[4]&&(n+="}"),n})).join("")},t.i=function(e,n,o,i,r){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(o)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var l=0;l<e.length;l++){var d=[].concat(e[l]);o&&a[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),n&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=n):d[2]=n),i&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=i):d[4]="".concat(i)),t.push(d))}},t}},601:e=>{e.exports=function(e){return e[1]}},72:e=>{var t=[];function n(e){for(var n=-1,o=0;o<t.length;o++)if(t[o].identifier===e){n=o;break}return n}function o(e,o){for(var r={},a=[],c=0;c<e.length;c++){var s=e[c],l=o.base?s[0]+o.base:s[0],d=r[l]||0,p="".concat(l," ").concat(d);r[l]=d+1;var u=n(p),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==u)t[u].references++,t[u].updater(m);else{var h=i(m,o);o.byIndex=c,t.splice(c,0,{identifier:p,updater:h,references:1})}a.push(p)}return a}function i(e,t){var n=t.domAPI(t);return n.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;n.update(e=t)}else n.remove()}}e.exports=function(e,i){var r=o(e=e||[],i=i||{});return function(e){e=e||[];for(var a=0;a<r.length;a++){var c=n(r[a]);t[c].references--}for(var s=o(e,i),l=0;l<r.length;l++){var d=n(r[l]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=s}}},659:e=>{var t={};e.exports=function(e,n){var o=function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}t[e]=n}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(n)}},540:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},56:(e,t,n)=>{e.exports=function(e){var t=n.nc;t&&e.setAttribute("nonce",t)}},825:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(n){!function(e,t,n){var o="";n.supports&&(o+="@supports (".concat(n.supports,") {")),n.media&&(o+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(o+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),o+=n.css,i&&(o+="}"),n.media&&(o+="}"),n.supports&&(o+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,n)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},113:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}}},t={};function n(o){var i=t[o];if(void 0!==i)return i.exports;var r=t[o]={id:o,exports:{}};return e[o](r,r.exports,n),r.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");if(o.length)for(var i=o.length-1;i>-1&&(!e||!/^http(s?):/.test(e));)e=o[i--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e})(),n.nc=void 0,(()=>{const e=n.p+"cfb55086a413f20ab735.svg",t=n.p+"6a4036a01905af0e643c.svg",o={homeExist:!1,menuExist:!1,aboutExist:!1},i=n.p+"1ea4a975e1cf4a91b25a.jpeg",r=()=>{if(o.homeExist)return;o.menuExist=0,o.homeExist=1,o.aboutExist=0;let e=document.getElementById("content");e.innerHTML="";let t=document.createElement("div");t.id="title",t.innerHTML="Milky Sprite Bistro";let n=document.createElement("div");n.id="description";let r=document.createElement("p"),a=document.createElement("p"),c=document.createElement("p");r.textContent="Welcome to Milky Sprite Bistro, an upscale haven where refined flavors intertwine to create an exquisite dining experience. Located in the heart of Tuscaloosa, our restaurant invites you to indulge in a culinary journey like no other.",a.textContent="Our meticulously crafted menu features a fusion of delectable dishes prepared with the finest ingredients, promising a symphony of flavors that tantalize the palate. From succulent Milky Chicken Tenders to delicately prepared Sprite-glazed Salmon, each dish is a masterpiece designed to delight the senses. Elevate your dining experience with our signature Creamy Sprite Float, a velvety indulgence that embodies sophistication and luxury. ",c.textContent="Join us at Milky Sprite for a gastronomic adventure that transcends the ordinary and transports you to culinary bliss.",n.append(r,a,c);let s=document.createElement("div");s.id="bottomHome";let l=document.createElement("div");l.id="hours";let d=document.createElement("h3");d.textContent="Hours";let p=document.createElement("p");p.textContent="Sunday: Closed";let u=document.createElement("p");u.textContent="Monday: 8AM - 4PM";let m=document.createElement("p");m.textContent="Tuesday: 10AM - 2PM";let h=document.createElement("p");h.textContent="Wednesday: 12PM - 12:10PM";let f=document.createElement("p");f.textContent="Thursday: 4AM - 4:03AM";let g=document.createElement("p");g.textContent="Friday: Around 11PM";let y=document.createElement("p");y.textContent="Saturday: Ask Front Desk",l.append(d,p,u,m,h,f,g,y);let v=document.createElement("div");v.id="location";let x=document.createElement("h3");x.textContent="Location";let b=document.createElement("h5");b.textContent="Milky Sprite Rd., Tuscaloosa, AL";let E=document.createElement("div");E.id="locationImage";let w=document.createElement("img");w.src=i,E.append(w),v.append(x,b,E),s.append(l,v),e.append(t,n,s)},a=n.p+"78d870487fe0d40732c3.jpeg",c=n.p+"b5b0a519656c37af0037.jpeg",s=n.p+"1a3f4c6b5d986a567263.jpeg",l=n.p+"10d1c3657d8b18bb8c29.jpeg",d=n.p+"81ec31908303aadea782.jpeg",p=n.p+"d715fe256ae9fdfdb8e8.png";function u(e,t,n,o){let i=document.createElement("div");i.classList="big-box";let r=document.createElement("img");r.src=e;let a=document.createElement("div");a.classList="img-box";let c=document.createElement("div");c.innerHTML=n,c.classList="image-title";let s=document.createElement("div");s.innerHTML=o,s.classList="image-descrip",a.append(r),i.append(c,a,s),t.append(i)}const m=()=>{o.menuExist||(o.menuExist=1,o.homeExist=0,o.aboutExist=0,document.getElementById("content").innerHTML="",(()=>{let e=document.createElement("div");e.id="image-display",u(a,e,"Creamy Sprite Float","A refreshing blend of creamy vanilla ice cream paired with bubbly Sprite, served in a frosty glass."),u(c,e,"Milky Chicken Tenders","Tender chicken strips coated in a crunchy batter infused with a hint of Sprite, served with a creamy dipping sauce."),u(s,e,"Sparkling Lemon Milkshake","A delightful combination of zesty lemon sorbet, creamy milk, and sparkling Sprite, blended to perfection."),u(l,e,"Sprite-glazed Salmon","Grilled salmon fillet basted in a tangy glaze made with Sprite, served with a side of steamed vegetables and rice."),u(d,e,"Milky Way Pasta","Creamy Alfredo pasta with tender chicken, crispy bacon, and fresh spinach, finished with a splash of Sprite for a unique twist."),u(p,e,"Fizzy Berry Parfait","Layers of fresh berries, creamy yogurt, and crunchy granola, topped with a drizzle of Sprite syrup for a fizzy kick.");let t=document.createElement("div");t.id="title",t.innerHTML="Milky Sprite Bistro - Menu",document.getElementById("content").append(t,e)})())};var h=n(72),f=n.n(h),g=n(825),y=n.n(g),v=n(659),x=n.n(v),b=n(56),E=n.n(b),w=n(540),k=n.n(w),C=n(113),M=n.n(C),S=n(208),T={};T.styleTagTransform=M(),T.setAttributes=E(),T.insert=x().bind(null,"head"),T.domAPI=y(),T.insertStyleElement=k(),f()(S.A,T),S.A&&S.A.locals&&S.A.locals,window.onload=function(){(()=>{let n=document.createElement("img");n.src=e;let o=document.createElement("img");o.src=t,document.getElementById("header").prepend(o),document.getElementById("header").append(n)})(),r(),(()=>{let e=document.createElement("div");e.id="footer",e.innerHTML="MilkySprite Inc. Established February 2024.",document.getElementsByTagName("body")[0].appendChild(e)})(),document.getElementById("homeButt").addEventListener("click",(()=>{r()})),document.getElementById("menuButt").addEventListener("click",(()=>{m()})),document.getElementById("aboutButt").addEventListener("click",(()=>{(()=>{if(o.aboutExist)return;o.menuExist=0,o.homeExist=0,o.aboutExist=1;let e=document.getElementById("content");e.innerHTML="";let t=document.createElement("div");t.id="title",t.innerHTML="Milky Sprite Bistro - About";let n=document.createElement("h5");n.textContent="Our Story";let i=document.createElement("p");i.textContent="Milky Sprite Bistro was born out of a shared passion for culinary innovation and community. Founded in 2024, by Luke McArthur, our journey began with a simple yet profound vision: to create a space where every guest feels like family, and every meal is a journey of flavors.";let r=document.createElement("h5");r.textContent="Our Philosphy";let a=document.createElement("p");a.textContent="We believe in the power of food to bring people together, to create memories, and to inspire. Our philosophy revolves around using the freshest, locally sourced ingredients to craft dishes that not only tantalize the taste buds but also tell a story. From our kitchen to your table, every dish is infused with passion, creativity, and a touch of magic.";let c=document.createElement("h5");c.textContent="Our Cuisine";let s=document.createElement("p");s.textContent="At Milky Sprite Bistro, we celebrate diversity and embrace culinary traditions from around the world. Our menu is a reflection of this ethos, offering a tantalizing array of dishes inspired by global flavors while also showcasing regional specialties. Whether you're craving a classic comfort food or eager to explore something new, our menu has something for everyone.";let l=document.createElement("h5");l.textContent="Our Commitment to Sustainability";let d=document.createElement("p");d.textContent="We are committed to operating in an environmentally responsible manner. From minimizing food waste to sourcing ingredients from sustainable producers, we strive to minimize our ecological footprint while maximizing flavor and quality.";let p=document.createElement("h5");p.textContent="Our Team";let u=document.createElement("p");u.textContent="Our team consists of dedicated chefs, passionate servers, and hospitality professionals who share a common goal: to provide you with an unforgettable dining experience. With years of culinary expertise and a deep love for food, our team is here to ensure that every visit to Milky Sprite Bistro is nothing short of extraordinary.";let m=document.createElement("h5");m.textContent="Join Us";let h=document.createElement("p");h.textContent="Whether you're celebrating a special occasion, catching up with friends, or simply craving a delicious meal, we invite you to join us at Milky Sprite Bistro. Come, savor the flavors, and make memories that will last a lifetime.";let f=document.createElement("div");f.id="owner";let g=document.createElement("h3");g.textContent="Owner";let y=document.createElement("h5");y.textContent="Luke McArthur";let v=document.createElement("h3");v.textContent="Contact";let x=document.createElement("h5");x.textContent="mcluke2004@gmail.com",f.append(g,y,v,x),e.append(t,n,i,r,a,c,s,l,d,p,u,m,h,f)})()}))}})()})();