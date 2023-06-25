// Função para adicionar a classe 'active' ao link clicado
function setActiveLink() {
  const links = document.querySelectorAll("nav a");
  links.forEach((link) => {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      links.forEach((link) => link.classList.remove("active"));
      this.classList.add("active");
      const target = document.querySelector(this.getAttribute("href"));
      target.scrollIntoView({ behavior: "smooth" });
    });
  });
}

// Função para adicionar a classe 'active' ao link da seção visível na página
function setActiveSection() {
  const sections = document.querySelectorAll("section");
  window.addEventListener("scroll", function () {
    const scrollPosition = window.pageYOffset;
    sections.forEach((section) => {
      const offsetTop = section.offsetTop;
      const offsetBottom = offsetTop + section.offsetHeight;
      if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
        const id = section.getAttribute("id");
        const activeLink = document.querySelector(`nav a[href="#${id}"]`);
        const indicators = document.querySelectorAll(".indicator");
        indicators.forEach((indicator) => indicator.classList.remove("active"));
        activeLink.querySelector(".indicator").classList.add("active");
      }
    });
  });
}

// Chamada das funções ao carregar a página
window.addEventListener("DOMContentLoaded", function () {
  setActiveLink();
  setActiveSection();
});
