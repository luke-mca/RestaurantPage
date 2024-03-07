// import  image1a from './images/milkSprite1.jpeg';
import existence from "./existence.js";


let loadAbout = () => {
    if(existence.aboutExist) {
        return;
    }
    existence.menuExist = 0;
    existence.homeExist = 0;
    existence.aboutExist = 1;
    let content = document.getElementById("content");
    content.innerHTML = "";

    let title = document.createElement("div");
    title.id = "title";
    title.innerHTML = "Milky Sprite Bistro - About";

    let story = document.createElement("h5");
    story.textContent = "Our Story";
    let storyText = document.createElement("p");
    storyText.textContent = "Milky Sprite Bistro was born out of a shared passion for culinary innovation and community. Founded in 2024, by Luke McArthur, our journey began with a simple yet profound vision: to create a space where every guest feels like family, and every meal is a journey of flavors.";
    
    let philosphy = document.createElement("h5");
    philosphy.textContent = "Our Philosphy";
    let philText = document.createElement("p");
    philText.textContent = "We believe in the power of food to bring people together, to create memories, and to inspire. Our philosophy revolves around using the freshest, locally sourced ingredients to craft dishes that not only tantalize the taste buds but also tell a story. From our kitchen to your table, every dish is infused with passion, creativity, and a touch of magic.";
    
    let cuisine = document.createElement("h5");
    cuisine.textContent = "Our Cuisine";
    let cuisineText = document.createElement("p");
    cuisineText.textContent = "At Milky Sprite Bistro, we celebrate diversity and embrace culinary traditions from around the world. Our menu is a reflection of this ethos, offering a tantalizing array of dishes inspired by global flavors while also showcasing regional specialties. Whether you're craving a classic comfort food or eager to explore something new, our menu has something for everyone.";
    
    let sustain = document.createElement("h5");
    sustain.textContent = "Our Commitment to Sustainability";
    let sustainText = document.createElement("p");
    sustainText.textContent = "We are committed to operating in an environmentally responsible manner. From minimizing food waste to sourcing ingredients from sustainable producers, we strive to minimize our ecological footprint while maximizing flavor and quality.";
    
    let team = document.createElement("h5");
    team.textContent = "Our Team";
    let teamText = document.createElement("p");
    teamText.textContent = "Our team consists of dedicated chefs, passionate servers, and hospitality professionals who share a common goal: to provide you with an unforgettable dining experience. With years of culinary expertise and a deep love for food, our team is here to ensure that every visit to Milky Sprite Bistro is nothing short of extraordinary.";
    
    let join = document.createElement("h5");
    join.textContent = "Join Us";
    let joinText = document.createElement("p");
    joinText.textContent = "Whether you're celebrating a special occasion, catching up with friends, or simply craving a delicious meal, we invite you to join us at Milky Sprite Bistro. Come, savor the flavors, and make memories that will last a lifetime.";
    

    let owner = document.createElement("div");
    owner.id = "owner";
    let h2 = document.createElement("h3");
    h2.textContent = "Owner";
    let h3 = document.createElement("h5");
    h3.textContent = "Luke McArthur";
    let h4 = document.createElement("h3");
    h4.textContent = "Contact";
    let h5 = document.createElement("h5");
    h5.textContent = "mcluke2004@gmail.com";
    owner.append(h2, h3, h4, h5);

    content.append(title, story, storyText, philosphy, philText, cuisine, cuisineText, sustain, sustainText, team, teamText, join, joinText, owner);
}

export default loadAbout;