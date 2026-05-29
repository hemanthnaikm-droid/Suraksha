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
