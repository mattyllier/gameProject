const encrypInput = document.getElementById('encrypInput')
const generate = document.getElementById('generate')
const gameBoard = document.getElementById('gameBoard')
const generateClicked = false

generate.addEventListener('click',e=>{
    if(generateClicked===false){
        const myArr = encrypInput.value.split('')
        if(myArr.some(a=>a==='聡')) draw1()
        else if(myArr.some(a=>a==='聩')) draw2()
        else draw3()
        generateClicked===true
    }
})

const draw1 = ()=>{
    draw2()
}

const draw2 = ()=>{
    const round2 = document.createElement('h1')
    gameBoard.appendChild(round2)
    round2.className = 'round'
    round2.innerText = '聤 e c i 聰 h 聥 r - t 聨 聩 s'
}

const draw3 = () =>{

}