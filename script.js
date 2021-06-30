const q1 = document.querySelector(".question-1");
const q2 = document.querySelector(".question-2");
const q3 = document.querySelector(".question-3");
const q4 = document.querySelector(".question-4");
const q5 = document.querySelector(".question-5");

const a1 = document.querySelector(".answer-1");
const a2 = document.querySelector(".answer-2");
const a3 = document.querySelector(".answer-3");
const a5 = document.querySelector(".answer-5");
const a4 = document.querySelector(".answer-4");

q1.addEventListener("click", () => {
  q1.classList.toggle("accordion-question-clicked");
  a1.classList.toggle("accordion-answer-shown");
});

q2.addEventListener("click", () => {
  q2.classList.toggle("accordion-question-clicked");
  a2.classList.toggle("accordion-answer-shown");
});

q3.addEventListener("click", () => {
  q3.classList.toggle("accordion-question-clicked");
  a3.classList.toggle("accordion-answer-shown");
});

q4.addEventListener("click", () => {
  q4.classList.toggle("accordion-question-clicked");
  a4.classList.toggle("accordion-answer-shown");
});

q5.addEventListener("click", () => {
  q5.classList.toggle("accordion-question-clicked");
  a5.classList.toggle("accordion-answer-shown");
});
