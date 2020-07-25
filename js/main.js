// Add all your JS here

  const menuBtn = document.querySelector(".menu-icon span");
  const searchBtn = document.querySelector(".search-icon");
  const cancelBtn = document.querySelector(".cancel-icon");
  const items = document.querySelector(".nav-items");
  const form = document.querySelector("form");
  menuBtn.onclick = () => {
   items.classList.add("active");
   menuBtn.classList.add("hide");
   searchBtn.classList.add("hide");
   cancelBtn.classList.add("show");
  }
  cancelBtn.onclick = () => {
   items.classList.remove("active");
   menuBtn.classList.remove("hide");
   searchBtn.classList.remove("hide");
   cancelBtn.classList.remove("show");
   form.classList.remove("active");
   cancelBtn.style.color = "#ff3d00";
  }
  searchBtn.onclick = () => {
   form.classList.add("active");
   searchBtn.classList.add("hide");
   cancelBtn.classList.add("show");
  }
  
  
  
  
// search-box 

function onPage() { 

 var a = document.getElementById("search").value; 
 
 if (a === "chetan") {
  window.open("https://dcgroup.ml/developer.html");
   }
 if (a === "mr majnu") {
  window.open("https://dcgroup.ml/one.html");
   }
 if (a === "a gentleman") {
  window.open("https://dcgroup.ml/two.html");
   }
 if (a === "avenger endgame") {
  window.open("https://dcgroup.ml/three.html");
   }
 if (a === "captain marvel") {
  window.open("https://dcgroup.ml/four.html");
   }
 if (a === "jay love kush" ) {
  window.open("https://dcgroup.ml/five.html");
   }
 if (a ==="dr strange" ) {
  window.open("https://dcgroup.ml/six.html");
   }
 if (a ==="infinity war") {
  window.open("https://dcgroup.ml/seven.html");
   }
 if (a === "kgf" ) {
  window.open("https://dcgroup.ml/eight.html");
   }
 if (a === "bollywood") {
  window.open("https://dcgroup.ml/bollywood.html");
   }
 if (a === "south hindi" ) {
  window.open("https://dcgroup.ml/south%20hindi.html");
   }
}

