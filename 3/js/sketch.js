let xOff1 = 0;
let xOff2 = 1000;
let inc = 0.01;
let start = 0;

function setup() {
    // body...
    createCanvas(640,480);
}

function draw(){
    background(50);
    stroke(255);
    noFill();
    beginShape();
    let yOff = start;

    for(let x=0; x<width; x++){
        stroke(255);
        let y = noise(yOff)*height;
        vertex(x, y);
        yOff += inc;

    }

    endShape();
    start += inc;
    //noLoop();
/*
    let x = map(noise(xOff1), 0, 1, 0, width);
    let y = map(noise(xOff2), 0, 1, 0, width);
    xOff1 += 0.02;
    xOff2 += 0.02;
*/  
    //ellipse(x,y,25,25);
}