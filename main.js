/////                          https://teachablemachine.withgoogle.com/models/cTyubamwL/
Webcam.set({
    width:350,
    height:330,
    image_format : 'png',
    png_quality:90
});

camera = document.getElementById("camera");
Webcam.attach( '#camera' );

function take_snapshot(){
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id ="captured_image" src="'+data_uri+'"/>'; 
    })
}
console.log('ml5 version:', ml5.version);
classifier = ml5.image_classifier('https://teachablemachine.withgoogle.com/models/zW98LHmk0/model.json',modelLoaded)
