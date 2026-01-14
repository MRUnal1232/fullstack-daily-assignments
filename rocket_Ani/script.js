gsap.registerPlugin(ScrollTrigger);

// 1. STARFIELD LOGIC
const canvas = document.getElementById('starfield');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let stars = Array(200).fill().map(() => ({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    size: Math.random() * 2,
    speed: Math.random() * 2
}));

function animateStars() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "white";
    stars.forEach(s => {
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
        s.y += s.speed * (window.scrollY * 0.005 + 1); // Warp speed effect
        if (s.y > canvas.height) s.y = 0;
    });
    requestAnimationFrame(animateStars);
}
animateStars();

// 2. ROCKET PATHING
gsap.to("#rocket", {
    scrollTrigger: {
        trigger: "main",
        start: "top top",
        end: "bottom bottom",
        scrub: 1.5
    },
    motionPath: {
        path: [{x: 100, y: 100}, {x: 600, y: 400}, {x: 100, y: 800}],
    },
    x: "70vw",
    rotation: 90,
    ease: "none"
});

// 3. CARD ACTIVATION
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    ScrollTrigger.create({
        trigger: card,
        start: "top center",
        onEnter: () => card.classList.add('active'),
        onLeaveBack: () => card.classList.remove('active'),
    });
});