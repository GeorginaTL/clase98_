var Humano = window.webkitSpeechRecognition;
  
var Jhon = new Humano();

function start()
{
    document.getElementById("textbox").innerHTML = ""; 
   Jhon.start();
} 
Jhon.onresult = function(info) { 

    console.log(info); 
   
   var mensaje = info.results[0][0].transcript;
   
       document.getElementById("textbox").innerHTML = mensaje;
       console.log(mensaje);
       
      
         if(mensaje =="toma mi selfie"|mensaje =="Toma mi selfie")
         {
           console.log("tomando selfie --- ");
           speak();
         }
   }


   function speak(){
    var synth = window.speechSynthesis;

    speak_data = "Tomando tu selfie en 5 segundos";
    //speak_data = document.getElementById("textbox").value;

    var utterThis = new SpeechSynthesisUtterance(speak_data);

    synth.speak(utterThis);

    Webcam.attach(camera);

    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 5000);
}

 

Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}


function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
   /*
   function speak(){
    var gato = window.speechSynthesis;

    textoCaja = "Tomando tu selfie en 5 segundos";
    //textoCaja = document.getElementById("textbox").value;

    var traduccion = new SpeechSynthesisUtterance(textoCaja);

    gato.speak(traduccion);

   Webcam.attach("camera");


    setTimeout(function()
    { 
        take_snapshot(); 
        save();
    }, 5000);
}

Webcam.set({
    width:360,
    height:250,
    image_format : 'jpeg',
    jpeg_quality:90
});
camera = document.getElementById("camera");

function take_snapshot()
{
    Webcam.snap(function(data_uri) {
        document.getElementById("result").innerHTML = '<img id="selfie_image" src="'+data_uri+'"/>';
    });
}





function save()
{
  link = document.getElementById("link");
  image = document.getElementById("selfie_image").src ;
  link.href = image;
  link.click();
}
 */