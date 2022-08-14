import "./style.min.css";

const AppRoot = document.querySelector("#app");
const ScrollFab = document.querySelector("#scrollFab");
const MobileMenu = document.querySelector("#mobileMenu");
const MobileNav = document.querySelector("#MobileNav");

//show scroll to Top btn
AppRoot.addEventListener("scroll", () => {
  let scrollYPosition = AppRoot.scrollTop;

  if (scrollYPosition > 600) {
    ScrollFab.classList.add("fab-visible");
  }

  if (scrollYPosition < 600) {
    ScrollFab.classList.remove("fab-visible");
  }
});

//toggle nav menu
MobileMenu.addEventListener("click", (evt) => {
  evt.stopPropagation();
  MobileNav.classList.toggle("mobilenav__visible");
});

//remove nav menu if there is no focus
AppRoot.addEventListener("click", () => {
  if (MobileNav.classList.contains("mobilenav__visible")) {
    MobileNav.classList.remove("mobilenav__visible");
  }
});
