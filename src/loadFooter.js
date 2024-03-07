let loadFooter = () => {
    let footer = document.createElement("div");
    footer.id = "footer";
    footer.innerHTML = "MilkySprite Inc. Established February 2024.";
    (document.getElementsByTagName('body')[0]).appendChild(footer);
}

export default loadFooter;