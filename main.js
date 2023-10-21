function preload(){

}

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white")
}

function draw(){
    strokeWeight(10);
    stroke(100)
    if(mouseIsPressed){
line(pmouseX,pmouseY,pmouseX,pmouseY)
    }
}