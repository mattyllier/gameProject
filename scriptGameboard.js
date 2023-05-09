//used the DOM to save HTML elements on the gameboard page as variables
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

//declaring variables with a global scope that will be reassigned within more than one function
let generated = false
let round = 0
let hints = 9
let attempts = 5

//defaults function is used to set the display and game logic upon page render and upon a game over
const defaults = ()=>{
    round = 0
    hints = 9
    attempts = 5
    generated = false
    gameBoard.style.width = '900px'
    enterSolution.style.width = '380px'
    thisRound.innerText = `Round: ${round}`
    reveal.innerText = `Reveal Tile: ${hints}`
    attemptCount.innerText = `Attempts: ${attempts}`
}

//event listeners added to modal displaying the game instructions as well as the play button
//the 'generated' logic only allows the play button to be clicked if a game is not already active
info.addEventListener('click',e=>modal.style.display = 'block')
closeModal.addEventListener('click',e=>modal.style.display = 'none')
generate.addEventListener('click',e=>{
    if(!generated){
        draw1()
        generated = true
    }
})

//added event listener for verify button on click as well as shortcut for enter key
verify.addEventListener('click',e=>verifyText())
document.addEventListener('keydown',e=>{
    if(generated && e.key==='Enter') verifyText()
})

//this function is called in order for the user input to be verified
//the switch statement contains the correct input that will allow the user to move on to the next round
//if no case matches, meaning the user input is incorrect, attempts are subtracted, after five attempts, game over is triggered
//when the user's input on the final round is verified as correct, a hidden text is revealed telling the user they won
const verifyText = ()=>{
    let solution = enterSolution.value.toLowerCase()
    switch(true){
        case round===1 && solution==='decipher this' || solution==='decipher-this':
            verified()   
            setTimeout(draw2,1500)
            break;
        case round===2 && solution==='reverse=><=esrever':
            verified()
            setTimeout(draw3,1500)
            break;
        case round===3 && solution==='cryptic as well as nebulous' || solution==='cryptic-as-well-as-nebulous':
            verified()
            setTimeout(draw4,1500)
            break;
        case round===4 && solution==='you have reached round 4' || solution==='you-have-reached-round-4':
            verified()
            setTimeout(draw5,1500)
            break;
        case round===5 && solution==='the greatest ineffable clue' || solution==='the-greatest-ineffable-clue':
            verified()
            setTimeout(draw6,1500)
            break;
        case round===6 && solution==='quixotic tendencies' || solution==='quixotic-tendencies':
            verified()
            setTimeout(draw7,1500)
            break;
        case round===7 && solution==='the ephemeral solution' || solution==='the-ephemeral-solution':
            verified()
            setTimeout(draw8,1500)
            break;
        case round===8 && solution==='a sisyphean effort' || solution==='a-sisyphean-effort':
            verified()
            setTimeout(draw9,1500)
            break;
        case round===9 && solution==='it appears no obfuscation can deter your skills' || solution==='it-appears-no-obfuscation-can-deter-your-skills':
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

//functions called for each round, containing the clue that appears on the display and the key used for dynamically changing tiles
//inspiration for some of the more obscure phrases was drawn from chatGPT
const draw1 = ()=>{
    roundStr('聤eci聰h聥r t聨聩s','decipher this')
    round = 1
    thisRound.innerText = `Round: ${round}`
    gameBoard.style.width = '800px'
}

const draw2 = () =>{
    roundStr('reverse=><=聲聥聶聥聲聳聥','reverse=><=esrever')
    round = 2
    thisRound.innerText = `Round: ${round}`
    gameBoard.style.width = '570px'
}

const draw3 = () =>{
    roundStr('聣聲ypti聣 聡s 職el聬 聡s n聥b聵lou聳','cryptic as well as nebulous')
    round = 3
    thisRound.innerText = `Round: ${round}`
    gameBoard.style.width = '900px'
}

const draw4 = () =>{
    roundStr('聹聯u 聨聡v聥 聲聥ach聥d r聯un聤 䀴','you have reached round 4')
    round = 4
    thisRound.innerText = `Round: ${round}`
}

const draw5 = ()=>{
    roundStr('聴h聥 gr聥聡聴es聴 i聮聥ff聡bl聥 聣聬ue','the greatest ineffable clue')
    round = 5
    thisRound.innerText = `Round: ${round}`
    gameBoard.style.width = '830px'
}

const draw6 = ()=>{
    roundStr('q聵聩xo聴i聣 聴聥nd聥n聣ie聳', 'quixotic tendencies')
    round = 6
    thisRound.innerText = `Round: ${round}`
    gameBoard.style.width = '1130px'
}

const draw7 = ()=>{
    roundStr('t聨聥 聥ph聥m聥ral 聳o聬u聴io聮', 'the ephemeral solution')
    round = 7
    thisRound.innerText = `Round: ${round}`
    gameBoard.style.width = '800px'
}

const draw8 = ()=>{
    roundStr('a 聳聩sy聰he聡n e聦聦聯rt','a sisyphean effort')
    round = 8
    thisRound.innerText = `Round: ${round}`
    gameBoard.style.width = '750px'
}

const draw9 = ()=>{
    roundStr('聩t 聡pp聥聡聲s 聮o o聢fu聳c聡聴io聮 c聡聮 聤et聥聲 聹聯u聲 s聫i聬聬s','it appears no obfuscation can deter your skills')
    gameBoard.style.width = '1470px'
    enterSolution.style.width = '800px'
    round = 9
    thisRound.innerText = `Round: ${round}`
}

//the verified function is called when the user answers correctly, this function calls the clear function between rounds
const verified = () =>{
    audio.play()
    enterSolution.style.border = 'solid 10px green'
    setTimeout(e=>{
        clear()
        enterSolution.style.border = 'none'
    },1500)
}

//the clear function resets the display and input bar as empty
const clear = () =>{
    gameBoard.innerHTML = ''
    enterSolution.value = ''
}

//display game over and display completed functions reveal text by changing the default 'hidden' display to block
const displayGameOver = () =>{
    gameOver.style.display = 'block'
    setTimeout(e=>gameOver.style.display = 'none', 3000)
}

const displayCompleted = ()=>{
    completed.style.display = 'block'
    completedAudio.play()
    setTimeout(e=>completed.style.display = 'none', 5000)
}

//this is the most important function used for each round
//this function takes the parameters set in the verified function, the string which will appear on the display is split 
//each character is given its own clickable HTML element appended to the game board display
//the text is the character value and the value is the index of the original string, used to correspond the matching character in the key
//each character element contains an event listener, when clicked, if encrypted, the matching tile from the key is revealed
//the user allowed to reveal three tiles, otherwise game over is triggered

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