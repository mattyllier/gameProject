const encrypInput = document.getElementById('encrypInput')
const generate = document.getElementById('generate')
const reveal = document.getElementById('reveal')
const thisRound = document.getElementById('thisRound')
const gameBoard = document.getElementById('gameBoard')
const enterSolution = document.getElementById('enterSolution')
const verify = document.getElementById('verify')
const audio = document.getElementById('newLevel')
let round = 0
let hints = 3

const draw1 = ()=>{
    let str1 = '聤eci聰h聥r t聨聩s'
    str1.split('').forEach(a=>{
        let round1 = document.createElement('div')
        gameBoard.appendChild(round1)
        round1.className = 'roundTile'
        round1.innerText = a
        thisRound.innerText = 'Round: 1'
        round = 1
    })
}

generate.addEventListener('click',e=>draw1())

document.querySelector('body').addEventListener('click',e=>{
    if(e.target.className==='roundTile'){
        if(e.target.charCodeAt(0)>30000) e.target.innerText = char.charCodeAt(0)-32768
        hints--
        reveal.innerText = `Reveal Tile: ${hints}`
    }
})

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