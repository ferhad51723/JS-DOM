const accordion = document.getElementsByClassName("accordion");
for (let i = 0; i < accordion.length; i++) {
  accordion[i].addEventListener("click", (event)=>{
    event.target.classList.toggle("active");
    let panel = event.target.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
} 
