// 1. DYNAMIC TYPING EFFECT
const typingPhrases = [
  "AI/ML Systems Engineering",
  "FastAPI & Django REST Microservices",
  "LangGraph & Multi-Agent Workflows",
  "High-Throughput Cloud Architecture",
];
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing-element");

function typeEffect() {
  const currentPhrase = typingPhrases[phraseIdx];

  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIdx - 1);
    charIdx--;
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIdx + 1);
    charIdx++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIdx === currentPhrase.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx = (phraseIdx + 1) % typingPhrases.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}
document.addEventListener("DOMContentLoaded", typeEffect);
