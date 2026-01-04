gsap.registerPlugin(ScrollTrigger);

gsap.to('.parallax-icon',{
    x:'70vw',
    y:'60vh',
    scale:1.15,
    rotate:360,
    duration:1,
    scrollTrigger:{
        trigger:'.parallax-icon',
        start:'top top',
        end:'bottom bottom',
        scrub:2
    }
}) 
gsap.from('.card-section .card-container .card',{
    opacity:0,
    y:60,
    stagger:0.4,
    ease: "power2.out",
    scrollTrigger:{
        trigger:'.card-section .card-section .card',
        start:'top 80%',
        end: 'bottom 70%',
        scrub:2
    }
})