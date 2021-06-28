const elMenuToggle = document.querySelector(".menu");
const elMenu = document.querySelector(".sitenav");

elMenuToggle.addEventListener("click", function () {
  elMenu.classList.toggle("sitenav--open");
});
