const tl = gsap.timeline({ paused: true });

const openIcon = document.querySelector('.header i');
const closeIcon = document.querySelector('.menu-header i');

tl.to('.menu', {
    x: 0,
    duration: 0.6,
    ease: 'power3.out'
})
.from('.menu .menu-header h2', {
    opacity: 0,
    x: -50
})
.from('.menu .menu-header i', {
    opacity: 0,
    x: 50
})
.from('.menu .nav-links a', {
    opacity: 0,
    x: 30,
    stagger: 0.2
})
.from('.menu .nav-links button', {
    opacity: 0,
    y: 30
});

openIcon.addEventListener('click', () => {
    tl.play();
});

closeIcon.addEventListener('click', () => {
    tl.reverse();
});
