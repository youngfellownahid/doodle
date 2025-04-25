let canvas,classifier,synth;
function setup() {
  canvas=createCanvas(400, 400);
  canvas.center();
  background('skyblue');
  classifier = ml5.imageClassifier("DoodleNet");
  canvas.mouseReleased(classifyCanvas);
  synth=window.speechSynthesis;
}

function classifyCanvas(){
  classifier.classify(canvas, gotResult);
}

function gotResult(results){
  console.log(results);
  document.getElementById('obj').innerHTML=results[0].label;
  document.getElementById('acc').innerHTML=(results[0].confidence*100).toFixed(2)+'%';
  let utterthis=new SpeechSynthesisUtterance(results[0].label);
  synth.speak(utterthis);
}


function clearCanvas(){
  background('skyblue');
}


function draw() {
  stroke('green');
  strokeWeight(13);
  if (mouseIsPressed){
    line(pmouseX,pmouseY,mouseX,mouseY);
  }
}