const hamburgerIcon = document.getElementById("hamburger-icon");
const header = document.getElementById("header");
console.log(hamburgerIcon);
const navlinks = document.querySelectorAll(".navlink");
console.log(navlinks);

hamburgerIcon.addEventListener("click", () => {
  header.classList.toggle("active");
});

navlinks.forEach(function (nav) {
  nav.addEventListener("click", function () {
    if (!nav.classList.contains("open")) {
      navlinks.forEach(function (nav) {
        nav.classList.remove("open");
      });
      nav.classList.add("open");
    } else {
      nav.classList.remove("open");
    }
  });
});
