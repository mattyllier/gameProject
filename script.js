//located elements from the primary HTML page saving them as variables
const container = document.getElementById('container')
const input = document.getElementById('mainInput')
const encry = document.getElementById('encrypt')
const decry = document.getElementById('decrypt')
const info = document.getElementById('about')
const modal = document.getElementById('modal')
const closeModal = document.getElementById('close')

//added event listeners for the modal window, encrypt and decrypt buttons
info.addEventListener('click',e=>modal.style.display = 'block')
closeModal.addEventListener('click',e=>modal.style.display = 'none')

encry.addEventListener('click',e=>{
    let myStr = input.value
    const output = encrypt(myStr)
    input.value = output
})

decry.addEventListener('click',e=>{
    let myStr = input.value
    const output = decrypt(myStr)
    input.value = output
})

//the functions which take a string and convert the character code of each character to binary
//converting to binary is not necessary in this case, but is used as an example of potential application
//the array of numbers is mapped, adding 100000000 to the character code and retrieving the corresponding characters
const encrypt = (str)=>{
    const arr = str.toLowerCase().split('').map(a=>a.charCodeAt(0).toString(2))
    const newArr = arr.map(a=>arr[a]=`100000000${a}`)
    return newArr.map(a=>String.fromCharCode(parseInt(a,2))).join('')
}

const decrypt = (str) =>{
    const arr = str.split('').map(a=>a.charCodeAt(0).toString(2))
    const newArr = arr.map(a=>a.replace(/100000000/,''))
    return newArr.map(a=>String.fromCharCode(parseInt(a,2))).join('')
}