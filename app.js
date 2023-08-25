const button = document.querySelector(".button");
const mainAnimation = document.querySelector(".hidden");

button.addEventListener("click", () => {
  mainAnimation.classList.toggle("main-animation");
  mainAnimation.classList.toggle("hidden");
});
