const pianoKeys = document.querySelectorAll(".key");

function playSound(newUrl) {
  console.log(newUrl);
  new Audio(newUrl).play();
}

pianoKeys.forEach((pianoKey, i) => {
  const number = i < 9 ? "0" + (i + 1) : i + 1;
  const newUrl = "24-piano-keys/key" + number + ".mp3";
  console.log(newUrl);
  pianoKey.addEventListener("click", () => playSound(newUrl));
});
