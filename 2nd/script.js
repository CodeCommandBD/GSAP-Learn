let  main = document.getElementById('main')

let cursor = document.getElementById('cursor')



main.addEventListener('mousemove',(dets)=>{
    gsap.to(cursor,{
        x:dets.x,
        y:dets.y,
        duration:0.8
    })
})