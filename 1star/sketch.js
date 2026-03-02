function setup(){

    createCanvas(400, 400)
    const whiteBall = new ball(50, 50, 50)
}

function draw(){

    background(220)
    ball.display()    
}