const encrypInput = document.getElementById('encrypInput')
const generate = document.getElementById('generate')
const reveal = document.getElementById('reveal')
const thisRound = document.getElementById('thisRound')
const gameBoard = document.getElementById('gameBoard')
const enterSolution = document.getElementById('enterSolution')
const verify = document.getElementById('verify')
const audio = document.getElementById('newLevel')
const info = document.getElementById('gameInfo')
const modal = document.getElementById('gamePageModal')
const closeModal = document.getElementById('close')
const gameOver = document.getElementById('gameOver')
let round = 0
let hints = 3

const defaults = ()=>{
    round = 0
    hints = 3
    thisRound.innerText = `Round: ${round}`
    reveal.innerText = `Reveal Tile: ${hints}`
}

const draw1 = ()=>{
    let str1 = '聤eci聰h聥r t聨聩s'
    let keystr1 = 'decipher this'
    str1.split('').forEach(a=>{
        let round1 = document.createElement('div')
        gameBoard.appendChild(round1)
        round1.className = 'roundTile'
        round1.innerText = a
        round1.addEventListener('click',e=>{
        if(hints){
            e.target.innerText = keystr1[str1[e.target]]
            hints--
            reveal.innerText = `Reveal Tile: ${hints}`
            }
        else{
            displayGameOver()
            clear()
            setTimeout(defaults,3000)
            }
        })
        thisRound.innerText = 'Round: 1'
        round = 1
    })
}

info.addEventListener('click',e=>modal.style.display = 'block')
closeModal.addEventListener('click',e=>modal.style.display = 'none')
generate.addEventListener('click',e=>draw1())

verify.addEventListener('click',e=>{
    switch(true){
        case round===1 && enterSolution.value.toLowerCase()==='decipherthis' || enterSolution.value.toLowerCase()==='decipher this':
            verified()   
            setTimeout(draw2,1500)
            break;
        case round===2 && enterSolution.value.toLowerCase()==='reverse=><=esrever':
            verified()
            setTimeout(draw3,1500)
            break;
        case round===3 && enterSolution.value.toLowerCase()==='cryptic':
            verified()
            setTimeout(draw4,1500)
            break;
        case round===4 && enterSolution.value.toLowerCase()==='':
            verified()
            break;
        default:
            enterSolution.style.border = 'solid darkred 10px'
            setTimeout(e=>enterSolution.style.border = 'none',1500)
        }
})

const draw2 = () =>{
    let str2 = 'reverse=><=聲聥聶聥聲聳聥'
    str2.split('').forEach(a=>{
        let round2 = document.createElement('div')
        gameBoard.appendChild(round2)
        round2.className = 'roundTile'
        round2.innerText = a
        thisRound.innerText = 'Round: 2'
        round = 2
    })
}

const draw3 = () =>{
    let str3 = '聣聲ypti聣'
    str3.split('').forEach(a=>{
        let round3 = document.createElement('div')
        gameBoard.appendChild(round3)
        round3.className = 'roundTile'
        round3.innerText = a
        thisRound.innerText = 'Round: 3'
        round = 3
    })
}

const draw4 = () =>{
    thisRound.innerText = 'Round: 4'
    round = 4
}

const revealTile = ()=>{
    
}

const verified = () =>{
    audio.play()
    enterSolution.style.border = 'solid 10px green'
    setTimeout(e=>{
        clear()
        enterSolution.style.border = 'none'
    },1500)
}

const clear = () =>{
    gameBoard.innerHTML = ''
    enterSolution.value = ''
}

const displayGameOver = () =>{
    gameOver.style.display = 'block'
    setTimeout(e=>gameOver.style.display = 'none', 3000)
}