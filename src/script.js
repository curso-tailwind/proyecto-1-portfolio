const menuButton = document.querySelector("#menu-button");
const navMenu = document.querySelector("#nav-menu");
const menuListItems = document.querySelectorAll("#nav-menu li");

menuButton.addEventListener("click", () => {
  navMenu.classList.remove("animate-slide-out");
  navMenu.classList.toggle("hidden");
  navMenu.classList.add("flex");
  navMenu.classList.add("animate-slide-in");
});

menuListItems.forEach((item) => {
  item.addEventListener("click", () => {
    const windowWidth = window.innerWidth;
    if (windowWidth > 640) return;
    navMenu.classList.remove("animate-slide-in");
    navMenu.classList.add("animate-slide-out");

    setTimeout(() => {
      navMenu.classList.toggle("hidden");
      navMenu.classList.remove("flex");
    }, 400);
  });
});

window.addEventListener("resize", () => {
  const windowWidth = window.innerWidth;
  if (windowWidth > 640) {
    navMenu.classList.remove("animate-slide-in");
    navMenu.classList.remove("animate-slide-out");
  }
});
