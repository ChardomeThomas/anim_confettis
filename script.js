

const containerSlot = document.querySelector('.slot');
const btnConfettis = document.querySelector('.btn-confettis');
const emojis = ["👏","🎊","🎉"];

btnConfettis.addEventListener('click', fiesta)

function fiesta() { 
    if(isTweening()) return;
    showCongratulations();
    for(let i = 0; i < 50; i++){
        const confetti = document.createElement('div');
        confetti.innerText = emojis[Math.floor(Math.random() * emojis.length)];
        containerSlot.appendChild(confetti);
    }

    animateConfettis();
}

function animateConfettis(){

const TLCONF = gsap.timeline();

TLCONF
.to('.slot div', {
    y: "random(-100,100)",
    x: "random(-100,100)",
    z: "random(0,1000)",
    rotation: "random(-90,90)",
    duration: 1
})
// autoAlpha = opacity et visibility
.to('.slot div', {autoAlpha: 0, duration: 0.3}, "-=0.2")
.add(() => { 
    containerSlot.innerHTML = "";
});
}

function isTweening(){
    return gsap.isTweening('.slot div');
}


var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

function showCongratulations() {
  modal.style.display = "block";
}
