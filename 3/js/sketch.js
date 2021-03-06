//Perlin Noise


let xOff1 = 0;
let xOff2 = 1000;
let inc = 0.01;
let start = 0;

function setup() {
    createCanvas(640,480);
}

function draw(){
    let yOff = 0;

    loadPixels();
    
    for(let x=0; x<width; x++){
        let xOff = 0;
        for(let y=0; y<height; y++){
        let index = ( x+y*width)*4;
        let r = noise(xOff, yOff)*255;

        pixels[ index + 0 ] = r;
        pixels[ index + 1 ] = r;
        pixels[ index + 2 ] = r;
        pixels[ index + 3 ] = 255;   

        xOff += inc;   
     }
     yOff += inc
    }

    updatePixels();
    
}