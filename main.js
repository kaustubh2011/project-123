nosex=0;
nosey=0;
leftwristx=0;
rightwristx=0;
diff=0;
function setup()
{
    canvas=createCanvas(500,300);
    canvas.position(560,150);

    video=createCapture(VIDEO);
    video.size(500,300);
    posenet=ml5.poseNet(video,modelloaded);
    posenet.on('pose',gotposes);
}
function modelloaded()
{
    console.log("posenet is started");
}
function gotposes(results)
{
    if(results.length>0)
    {
        console.log(results);
        nosex=results[0].pose.nose.x;
        nosey=results[0].pose.nose.y;
        leftwristx=results[0].pose.leftWrist.x;
        rightwristx=results[0].pose.rightWrist.x;
    }
}