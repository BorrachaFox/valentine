let heartInterval;
let duration = 60 * 1000;

const music = document.getElementById("music");
const loveFrogImg = document.getElementById("frog_image");
const cryingImg = document.getElementById("crying_image");
const yesBtn = document.getElementById("yes_btn");
const noBtn = document.getElementById("no_btn");

const clickYes = () => {
  cryingImg.style.display = "none";
  loveFrogImg.style.display = "block";
  if (!yesBtn.disbled) generateHearts();
}

const clickNo = () => {
  if (!yesBtn.disbled) {
    loveFrogImg.style.display = "none";
    cryingImg.style.display = "block";
  }
};

function generateHearts() {
  const music = document.getElementById("music");
  yesBtn.disbled = true;
  noBtn.disbled = true;
  music.play();
  
  heartInterval = setInterval(() => {
    const nHeart = window.innerWidth < 768 ? 8 : 16
    for (let i = 0; i < nHeart; i++) {
      createHeart();
    }
  }, 600);

  setTimeout(() => {
    clearInterval(heartInterval);
    yesBtn.disbled = false;
    noBtn.disbled = false;
    music.pause();
    music.currentTime = 0;
  }, duration);
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "❤️";

  const x = Math.random() * window.innerWidth; // Posição X aleatória
  const y = Math.random() * (window.innerHeight - 100) + 50; // Posição Y inicial aleatória

  heart.style.left = `${x}px`;
  heart.style.top = `${y}px`;
  heart.style.position = "absolute";

  document.body.appendChild(heart);

  // Remover coração após a animação
  setTimeout(() => {
    heart.remove();
  }, 2000);
}
