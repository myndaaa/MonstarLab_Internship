const hello = document.getElementById("hello");

hello.addEventListener("click", () => {
  const colors = ["#ffffff", "#ffeb3b", "#4caf50", "#03a9f4", "#e91e63"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  hello.style.color = randomColor;
});
