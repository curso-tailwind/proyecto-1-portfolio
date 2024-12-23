const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const menuListItems = document.querySelectorAll("#nav-menu li");

menuButton.addEventListener("click", () => {
  navMenu.classList.remove("animate-slide-out", "hidden");
  navMenu.classList.add("flex", "animate-slide-in");
});

menuListItems.forEach((item) => {
  item.addEventListener("click", () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 640) return;
    navMenu.classList.remove("animate-slide-in");
    navMenu.classList.add("animate-slide-out");
  });
});

navMenu.addEventListener("animationend", (e) => {
  if (e.animationName !== "slide-out") return;
  navMenu.classList.add("hidden");
  navMenu.classList.remove("flex");
});

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 640) {
    navMenu.classList.remove("animate-slide-in", "animate-slide-out");
  }
});
