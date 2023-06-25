const texts = ["UX Designer", "Visual Designer", "UI Designer"];
let index = 0;
let isDeleting = false;

function typeText() {
  const text = texts[index];
  const animatedText = document.getElementById("animated-text");

  if (isDeleting) {
    animatedText.textContent = text.substring(
      0,
      animatedText.textContent.length - 1
    );
  } else {
    animatedText.textContent = text.substring(
      0,
      animatedText.textContent.length + 1
    );
  }

  if (!isDeleting && animatedText.textContent === text) {
    isDeleting = true;
    setTimeout(typeText, 1000);
  } else if (isDeleting && animatedText.textContent === "") {
    isDeleting = false;
    index = (index + 1) % texts.length;
    setTimeout(typeText, 500);
  } else {
    setTimeout(typeText, 100);
  }
}

typeText();
