let spansProgresse = Array.from(document.querySelectorAll(".spansProgresse"))
console.log(spansProgresse)
let skillsSection = document.querySelector(".skills");
console.log(skillsSection)
window.addEventListener("scroll",()=>{
    if(skillsSection.offsetTop + 100 < window.scrollY){
        spansProgresse.forEach((e)=>{
            e.style.width = e.dataset.progresse
        })
    }
    // console.log(window.scrollY)
})

let date = new Date("Feb 21 2024").getTime()
console.log(date)
let countDown = setInterval(()=>{
    let timeNow = new Date().getTime()
    let duration = date - timeNow;
    let days = Math.floor((duration / (1000 * 60 * 60 * 24)))
    let hours = Math.floor((duration % (1000 * 60 * 60 * 24)) / 1000 / 60 /60)
    let minutes = Math.floor((duration % (1000 * 60 * 60 )) / 1000 / 60)
    let seconds = Math.floor((duration % (1000 * 60  )) / 1000 )
    document.querySelector(".days").innerHTML = days >= 10 ? days : `0${days}`
    document.querySelector(".hours").innerHTML = hours >= 10 ? hours : `0${hours}`
    document.querySelector(".minutes").innerHTML = minutes >= 10 ? minutes : `0${minutes}`
    document.querySelector(".seconds").innerHTML = seconds >= 10 ? seconds : `0${seconds}`
    if(duration === 0){
        clearInterval(countDown)
    }
},1000)
let statics = Array.from(document.querySelectorAll(".sts"));
let staticSection = document.querySelector(".static");
window.addEventListener("scroll",()=>{
    if(staticSection.offsetTop - 100 < window.scrollY){
        statics.forEach((e)=>{
            let count = setInterval(()=>{
                if(e.dataset.target != e.innerHTML){
                    e.innerHTML++;
                }else{
                    clearInterval(count)
                }
            },2000 / e.dataset.target)
        })
    }
})