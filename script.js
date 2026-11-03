
// =================================
// PAPARAZZI - BLUE LOVE
// =================================

const lyrics = [
    "Every beat, every moment...",
    "Dancing underneath the stars...",
    "A little love in the darkness...",
    "Blue hearts never fade...",
    "Forever in the spotlight..."
];

let index = 0;
let started = false;
let lyricTimer;

const lyric = document.getElementById("lyric");
const music = document.getElementById("music");

// =================================
// START MUSIC AND ANIMATION
// =================================

function startShow() {
    if (started) return;

    started = true;

    music.volume = 0.8;

    music.play().catch(error => {
        console.log("Audio gagal diputar:", error);
    });

    document.querySelector(".play-button").style.display = "none";

    changeLyric();

    lyricTimer = setInterval(changeLyric, 3500);
}

// =================================
// LYRICS ANIMATION
// =================================

function changeLyric() {

    lyric.style.opacity = "0";
    lyric.style.transform = "translateY(12px)";

    setTimeout(() => {

        index = (index + 1) % lyrics.length;

        lyric.textContent = lyrics[index];

        lyric.style.opacity = "1";
        lyric.style.transform = "translateY(0)";

    }, 700);
}

// =================================
// BLUE PARTICLES
// =================================

const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

let w, h;
let particles = [];

function resize() {

    w = canvas.width = window.innerWidth;
    h = canvas.height = window.innerHeight;

}

window.addEventListener("resize", resize);
resize();

for (let i = 0; i < 120; i++) {

    particles.push({

        x: Math.random() * w,
        y: Math.random() * h,
        size: Math.random() * 1.7 + 0.3,
        alpha: Math.random(),
        speed: Math.random() * 0.015 + 0.003

    });

}

// =================================
// DRAW PARTICLES
// =================================

function drawStars() {

    ctx.clearRect(0, 0, w, h);

    particles.forEach(p => {

        p.alpha += p.speed;

        if (p.alpha > 1 || p.alpha < 0) {
            p.speed *= -1;
        }

        ctx.beginPath();

        ctx.arc(
            p.x,
            p.y,
            p.size,
            0,
            Math.PI * 2
        );

        ctx.fillStyle =
            `rgba(75,170,255,${p.alpha})`;

        ctx.shadowBlur = 12;
        ctx.shadowColor = "#168cff";

        ctx.fill();

    });

    requestAnimationFrame(drawStars);

}

drawStars();

// =================================
// HEART GLOW EFFECT
// =================================

let glow = 0;

function animateGlow() {

    glow += 0.035;

    document.querySelectorAll(".heart").forEach((heart, i) => {

        const intensity = 8 + Math.sin(glow + i) * 8;

        heart.style.filter =
            `drop-shadow(0 0 ${intensity}px #168cff)`;

    });

    requestAnimationFrame(animateGlow);

}

animateGlow();

// =================================
// END
// =================================

console.log("BLUE LOVE EXPERIENCE READY");
