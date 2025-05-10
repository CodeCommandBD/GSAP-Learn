// let  main = document.getElementById('main')

// let cursor = document.getElementById('cursor')



// main.addEventListener('mousemove',(dets)=>{
//     gsap.to(cursor,{
//         x:dets.x,
//         y:dets.y,
//         duration:0.6
//     })
// })


let tl = gsap.timeline()

tl.from('#nav h1, nav ul li, nav button',{
    y:-30,
    opacity: 0,
    duration: 0.5,
    delay: .5,
    stagger:0.2
})

tl.from('#hero h2',{
    x:-500,
    opacity: 0,
    duration: 1
})
tl.from('#hero img',{
    scale : 1,
    opacity: 0,
    duration: 1,

},'-=1')


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'#card',
        scroller: 'body',
        markers: true,
        start:'top 50%',
        end: 'top 0',
        scrub:2, 
    }
})

tl2.from('#descrip',{
    y: 30,
    opacity: 0,

})

tl2.from('#left1 ',{
    x:-200,
    opacity: 0,
    duration: 1
},'ok')
tl2.from('#right1 ',{
    x:200,
    opacity: 0,
    duration: 1
},'ok')



tl2.from('#left2 ',{
    x:-200,
    opacity: 0,
    duration: 1
})
tl2.from('#right2 ',{
    x:200,
    opacity: 0,
    duration: 1
})