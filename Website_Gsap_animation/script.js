const tl = gsap.timeline();

tl.from(".header", {
  opacity:0,
  y:-40,
  duration:0.6
})
.from(".header h2", {
  opacity:0,
  x:-200
})
.from(".header .links a", {
  opacity:0,
  y:-30,
  stagger:0.25
})
.from(".header .links button", {
  opacity:0,
  x:30
})
.from(".hero-section .bg-image img", {
  opacity:0,
  y:-60
})
.from(".hero-section .information h1", {
  opacity:0,
  x:-30
})
.from(".hero-section .information h2", {
  opacity:0,
  x:30
})
.from(".hero-section .information p", {
  opacity:0,
  y:-30
})
.from(".hero-section .information button", {
  opacity:0,
  x:30
})
.from(".container .card", {
  opacity:0,
  x:-30,
  y:30,
  stagger:0.5
});
