const quiz = [
  {
    questions: "what is my Name?",
    a: "Michael",
    b: "Samuel",
    c: "Daniel",
    d: "Juliana",
    correct: "a",
  },
  {
    questions: "what is my Age?",
    a: 28,
    b: 30,
    c: 27,
    d: 40,
    correct: "c",
  },
  {
    questions: "what is my Colour?",
    a: "Dark",
    b: "Green",
    c: "Brown",
    d: "White",
    correct: "a",
  },
  {
    questions: "where am i from?",
    a: "London",
    b: "Lagos",
    c: "Kogi",
    d: "Kwara",
    correct: "c",
  },
  {
    questions: "where am I Schooling?",
    a: "offa, Kwara",
    b: "Omu-aran, Kwara",
    c: "Lokoja, Kogi",
    d: "Ilorin, Kwara",
    correct: "d",
  },
];

const questionEl = document.querySelector(".question");
const submitBtn = document.querySelector(".submit");
let allInput = document.querySelectorAll(".click");
const quizBlock = document.getElementById("quiz");

const aEl = document.querySelector(".a_text");
const bEl = document.querySelector(".b_text");
const cEl = document.querySelector(".c_text");
const dEl = document.querySelector(".d_text");
// console.log(quiz[4].correct);

let quizIndex = 0;
// let answerChecked = undefined;
let score = 0;

function loadQuiz() {
  getDeselect();
  const currentQuiz = quiz[quizIndex];
  questionEl.innerText = currentQuiz.questions;
  aEl.innerText = currentQuiz.a;
  bEl.innerText = currentQuiz.b;
  cEl.innerText = currentQuiz.c;
  dEl.innerText = currentQuiz.d;
  //   console.log(currentQuiz);
}
loadQuiz();

function getDeselect() {
  allInput.forEach((input) => {
    return (input.checked = false);
  });
}

function getSelect() {
  let answer = undefined;
  allInput.forEach((input) => {
    if (input.checked) {
      answer = input.id;
    }
  });
  return answer;
}
submitBtn.addEventListener("click", () => {
  let answer = getSelect();
  console.log(answer);
  if (answer === quiz[quizIndex].correct) {
    score++;
  }
  if (answer) {
    quizIndex++;

    if (quizIndex < quiz.length) {
      loadQuiz();
    } else {
      quizBlock.innerHTML = `<h2>You answered ${score} of ${quiz.length} correctly</h2>
      <button onClick=location.reload()>Reload</button>`;
    }
  }
});
