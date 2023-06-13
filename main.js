
function setup(){
    canvas = createCanvas(550,450)
   canvas.position(960,150)
   video = createCapture(VIDEO)
   video.position(360,150)
   video.size(450,450)
   
   PoseNet = ml5.poseNet(video,modelLoaded);
    PoseNet.on('pose',gotPoses)
   }
function modelLoaded(){
    console.log("model has been loaded")
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
    }
}
   