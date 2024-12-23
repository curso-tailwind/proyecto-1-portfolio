const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const menuListItems = document.querySelectorAll("#nav-menu li");
const mainTitle = document.querySelector("#main-title");

menuButton.addEventListener("click", () => {
  navMenu.classList.remove("animate-slide-out");
  navMenu.classList.toggle("hidden");
  navMenu.classList.add("flex");
  navMenu.classList.add("animate-slide-in");
});

menuListItems.forEach((item) => {
  item.addEventListener("click", () => {
    navMenu.classList.remove("animate-slide-in");
    navMenu.classList.add("animate-slide-out");

    setTimeout(() => {
      navMenu.classList.toggle("hidden");
      navMenu.classList.remove("flex");
    }, 400);
  });
});

mainTitle.addEventListener("click", () => {
  window.scroll({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});
