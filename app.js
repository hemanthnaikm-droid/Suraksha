const sosBtn = document.getElementById("sosBtn");

if (sosBtn) {
  
  sosBtn.addEventListener("click", () => {
    
    document.getElementById("alarm").play();
    
    navigator.vibrate([500, 300, 500]);
    
    navigator.geolocation.getCurrentPosition(
      
      (position) => {
        
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;
        
        const location =
          `https://maps.google.com/?q=${lat},${lon}`;
        
        const message =
          `🚨 EMERGENCY ALERT!

I need help immediately.

My Location:
${location}`;
        
        window.open(
          `https://wa.me/?text=${encodeURIComponent(message)}`
        );
        
      }
      
    );
    
  });
  
}

function shareLocation() {
  
  navigator.geolocation.getCurrentPosition(
    
    (position) => {
      
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      
      const location =
        `https://maps.google.com/?q=${lat},${lon}`;
      
      if (navigator.share) {
        
        navigator.share({
          
          title: "My Location",
          text: location
          
        });
        
      } else {
        
        alert(location);
        
      }
      
    }
    
  );
  
}

function fakeCall() {
  
  alert("📞 Incoming Call From MOM");
  
}
let mediaRecorder;
let audioChunks = [];

async function startRecording() {

  const stream =
  await navigator.mediaDevices.getUserMedia({
    audio: true
  });

  mediaRecorder =
  new MediaRecorder(stream);

  mediaRecorder.start();

  mediaRecorder.ondataavailable = e => {
    audioChunks.push(e.data);
  };

  mediaRecorder.onstop = () => {

    const audioBlob =
    new Blob(audioChunks, {
      type: "audio/mp3"
    });

    const audioURL =
    URL.createObjectURL(audioBlob);

    const a =
    document.createElement("a");

    a.href = audioURL;
    a.download = "emergency_recording.mp3";
    a.click();

  };
}
