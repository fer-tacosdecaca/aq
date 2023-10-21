function preload(){
classifier = ml5.imageClassifier("DoodleNet")
}

function setup(){
    canvas = createCanvas(280,280);
    canvas.center();
    background("white")
    canvas.mouseReleased(classifyCanvas);
    synt = window.speechSynthesis;
}

function draw(){
    strokeWeight(10);
    stroke(100)
    if(mouseIsPressed){
line(pmouseX,pmouseY,pmouseX,pmouseY)
    }
}


function classifyCanvas(){
classifier.classify(canvas,gotResult);
}

function gotResult(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        document.getElementById("confidence").innerHTML = 'Confianza: ' +(results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("label").innerHTML ='Etiqueta: ' +(results[0].label);
    utterThis = new SpeechSynthesisUtterance(results[0].label)
    synt.speak(utterThis)
    }

    

}
function delcanvas(){
    background("white")
}