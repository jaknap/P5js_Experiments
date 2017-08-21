//Steering Behaviors

let cnv;
let vehicles=[];
function preload(){
    font=loadFont('AvenirNextLTPro-Demi.otf');
}

function setup(){
    createCanvas(840,680);
    
    let points = font.textToPoints('Pankaj Uchil', 100, 200, 125);
    
    for(values of points){
    let vehicle = new Vehicle(values.x,values.y);
    vehicles.push(vehicle);

}

}


function centerCanvas(){
    
    const w = (windowWidth - width) / 2;
    const h = (windowHeight - height) / 2;
    cnv.position(w,h);
}


function draw(){
    background(130);
    for(v of vehicles){
        v.behaviors();
        v.update();
        v.show();
    }
}