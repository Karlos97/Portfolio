class TextScramble {
    constructor(el) {
      this.el = el;
      this.chars = "!<>-_\\/[]{}—=+*^?#________";
      this.update = this.update.bind(this);
    }
    setText(newText) {
      const oldText = this.el.innerText;
      const length = Math.max(oldText.length, newText.length);
      const promise = new Promise((resolve) => (this.resolve = resolve));
      this.queue = [];
      for (let i = 0; i < length; i++) {
        const from = oldText[i] || "";
        const to = newText[i] || "";
        const start = Math.floor(Math.random() * 40);
        const end = start + Math.floor(Math.random() * 40);
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
  const phrases = [
    "Cześć.",
    "Nazywam sie Minta Karol.",
    "Więcej informacji o mnie oraz",
    "projekty znajdziesz poniżej.",
  ];
  const newTextNode = () => {
    const node = document.createElement("div")
    node.classList.add("text-1");
    return node
  } 
  let counter = 0;
  const arrow = document.getElementsByClassName("header__arrow")[0];
  const next = () => {
    if (counter === phrases.length) {
      return 
    }
    const node = newTextNode()
    document.querySelector(".header__box").appendChild(node);
    new TextScramble(node).setText(phrases[counter]).then(() => {
      setTimeout(next, 800);
    });
    counter += 1
    if(counter % phrases.length === 0){
      setTimeout(() => {
        arrow.style.cssText =
          "height: 5rem;width: 7rem;visibility: visible; ";
      }, 1500);
    }
  };
  next();