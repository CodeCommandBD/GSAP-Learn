var init = `M 10 100 Q 250 100 490 100`

var final = `M 10 100 Q 250 100 490 100`

var string = document.getElementById('string')


string.addEventListener('mousemove',(dets)=>{
    init = `M 10 100 Q ${dets.x} ${dets.y} 490 100`
    gsap.to('svg path',{
        attr: {d:init},
        duration:0.3,

    })
})
string.addEventListener('mouseleave',()=>{
   
    gsap.to('svg path',{
        attr: {d:final},
        duration:1.5,
        ease: "elastic.out"
    })    
})