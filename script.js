
// ==========================================
// PAPARAZZI - BLUE LOVE EXPERIENCE
// ==========================================

// LYRICS
const lyrics = [
    "Cause you know that baby I",
    "I'm your biggest fan",
    "I'll follow you until you love me",
    "Papa-paparazzi",
    "Baby, there's no other superstar",
    "You know that I'll be",
    "Your papa-paparazzi",
    "Promise I'll be kind",
    "But I won't stop until that boy is mine",
    "Baby, you'll be famous",
    "Chase you down until you love me",
    "Papa-paparazzi"
];

// SETTINGS
let index = 0;
let started = false;
let lyricTimer;

const lyric = document.getElementById("lyric");
const music = document.getElementById("music");

// ==========================================
// START EXPERIENCE
// ==========================================

function startShow() {

    if (started) return;

    started = true;

    music.volume = 0.8;

    music.play().catch(error => {
        console.log("Music error:", error);
    });

    document.querySelector(".play-button").style.display = "none";

    changeLyric();

    lyricTimer = setInterval(changeLyric, 3500);

}

// ==========================================
// LYRICS TRANSITION
// ==========================================

function changeLyric() {

    lyric.style.opacity = "0";
    lyric.style.transform = "translateY(15px)";

    setTimeout(() => {

        lyric.textContent = lyrics[index];

        lyric.style.opacity = "1";
        lyric.style.transform = "translateY(0)";

        index++;

        if (index >= lyrics.length) {
            index = 0;
        }

    }, 700);

}

// ==========================================
// BLUE PARTICLES
// ==========================================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let width;
let height;

let particles = [];

function resizeCanvas() {

    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;

}

resizeCanvas();

window.addEventListener("resize", resizeCanvas);

// CREATE PARTICLES

for (let i = 0; i < 130; i++) {

    particles.push({

        x: Math.random() * width,
        y: Math.random() * height,

        size: Math.random() * 1.8 + 0.3,

        alpha: Math.random(),

        speed: Math.random() * 0.015 + 0.003,

        drift: Math.random() * 0.3 - 0.15

    });

}

// DRAW PARTICLES

function drawParticles() {

    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {

        p.alpha += p.speed;

        if (p.alpha >= 1 || p.alpha <= 0) {
            p.speed *= -1;
        }

        p.x += p.drift;

        if (p.x < 0) p.x = width;
        if (p.x > width) p.x = 0;

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(65,160,255,${p.alpha})`;

        ctx.shadowBlur = 12;
        ctx.shadowColor = "#168cff";

        ctx.fill();

    });

    requestAnimationFrame(drawParticles);

}

drawParticles();

// ==========================================
// MULTIPLE BLUE HEART GLOW
// ==========================================

let glow = 0;

function animateHearts() {

    glow += 0.035;

    const hearts = document.querySelectorAll(".heart");

    hearts.forEach((heart, i) => {

        const intensity =
            8 + Math.sin(glow + i * 0.5) * 8;

        heart.style.filter =
            `drop-shadow(0 0 ${intensity}px #168cff)`;

    });

    requestAnimationFrame(animateHearts);

}

animateHearts();

// ==========================================
// BLUE LIGHT FLASH
// ==========================================

console.log("BLUE LOVE EXPERIENCE READY");
console.log("PAPARAZZI - LADY GAGA");
