const button = document.querySelector("button");
const popup = document.querySelector(".popup");

button.addEventListener ("click", (e) => {
    button.classList.toggle("hidden");
    popup.classList.toggle("active");
});