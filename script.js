const container = document.getElementById('container')
const header = document.getElementById('header')



const drawBall = (obj)=>{
    ctx.beginPath
    ctx.fillStyle = `#${Math.floor(Math.random()*16777215).toString(16)}`
    ctx.arc(obj.x,obj.y,obj.radius,0,Math.PI*2,false)
    ctx.fill()
    ctx.closePath()
    requestAnimationFrame(drawBall)
}
requestAnimationFrame(drawBall)

const drawTile = (obj)=>{
    ctx.fillStyle = obj.color
    ctx.fillRect(obj.x,obj.y,obj.w,obj.h)
    ctx.drawImage(img,10,10)
    // ctx.font = 'Tahoma 30px'
    // ctx.fillText = `${obj.text} black`
}

const clear = ()=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
}

window.addEventListener('keydown',e=>{
   // if(tile.x < tile.w||tile.x > canvas.width-tile.w) tile.x = tile.speed
  //  if(tile.y < tile.h||tile.y > canvas.height-tile.h) tile.y = tile.speed
    if(e.key==='ArrowLeft') tile.x-=tile.speed
    if(e.key==='ArrowRight') tile.x+=tile.speed
    if(e.key==='ArrowDown') tile.y+=tile.speed
    if(e.key==='ArrowUp') tile.y-=tile.speed
})

const draw = ()=>{
    clear()
    level.forEach(obj=>drawRect(obj))
    drawBall(orb)
    drawTile(tile)
    requestAnimationFrame(draw)
}
requestAnimationFrame(draw)