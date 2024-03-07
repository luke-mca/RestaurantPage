import  image1a from './images/milkSprite1.jpeg';
import  image2a from './images/milkSprite2.jpeg';
import  image3a from './images/milkSprite3.jpeg';
import  image4a from './images/milkSprite4.jpeg';
import  image5a from './images/milkSprite5.jpeg';
import  image6a from './images/milkSprite6.png';

function addToImageDisplay(source, imageDisplay, title, text) {
    let bigBox = document.createElement("div");
    bigBox.classList = "big-box";
    let image = document.createElement("img");
    image.src = source;
    let imageBox = document.createElement("div");
    imageBox.classList = "img-box";
    let imageTitle = document.createElement("div");
    imageTitle.innerHTML = title;
    imageTitle.classList = "image-title";
    let imageDescrip = document.createElement("div");
    imageDescrip.innerHTML = text;
    imageDescrip.classList = "image-descrip";
    

    imageBox.append(image);
    bigBox.append(imageTitle, imageBox, imageDescrip);
    imageDisplay.append(bigBox);
}

let loadContent = () => {
    let imageDisplay = document.createElement("div");
    imageDisplay.id = "image-display";
    addToImageDisplay(image1a, imageDisplay, "Creamy Sprite Float", "A refreshing blend of creamy vanilla ice cream paired with bubbly Sprite, served in a frosty glass.");
    addToImageDisplay(image2a, imageDisplay, "Milky Chicken Tenders", "Tender chicken strips coated in a crunchy batter infused with a hint of Sprite, served with a creamy dipping sauce.");
    addToImageDisplay(image3a, imageDisplay, "Sparkling Lemon Milkshake", "A delightful combination of zesty lemon sorbet, creamy milk, and sparkling Sprite, blended to perfection.");
    addToImageDisplay(image4a, imageDisplay, "Sprite-glazed Salmon", "Grilled salmon fillet basted in a tangy glaze made with Sprite, served with a side of steamed vegetables and rice.");
    addToImageDisplay(image5a, imageDisplay, "Milky Way Pasta", "Creamy Alfredo pasta with tender chicken, crispy bacon, and fresh spinach, finished with a splash of Sprite for a unique twist.");
    addToImageDisplay(image6a, imageDisplay, "Fizzy Berry Parfait", "Layers of fresh berries, creamy yogurt, and crunchy granola, topped with a drizzle of Sprite syrup for a fizzy kick.");

    let title = document.createElement("div");
    title.id = "title";
    title.innerHTML = "Milky Sprite Bistro - Menu";

    let content = document.getElementById("content");
    content.append(title, imageDisplay);
}

export default loadContent;