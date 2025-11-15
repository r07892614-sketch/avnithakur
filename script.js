let t = 60;
const timer = document.getElementById("timer");

const x = setInterval(() => {
  t--;
  timer.textContent = t;
  if (t <= 0) {
    clearInterval(x);
    timer.textContent = "Ready!";
  }
}, 1000);

// Button fade animation
const btn = document.getElementById("joinBtn");
let sw = true;

setInterval(() => {
  btn.style.opacity = sw ? "0.85" : "1";
  sw = !sw;
}, 1200);

// Telegram redirect
btn.addEventListener("click", () => {
  window.open("https://t.me/+XDLDpvs_n4kzZWJl", "_blank");
});
