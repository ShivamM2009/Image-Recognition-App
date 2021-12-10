camera = document.getElementById("cam");
Webcam.set({
    width:360,
    height:250,
    Image_format:"jpg",
    jpg_quality:90
});
Webcam.attach("#cam")
function takepicture(){
  Webcam.snap(function(data_uri){
      document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
  })
}
console.log("ml5 version",ml5.version)
classifier = ml5.imageClassifier("")