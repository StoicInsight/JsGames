const canvas = document.getElementById('canvas')
// Used to paint on the canvas
const ctx = canvas.getContext('2d')

// ctx.beginPath()
// // define rectangle: First 2 values specify coordinates ~ Second two values are for width & height
// ctx.rect(60, 80, 100, 50) 
// ctx.fillStyle = '#FF0000'
// // Paint Square
// ctx.fill()
// ctx.closePath()


ctx.beginPath()
ctx.arc(240, 160, 30, 0, Math.PI * 2, false )
ctx.fillStyle = 'rgba( 0, 0, 255, 0.5)'
ctx.stroke()
ctx.closePath()

