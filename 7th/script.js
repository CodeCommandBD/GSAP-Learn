
gsap.to('.imgCon', {
    ease: "power2.inOut",
    width: '100%',
    duration: 2,
    stagger: 2,
})

gsap.to('.text h1',{
    ease: 'power2.inOut',
    stagger: 2,
    top: 0,
    
})
gsap.to('.text h1',{
    delay: 2,
    ease: 'power2.inOut',
    stagger: 2,
    top: "-100%",
    
})