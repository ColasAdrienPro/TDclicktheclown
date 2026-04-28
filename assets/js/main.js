function randomize(min, max) {
    return Math.round(Math.random() * (max - min) + min)
}


const clown = document.querySelector('#clown')
let intertime = null
const china = document.querySelector("china")
let score = 0
let timer = 60
const footercontainer = document.querySelector('#bottom')
let sect = document.querySelector(".img-container")
let moveclownauto = null
clown.addEventListener('click', () => {
    score++
})


function moveclown() {
    const randomleft = randomize(0, 100)
    const randomtop = randomize(0, 100)
    clown.style.left = randomleft + "%"
    clown.style.top = randomtop + "%"

}

function menu() {
    let newsect = sect
    newsect.innerHTML = ""
    let newdiv = document.createElement("div")
    newdiv.classList.add("menu")
    newsect.appendChild(newdiv)
    let facibtn = document.createElement("button")
    facibtn.textContent = "Facile"
    facibtn.classList.add("play")
    newdiv.appendChild(facibtn)
    facibtn.addEventListener("click", () => {
        play(1250)
    })
    let normbtn = document.createElement("button")
    normbtn.textContent = "Normal"
    normbtn.classList.add("play")
    newdiv.appendChild(normbtn)
    normbtn.addEventListener("click", () => {
        play(1000)
    })
    let diffbtn = document.createElement("button")
    diffbtn.textContent = "Difficile"
    diffbtn.classList.add("play")
    newdiv.appendChild(diffbtn)
    diffbtn.addEventListener("click", () => {
        play(750)
    })
}

menu()



function play(interval) {
    const newclown = clown
    const footer = footercontainer
    let newsect = sect
    newsect.innerHTML = ""
    newsect.appendChild(newclown)
    let newpone = document.createElement("p")
    newpone.classList.add("footerpara")
    footer.appendChild(newpone)
    let newptwo = document.createElement("p")
    newptwo.classList.add("footerpara")
    footer.appendChild(newptwo)
    moveclownauto = setInterval(moveclown, interval)
    intertime = setInterval(() => {
        timer--
        if (timer <= 0) {
            clearInterval(intertime)
            clearInterval(moveclownauto)
            endgame()
        }
        newpone.textContent = "Score : " + score
        newptwo.textContent = "Temps restants : " + timer
    }, 1000);
}

function endgame() {
    sect.innerHTML = ""
    const endcontainer = document.createElement("div")
    sect.appendChild(endcontainer)
    endcontainer.classList.add("endmenu")
    const endmsg = document.createElement("h2")
    endcontainer.appendChild(endmsg)
    endmsg.textContent = "Tu as buter trump " + score + " fois"
    const restart = document.createElement("button")
    endcontainer.appendChild(restart)
    restart.classList.add("play")
    restart.textContent = "Recommencer"
    restart.addEventListener("click",function(){
        footercontainer.innerHTML = ""
        score = 0
        timer = 60
        moveclownauto = setInterval(moveclown, 1000)
        menu()

    })

}