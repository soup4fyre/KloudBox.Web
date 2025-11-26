const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");
const menuLinks = document.querySelectorAll("#navMenu a");

menuBtn.addEventListener("click", () => {
  navMenu.classList.toggle("open");
});

menuLinks.forEach(link => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
  });
});
