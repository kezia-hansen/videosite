const menuIcon = document.querySelector("#menu-icon");
const navList = document.querySelector(".navlist");

menuIcon.addEventListener("click", () => {
  navList.classList.toggle("open");
});
