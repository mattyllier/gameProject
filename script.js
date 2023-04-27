const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')

let level = []

const tile = {
    x : 50,
    y : 100,
    h : 40,
    w : 40,
    color : 'lemonchiffon',
    speed : 10,
    text : 'S'
}

const orb = {
    x : Math.random()*canvas.width-20,
    y : Math.random()*canvas.height-20,
    radius : 20,
    color : `#${Math.floor(Math.random()*16777215).toString(16)}`
}

const drawBall = (obj)=>{
    ctx.beginPath
    ctx.fillStyle = obj.color
    ctx.arc(obj.x,obj.y,obj.radius,0,Math.PI,false)
    ctx.fill()
    ctx.closePath()
    requestAnimationFrame(drawBall)
}
requestAnimationFrame(drawBall)

const drawTile = (obj)=>{
    ctx.fillStyle = obj.color
    ctx.fillRect(obj.x,obj.y,obj.w,obj.h)
    // ctx.font = 'Tahoma 30px'
    // ctx.fillText = `${obj.text} black`
}

const clear = ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

window.addEventListener('keydown',e=>{
    if(e.key==='ArrowLeft') tile.x-=tile.speed
    if(e.key==='ArrowRight') tile.x+=tile.speed
    if(e.key==='ArrowDown') tile.y+=tile.speed
    if(e.key==='ArrowUp') tile.y-=tile.speed
})

const draw = ()=>{
    clear()
    level.forEach(obj=>drawRect(obj))
    drawTile(tile)
    drawBall(orb)
    requestAnimationFrame(draw)
}
requestAnimationFrame(draw)