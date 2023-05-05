const encrypInput = document.getElementById('encrypInput')
const generate = document.getElementById('generate')
const reveal = document.getElementById('reveal')
const thisRound = document.getElementById('thisRound')
const gameBoard = document.getElementById('gameBoard')
const enterSolution = document.getElementById('enterSolution')
const verify = document.getElementById('verify')
const audio = document.getElementById('newLevel')
const completedAudio = document.getElementById('completedAudio')
const info = document.getElementById('gameInfo')
const modal = document.getElementById('gamePageModal')
const closeModal = document.getElementById('close')
const attemptCount = document.getElementById('attempts')
const gameOver = document.getElementById('gameOver')
const completed = document.getElementById('completed')

let generated = false
let round = 0
let hints = 3
let attempts = 5

const defaults = ()=>{
    round = 0
    hints = 3
    attempts = 5
    generated = false
    thisRound.innerText = `Round: ${round}`
    reveal.innerText = `Reveal Tile: ${hints}`
    attemptCount.innerText = `Attempts: ${attempts}`
}

info.addEventListener('click',e=>modal.style.display = 'block')
closeModal.addEventListener('click',e=>modal.style.display = 'none')
generate.addEventListener('click',e=>{
    if(!generated){
        draw1()
        generated = true
    }
})

verify.addEventListener('click',e=>verifyText())
document.addEventListener('keydown',e=>{
    if(generated && e.key==='Enter') verifyText()
})

const verifyText = ()=>{
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
        case round===4 && enterSolution.value.toLowerCase()==='this is round 4':
            verified()
            setTimeout(draw5,1500)
            break;
        case round===5 && enterSolution.value.toLowerCase()==='5':
            verified()
            setTimeout(draw6,1500)
            break;
        case round===6 && enterSolution.value.toLowerCase()==='6':
            verified()
            setTimeout(draw7,1500)
            break;
        case round===7 && enterSolution.value.toLowerCase()==='7':
            verified()
            setTimeout(draw8,1500)
            break;
        case round===8 && enterSolution.value.toLowerCase()==='8':
            verified()
            setTimeout(draw9,1500)
            break;
        case round===9 && enterSolution.value.toLowerCase()==='completed':
            displayCompleted()
            clear()
            defaults()
            break;
        default:
            if(attempts && generated){
                attempts--
                attemptCount.innerText = `Attempts: ${attempts}`
                enterSolution.style.border = 'solid darkred 10px'
                setTimeout(e=>enterSolution.style.border = 'none',1500)
            } else{
                displayGameOver()
                clear()
                setTimeout(defaults,3000)
            }
        }
    }

const draw1 = ()=>{
    roundStr('聤eci聰h聥r t聨聩s','decipher this')
    round = 1
    thisRound.innerText = `Round: ${round}`
}

const draw2 = () =>{
    roundStr('reverse=><=聲聥聶聥聲聳聥','reverse=><=esrever')
    round = 2
    thisRound.innerText = `Round: ${round}`
}

const draw3 = () =>{
    roundStr('聣聲ypti聣','cryptic')
    round = 3
    thisRound.innerText = `Round: ${round}`
}

const draw4 = () =>{
    roundStr('this is 聲聯聵聮聤 4','this is round 4')
    round = 4
    thisRound.innerText = `Round: ${round}`
}

const draw5 = ()=>{
    roundStr('5','5')
    round = 5
    thisRound.innerText = `Round: ${round}`
}

const draw6 = ()=>{
    roundStr('6', '6')
    round = 6
    thisRound.innerText = `Round: ${round}`
}

const draw7 = ()=>{
    roundStr('7', '7')
    round = 7
    thisRound.innerText = `Round: ${round}`
}

const draw8 = ()=>{
    roundStr('8','8')
    round = 8
    thisRound.innerText = `Round: ${round}`
}

const draw9 = ()=>{
    roundStr('9','completed')
    round = 9
    thisRound.innerText = `Round: ${round}`
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

const displayCompleted = ()=>{
    completed.style.display = 'block'
    completedAudio.play()
    setTimeout(e=>completed.style.display = 'none', 5000)
}

const roundStr = (str,key) =>{
    str.split('').forEach((a,i)=>{
        let round1 = document.createElement('div')
        gameBoard.appendChild(round1)
        round1.className = 'roundTile'
        round1.innerText = a
        round1.value = i
        round1.addEventListener('click',e=>{
        if(hints){
            if(a.charCodeAt(0)>30000){
                e.target.innerText = key[round1.value]
                hints--
                reveal.innerText = `Reveal Tile: ${hints}`
            }
        }else{
            displayGameOver()
            clear()
            setTimeout(defaults,3000)
            }
        })
    })
}

// const draw0 = ()=>{
//     let str1 = '聤eci聰h聥r t聨聩s'
//     let keystr1 = 'decipher this'
//     str1.split('').forEach((a,i)=>{
//         let round1 = document.createElement('div')
//         gameBoard.appendChild(round1)
//         round1.className = 'roundTile'
//         round1.innerText = a
//         round1.value = i
//         round1.addEventListener('click',e=>{
//         if(hints){
//             if(a.charCodeAt(0)>30000){
//                 e.target.innerText = keystr1[round1.value]
//                 hints--
//                 reveal.innerText = `Reveal Tile: ${hints}`
//             }
//         }else{
//             displayGameOver()
//             clear()
//             setTimeout(defaults,3000)
//             }
//         })
//         round = 1
//         thisRound.innerText = `Round: ${round}`
//     })
// }
