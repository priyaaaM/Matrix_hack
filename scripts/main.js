
const canvas = document.getElementById("matrix");
const ctx = canvas.getContext("2d");


canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const fontSize = 16;
const columns = canvas.width / fontSize;

const drops = Array.from({ length: columns }).fill(0);

const draw = () => {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0"; 
  ctx.font = `${fontSize}px monospace`;

  drops.forEach((y, x) => {
    const text = String.fromCharCode(0x30A0 + Math.random() * 96);
    ctx.fillText(text, x * fontSize, y * fontSize);

    if (y * fontSize > canvas.height && Math.random() > 0.975) {
      drops[x] = 0;
    }

    drops[x]++;
  });
};

setInterval(draw, 50);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

const sentences = [
  "s e a r c h i n g . . . ",
    "Wake up, Neo. . .",
    "The Matrix has you. . . ",
    "Follow the white rabbit. ",
    "knock, knock, Neo. "
];

let sentenceIndex = 0;
let charIndex = 0;
const speed = 100;
const pauseBetweenSentences = 500;

const textElement = document.getElementById("typewriter-text");

function typeWriter() {
  if (sentenceIndex < sentences.length) {
    textElement.textContent = "";

    const currentSentence = sentences[sentenceIndex];
    charIndex = 0;

    function typeSentence() {
      if (charIndex < currentSentence.length) {
        textElement.textContent += currentSentence.charAt(charIndex);
        charIndex++;
        setTimeout(typeSentence, speed);
      } else {
        sentenceIndex++;
        setTimeout(typeWriter, pauseBetweenSentences);
      }
    }

    typeSentence();
  }
}

window.onload = typeWriter;
