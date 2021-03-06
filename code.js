Webcam.set({
width:350,
height:300, 
image_format: 'png' ,
png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');

function snapshot() {
    Webcam.snap(function(data_uri) {
     document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5  version:', ml5.version);

classifier = ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/HM9YT3iof/model.json',model);
function model() {
    console.log("Model is loaded")
}


function check() {
    document.getElementById('identify').innerHTML="Please wait...";
    img=document.getElementById('image');
    classifier.classify(img, gotResult);
}

function gotResult(error,result) {
    if (error) {
        console.error(error);
    }
    else {
        console.log(result);
        document.getElementById("obbject").innerHTML=result[0].label;
        document.getElementById("accuracyy").innerHTML=result[0].confidence.toFixed(3);
    
    }
    }
    

