let canvas = document.querySelector('canvas')
let innerWidth = window.innerWidth, innerHeight = window.innerHeight

canvas.width = innerWidth
canvas.height = innerHeight

c = canvas.getContext('2d')



function randomColour() {
    let hex = '0123456789ABCDEF'
    let hexCode = '#'

    for (let i = 0; i < 6; i++) {
        hexCode = hexCode + hex[Math.floor(Math.random() * hex.length)]
    }

    return hexCode
}




function allBalls (x, y, dx, dy, radius, minIncrease, maxDecrease, sizeSpeed) {
    this.x = x
    this.y = y
    this.dx = dx
    this.dy = dy
    this.radius = radius
    this.minIncrease = minIncrease
    this.maxDecrease = maxDecrease
    this.sizeSpeed = sizeSpeed
    this.ballColour = randomColour()


    this.draw = function() {
        c.beginPath()
        c.arc(x, y, radius, 0, Math.PI * 2, false)
        c.strokeStyle = 'black'
        c.fillStyle = this.ballColour
        c.fill()
        c.stroke()
        
    }

    this.animateMovement = function() {
        x += dx
        y += dy
        if (x > (innerWidth - radius) || x < 0 + radius) {
            dx = -dx
        }
        if (y > (innerHeight - radius) || y < 0 + radius) {
            dy = -dy
        }
    }

    this.animateSize = function() {
        radius += sizeSpeed
        if (radius < minIncrease) {
            sizeSpeed = -sizeSpeed
        }
    
        if (radius > maxDecrease) {
            sizeSpeed = -sizeSpeed
        }
    }
}




let allBallsArray = []
function createMultipleBallsArray() {
    for (let i = 0; i < 100; i++) {
        let radius = Math.floor(Math.random() * 10) + 5;
        let x = Math.random() * (innerWidth - radius * 2) + radius
        let y = Math.random() * (innerHeight - radius * 2) + radius 
        let dx = (Math.random() - 0.5) * 10
        let dy = (Math.random() - 0.5) * 10
        let minIncrease = radius
        let maxDecrease = Math.random() * 20 + 5
        let sizeSpeed = .1

        let ball = new allBalls(x, y, dx, dy, radius, minIncrease, maxDecrease, sizeSpeed)
        allBallsArray.push(ball)
    }
}
createMultipleBallsArray()




function animate () {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, innerWidth, innerHeight)

    for (let i = 0; i < allBallsArray.length; i++) {
        allBallsArray[i].draw()
        allBallsArray[i].animateMovement()
        allBallsArray[i].animateSize()

    }

}
animate()






























    // if (increase) {
    //     radius = increase
    //     increase += speed
    //     if (increase >= demoDe) {
    //         increase = null
    //         decrease = demoDe
    //     }
    // }

    // if (increase == null) {
    //     if (decrease <= demoDe) {
    //         radius = decrease
    //         decrease -= speed
    //         if (decrease <= demoIn) {
    //             increase = demoIn
    //         }
    //     }
    // }