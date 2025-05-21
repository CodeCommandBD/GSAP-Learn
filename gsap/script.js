// Nav bar


let navtl = gsap.timeline()

navtl.from('h5', {
    y: 10,
    duration:3
})

navtl.from('.item a',{
    y: 20,
    opacity:0,
    duration: 3,
    stagger: 1
})








gsap.to('#box',{
    x:500,
    duration: 3,
    delay:1,
    // repeat use korle repeat korbe animation ----- jodi minus value dei infinity loop hoiye jabe ---- repeat ek derection a move kore 
    repeat: -1,
    //yoyo use korle left to right right to left derection e move korte pare  
    yoyo: true
})
gsap.from('#box2',{
    x:500,
    duration:3,
    delay: 1,
    rotation: 380,
    background: 'orange',
    borderRadius: "50%"
})


//  akhane  from dile final to initial animation hobe cz 
//  defult color white r set kora hoise red tahole 
//  white is initial and red is final 
//  so from dile final to initial e move kore 
//  like red to white
//  opacity hide to show hobe
//  defult 1(show) to 0(hide)
//  final to initial
//  0(hide) to 1(show)defult

gsap.from('h1',{
    opacity: 0,
    color: 'red',
    duration:2,
    delay: 2,
    y: 30,
    // stagger hocce ek er odik element thakle ekta ekta kore opr theke show korbe ---- minus value dile nicher thika show korbe
    stagger: 1,  
})

//  akhane  to dile  initial to final animation hobe cz 
//  defult color white r set kora hoise red tahole 
//  white is initial and red is final 
//  so to dile  initial to final  e move kore 
//  like  white to red
//  opacity show to hide hobe
//  defult 1(show) to 0(hide)
//  initial to final

gsap.to('h2',{
    opacity:0,
    color: 'red',
    duration:2,
    delay: 2
})


//  timeline 

//  timeline hocce ekta enimation ses na howa porjontw arekta suru hobe na.

let tl = gsap.timeline()

tl.to('.one',{
    x: 300
})
tl.to('.two',{
    x: 300
})
tl.to('.three',{
    x: 300
})



//################# scrollTrigger

// gsap.from('.page2 .con',{
//     x: 200,   
//     duration:2,
//     scrollTrigger:{
//         trigger:'.page2 .con',
//         // locomotive use korle scroller e body dora jabe na 
//         scroller: 'body',
//         markers: true,
//         start: '50% 50%',
//         end: '60% 40%'

//     }
// })
gsap.from('.page2 .con2',{
    x: -200,   
    duration:2,
    rotate: 360,
    scrollTrigger:{
        trigger:'.page2 .con2',
        // locomotive use korle scroller e body dora jabe na 
        scroller: 'body',
        start: '0% 50%',
        end: '0% 30%',
        // scrub use korle animation start to end porjontw cholbe
        scrub: 2

    }
})

let scrollTl = gsap.timeline()



//###################  pin 

gsap.to('.pin2 h4',{
    transform: "translateX(-140%)",
    duration:3,
    delay:2,
    scrollTrigger:{
        trigger: '.pin2',
        scroller: 'body',
        markers: true,
        start:'50% 50%',
        end:'50% 20%',
        scrub:2,
        // animation ses na howa porjontw pin hoiya thakbe 
        pin:true
    }
})

