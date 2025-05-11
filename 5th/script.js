let tl = gsap.timeline({
    scrollTrigger:{
        trigger:'.two',
        start:'0% 95%',
        end:"50% 50%",
        scrub: 1,

    }
})

tl.to('#fanta',{
    top:'120%',
    left:'5%'
},'orange')
tl.to('#orange',{
    top:'155%',
    left:'30%',
    
},'orange')

tl.to('#orange-leaf',{
    top:'155%',
    right:'5%',
    
},'orange')

tl.to('#leaf',{
    top:'105%',
    left:'95%',
    Transform:"rotate(120deg)"
    
},'orange')


let tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:'.three',
        start:'0% 95%',
        end:"50% 50%",
        scrub: 1,

    }
})

tl2.from('.lemon1',{
    rotate:'-90deg',
    top:'-30%',
    left:'-100%'
},'lemon')
tl2.from('.lemon3',{
    rotate:'-90deg',
    top:'-30%',
    right:'-100%'
},'lemon')


tl2.to('#orange',{
    left:'40%',
    top:'200%',
    width:'20vw'
},'lemon')
tl2.to('#fanta',{
    left:'35%',
    top:'215%',
    width:'30vw'
},'lemon')