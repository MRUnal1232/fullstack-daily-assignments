
gsap.registerPlugin(ScrollTrigger);
// Register GSAP (if using modules)
// gsap.registerPlugin();

gsap.from(".letter", {
  duration: 1.2,
  y: 200,             // Start 200px below original position
  ease: "power4.out", // Smooth deceleration
  stagger: 0.1,       // Delay between each letter (creates the wave effect)
  skewY: 10,          // Optional: adds a slight tilt as they rise
  opacity: 0          // Fades in while rising
});

gsap.from(".card-grid .card:nth-child(odd)", {
  opacity: 0,
  y: "50px",
  stagger: 0.5
});

gsap.from(".card-grid .card:nth-child(even)", {
  opacity: 0,
  y: "-50px",
  stagger: 0.5
});
gsap.to(".loader-container .box", {
  rotation: 360,
  repeat: -1,
  duration: 2,
  ease: "none",
  borderRadius: "50%",
  backgroundColor: "blue" 
});
gsap.from(".page1 .box1", {
  opacity: 0,
  y: 100,
  rotation: 360,
  borderRadius: "50%",
  backgroundColor: "red",

  scrollTrigger: {
    trigger: ".page1 .box1",
    scroller: "body",
    start: "top 70%",
    end: "top 30%",
    markers: true,
    scrub: 3
  }
});