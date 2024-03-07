// import  image1a from './images/milkSprite1.jpeg';
import existence from "./existence.js";
import locationImage from "./images/locationImage.jpeg";


let loadHome = () => {
    if(existence.homeExist) {
        return;
    }
    existence.menuExist = 0;
    existence.homeExist = 1;
    existence.aboutExist = 0;
    let content = document.getElementById("content");
    content.innerHTML = "";

    let title = document.createElement("div");
    title.id = "title";
    title.innerHTML = "Milky Sprite Bistro";

    let description = document.createElement("div");
    description.id = "description";
    let p1 = document.createElement("p");
    let p2 = document.createElement("p");
    let p3 = document.createElement("p");
    p1.textContent = "Welcome to Milky Sprite Bistro, an upscale haven where refined flavors intertwine to create an exquisite dining experience. Located in the heart of Tuscaloosa, our restaurant invites you to indulge in a culinary journey like no other.";
    p2.textContent = "Our meticulously crafted menu features a fusion of delectable dishes prepared with the finest ingredients, promising a symphony of flavors that tantalize the palate. From succulent Milky Chicken Tenders to delicately prepared Sprite-glazed Salmon, each dish is a masterpiece designed to delight the senses. Elevate your dining experience with our signature Creamy Sprite Float, a velvety indulgence that embodies sophistication and luxury. ";
    p3.textContent = "Join us at Milky Sprite for a gastronomic adventure that transcends the ordinary and transports you to culinary bliss.";
    description.append(p1, p2, p3);

    let bottomHome = document.createElement("div");
    bottomHome.id = "bottomHome";

    let hours = document.createElement("div");
    hours.id = "hours";
    let h1 = document.createElement("h3");
    h1.textContent = "Hours";
    let p4 = document.createElement("p");
    p4.textContent = "Sunday: Closed";
    let p5 = document.createElement("p");
    p5.textContent = "Monday: 8AM - 4PM";
    let p6 = document.createElement("p");
    p6.textContent = "Tuesday: 10AM - 2PM";
    let p7 = document.createElement("p");
    p7.textContent = "Wednesday: 12PM - 12:10PM";
    let p8 = document.createElement("p");
    p8.textContent = "Thursday: 4AM - 4:03AM";
    let p9 = document.createElement("p");
    p9.textContent = "Friday: Around 11PM";
    let p10 = document.createElement("p");
    p10.textContent = "Saturday: Ask Front Desk";
    hours.append(h1, p4, p5, p6, p7, p8, p9, p10);

    let location = document.createElement("div");
    location.id = "location";
    let h2 = document.createElement("h3");
    h2.textContent = "Location";
    let h3 = document.createElement("h5");
    h3.textContent = "Milky Sprite Rd., Tuscaloosa, AL";
    let imageDiv = document.createElement("div");
    imageDiv.id = "locationImage";
    let image = document.createElement("img");
    image.src = locationImage;
    imageDiv.append(image);
    location.append(h2, h3, imageDiv);

    bottomHome.append(hours, location);

    content.append(title, description, bottomHome);
}

export default loadHome;