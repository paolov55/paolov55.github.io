const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  if (window.scrollY > 10) {
    navbar.style.backgroundColor = "#003366";
    navbar.style.boxShadow =
      "0px 4px 4px rgba(0, 0, 0, 0.25), 0px 2px 2px rgba(0, 0, 0, 0.5)";
  } else {
    navbar.style.backgroundColor = "transparent";
    navbar.style.boxShadow =
      "0px 4px 4px rgba(0, 0, 0, 0), 0px 2px 2px rgba(0, 0, 0, 0)";
  }
});

navbar.classList.add("navbar-transition");
