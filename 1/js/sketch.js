let cnv;

function setup(){
    cnv = createCanvas(640,480);
    centerCanvas();
    background(150,100,0);
}

function centerCanvas(){
    
    const w = (windowWidth - width) / 2;
    const h = (windowHeight - height) / 2;
    cnv.position(w,h);
}



function windowResized(){
    centerCanvas();
}

function draw(){
    fill('hsb(160, 100%, 50%)');
    ellipse(100,100,90,90);

}