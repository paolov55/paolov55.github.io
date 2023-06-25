// Get all image containers
const imageContainers = document.querySelectorAll(".image-container");

// Add event listeners for mouse enter and leave
imageContainers.forEach((container) => {
  container.addEventListener("mouseenter", () => {
    container.querySelector(".overlay").classList.add("active");
  });

  container.addEventListener("mouseleave", () => {
    container.querySelector(".overlay").classList.remove("active");
  });
});
