const elMenuToggle = document.querySelector(".menu");
const elMenu = document.querySelector(".site-nav");

elMenuToggle.addEventListener("click", function () {
  elMenu.classList.toggle("site-nav--active");
});
