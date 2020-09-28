// import userExpensesInput from "./models/userExpensesInput.js";
// import { chart } from "./views/chart.js";
// import { objects } from "./models/objects.js";

// ——————————————————————————————————————————————————
// TextScramble
// ——————————————————————————————————————————————————

class TextScramble {
  constructor(el) {
    this.el = el;
    this.chars = "!<>-_\\/[]{}—=+*^?#________";
    this.update = this.update.bind(this);
  }
  setText(newText) {
    // const oldText = this.el[j].innerText;
    const oldText = this.el.innerText;
    const length = Math.max(oldText.length, newText.length);
    const promise = new Promise((resolve) => (this.resolve = resolve));
    this.queue = [];
    for (let i = 0; i < length; i++) {
      const from = oldText[i] || "";
      const to = newText[i] || "";
      const start = Math.floor(Math.random() * 60);
      const end = start + Math.floor(Math.random() * 60);
      this.queue.push({ from, to, start, end });
    }
    cancelAnimationFrame(this.frameRequest);
    this.frame = 0;
    this.update();
    return promise;
  }
  update() {
    let output = "";
    let complete = 0;
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i];
      if (this.frame >= end) {
        complete++;
        output += to;
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar();
          this.queue[i].char = char;
        }
        output += `<span class="dud">${char}</span>`;
      } else {
        output += from;
      }
    }
    this.el.innerHTML = output;
    if (complete === this.queue.length) {
      this.resolve();
    } else {
      this.frameRequest = requestAnimationFrame(this.update);
      this.frame++;
    }
  }

  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)];
  }
}

// ——————————————————————————————————————————————————
// Example
// ——————————————————————————————————————————————————

const phrases = [
  "Cześć.",
  "Nazywam sie Karol Minta.",
  "Jestem Front-End developerem.",
  "Więcej informacji o mnie oraz",
  "projekty znajdziesz poniżej.",
];
// let textNumb = 1;
const el = document.querySelector(".text-1");
// const el = document.querySelector(`.text-${textNumb}`);
// const fx = new TextScramble(el);
const texts = document.querySelectorAll("div[class^='text-']");
const fx = [];
fx[0] = new TextScramble(texts[0]);
fx[1] = new TextScramble(texts[1]);
fx[2] = new TextScramble(texts[2]);
fx[3] = new TextScramble(texts[3]);
fx[4] = new TextScramble(texts[4]);
// let textMap = new Map();
// let fx
// for(let i = 0; i<=texts.length;i++){
// // textMap.set(`text-${i+1}`, texts[i] );
// let fx = new TextScramble(texts);

// }
// console.log(textMap.get("text-1"));

let counter = 0;
const next = () => {
  // fx[0].setText(phrases[counter],counter).then(() => {
  fx[0].setText(phrases[0], 0).then(() => {
    fx[1].setText(phrases[1], 1).then(() => {
      fx[2].setText(phrases[2], 2).then(() => {
        fx[3].setText(phrases[3], 3).then(() => {
          fx[4].setText(phrases[4], 4).then(() => {});
        });
      });
    });

    // setTimeout(next, 2000);
  });
  counter = (counter + 1) % phrases.length;
  // textNumb +=counter;
};

next();
