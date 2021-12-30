// Tabs

let elsTab = document.querySelectorAll(".tab");
let elsTabBtn = document.querySelectorAll(".tab__control");

let elsPanelItem = document.querySelectorAll(".panel__item");

elsTabBtn.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    e.preventDefault();

    // tab

    elsTab.forEach((tab) => {
      tab.classList.remove("tab--active");
    });

    btn.parentElement.classList.add("tab--active");

    // panel

    elsPanelItem.forEach((panel) => {
      panel.classList.remove("panel__item--active");
    });

    document.querySelector(btn.getAttribute('href')).classList.add('panel__item--active')
  });
});

// Accordion

let elsAccordionControl = document.querySelectorAll(".accordion__control");
let elsAccordionItem = document.querySelectorAll(".accordion__item");

elsAccordionControl.forEach((btn) => {
  btn.addEventListener("click", () => {
    elsAccordionItem.forEach((accordion) => {
      accordion.classList.remove("accordion__item--active");
    });

    btn.closest("li").classList.add("accordion__item--active");
  });
});
