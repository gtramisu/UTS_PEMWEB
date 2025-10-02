const cursor = document.createElement("div");
cursor.classList.add("cursor");
document.body.appendChild(cursor);

document.addEventListener("mousemove", e => {
  cursor.style.left = e.clientX + "px";
  cursor.style.top = e.clientY + "px";
});

window.addEventListener("scroll", () => {
  let scrollTop = window.scrollY;
  let docHeight = document.body.scrollHeight - window.innerHeight;
  let width = (scrollTop / docHeight) * 100;
  document.getElementById("progressBar").style.width = width + "%";
});

const modeToggle = document.getElementById("modeToggle");
let isDark = true;

modeToggle.addEventListener("click", () => {
  if (isDark) {
    document.body.classList.add("light-mode");
    modeToggle.textContent = "🌙"; 
  } else {
    document.body.classList.remove("light-mode");
    modeToggle.textContent = "☀️"; 
  }
  isDark = !isDark;
});


const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", e => {
    e.preventDefault();
    alert("Pesan kamu sudah terkirim 💌");
    form.reset();
  });
}

const audio = document.getElementById("audioPlayer");
const nowPlaying = document.getElementById("nowPlaying");
const playPauseBtn = document.getElementById("playPause");

const songs = [
  { file: "lagu1.mp3", title: "Beyoncé - Diva" },
  { file: "lagu2.mp3", title: "Mariah Carey - Obsessed" },
  { file: "lagu3.mp3", title: "Ariana Grande - Dangerous Woman" }
];

let currentSong = 0;

function loadSong(index) {
  audio.src = songs[index].file;
  nowPlaying.textContent = "Sedang diputar: " + songs[index].title;
  audio.play();
  playPauseBtn.textContent = "⏸️";
}

document.getElementById("nextSong").addEventListener("click", () => {
  currentSong = (currentSong + 1) % songs.length;
  loadSong(currentSong);
});

document.getElementById("prevSong").addEventListener("click", () => {
  currentSong = (currentSong - 1 + songs.length) % songs.length;
  loadSong(currentSong);
});

playPauseBtn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    playPauseBtn.textContent = "⏸️";
  } else {
   audio.pause();
   playPauseBtn.textContent = "▶️";
  }
});

loadSong(currentSong);

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

sections.forEach(sec => observer.observe(sec));

const moods = [
  "Bossed Up and Securing the Bag 💅",
  "Calm but Deadly 👑",
  "Unbothered, Moisturized, Happy, in My Lane ✨"
];
document.querySelector(".status-detail").textContent =
  "Mood Today: " + moods[Math.floor(Math.random() * moods.length)];

  function typeEffect(element, text, speed = 50) {
  let i = 0;
  function typing() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, speed);
    }
  }
  typing();
}
const quote = document.querySelector(".blockquote-glow");
const text = quote.textContent;
quote.textContent = "";
typeEffect(quote, text, 50);

function dropEmoji(emoji) {
  const span = document.createElement("span");
  span.textContent = emoji;
  span.style.position = "fixed";
  span.style.left = Math.random() * window.innerWidth + "px";
  span.style.top = "-30px";
  span.style.fontSize = "1.5rem";
  span.style.pointerEvents = "none"; 
  document.body.appendChild(span);

  let posY = -30; 
  const fall = setInterval(() => {
    if (posY < window.innerHeight) {
      posY += 5;
      span.style.top = posY + "px";
    } else {
      clearInterval(fall);
      span.remove();
    }
  }, 50);
}

document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

const fortunes = [
  "💎 You’re entering your main character era, act like it.",
  "💋 Someone’s secretly obsessed with your glow.",
  "🔥 The bag is closer than you think, keep grinding.",
  "👑 Stop doubting. You’ve always been THAT girl.",
  "✨ Your silence is intimidating more than words ever could.",
  "🌙 Tonight is about self-love, put on that mask and vibe.",
  "🖤 Some bridges are meant to be burned, keep walking.",
  "💄 Your aura today screams luxury, don’t tone it down.",
  "⚡ Energy doesn’t lie — protect yours at all costs.",
  "🍷 Sip slow, glow slow, and let them wonder.",
  "🚀 Big shifts are coming, prepare to level up.",
  "🕶️ Stay mysterious — not everyone deserves the full story.",
  "🌹 Your softness is powerful, don’t mistake it for weakness.",
  "👠 You don’t chase, you attract — remember that.",
  "💫 The universe is aligning for your next big move."
];

const fortuneBtn = document.getElementById("fortuneBtn");
const fortuneText = document.getElementById("fortuneText");

fortuneBtn.addEventListener("click", () => {
  const random = fortunes[Math.floor(Math.random() * fortunes.length)];
  fortuneText.textContent = random;
  fortuneText.style.animation = "fadeIn 1s"; 
  setTimeout(() => { fortuneText.style.animation = ""; }, 1000);
});

const style = document.createElement("style");
style.innerHTML = `
@keyframes fadeIn {
  from { opacity: 0; transform: scale(0.9); }
  to { opacity: 1; transform: scale(1); }
}`;
document.head.appendChild(style);

const zodiacSigns = [
  { sign: "Aries", start: "03-21", end: "04-19", reading: "Boss energy, unstoppable vibes 🔥" },
  { sign: "Taurus", start: "04-20", end: "05-20", reading: "Luxury & chill, grounded but fierce 💎" },
  { sign: "Gemini", start: "05-21", end: "06-20", reading: "Charming & witty, master of vibes 😎" },
  { sign: "Cancer", start: "06-21", end: "07-22", reading: "Soft but powerful, emotional queen 💖" },
  { sign: "Leo", start: "07-23", end: "08-22", reading: "Shine bright, own the spotlight 👑" },
  { sign: "Virgo", start: "08-23", end: "09-22", reading: "Perfectionist & aesthetic obsessed ✨" },
  { sign: "Libra", start: "09-23", end: "10-22", reading: "Balanced, baddie with style ⚖️" },
  { sign: "Scorpio", start: "10-23", end: "11-21", reading: "Mysterious & magnetic 🔮" },
  { sign: "Sagittarius", start: "11-22", end: "12-21", reading: "Adventurous, free spirit 🌍" },
  { sign: "Capricorn", start: "12-22", end: "01-19", reading: "Ambitious & classy 💼" },
  { sign: "Aquarius", start: "01-20", end: "02-18", reading: "Unique & forward thinker 💡" },
  { sign: "Pisces", start: "02-19", end: "03-20", reading: "Dreamy & aesthetic soul 🌊" },
];

document.getElementById("checkZodiac").addEventListener("click", () => {
  const input = document.getElementById("birthDate").value;
  if (!input) return alert("Pick a date first!");
  const [year, month, day] = input.split("-");
  const formatted = `${month}-${day}`;
  let result = zodiacSigns.find(z => 
    (formatted >= z.start && formatted <= z.end) || 
    (z.start > z.end && (formatted >= z.start || formatted <= z.end))
  );
  document.getElementById("zodiacResult").innerHTML = `
    <h3>${result.sign}</h3>
    <p>${result.reading}</p>
  `;
});
