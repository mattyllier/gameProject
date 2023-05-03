const encrypInput = document.getElementById('encrypInput')
const generate = document.getElementById('generate')
const gameBoard = document.getElementById('gameBoard')
const enterSolution = document.getElementById('enterSolution')
const verify = document.getElementById('verify')
let round = 0

generate.addEventListener('click',e=>{
        round = 1
        draw1()
    
})

verify.addEventListener('click',e=>{
    if(round===1 && enterSolution.value.toLowerCase()==='decipherthis' || enterSolution.value.toLowerCase()==='decipher this'){
        console.log('working')
        clear()
        draw2()
        round = 2
    } else(console.log('not working'))
})

const draw1 = ()=>{
    let str1 = '聤eci聰h聥r t聨聩s'
    str1.split('').forEach(a=>{
        const round1 = document.createElement('div')
        gameBoard.appendChild(round1)
        round1.className = 'round'
        round1.innerText = a
        round = 1
    })
    
}

const draw2 = () =>{

}

const clear = () =>{
    gameBoard.removeChild('div')
}