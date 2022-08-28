function setup() {
canvas = createCanvas(550,550);
canvas.position(1000,250);
video = createCapture(VIDEO);
video.size(550,500);
poseNet = ml5.poseNet(video,modelloaded);
poseNet.on("pose",gotposes);
}

function modelloaded(){
    console.log("पोज नेट जागा हुआ है");

}

function gotposes(results){

    if(results.length>0){
        console.log(results);

    }
    
}


function draw(){
    fill(255,233,15);
    stroke(255,255,255);
    circle(100,100,100);

    rect(100,100,250,100);

    triangle(100, 200, 200, 200,150 , 300)
}



