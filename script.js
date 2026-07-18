/* ============================================
   SCENES
============================================ */

const scenes = document.querySelectorAll(".scene");

let currentScene = 0;

function showScene(index){

    scenes.forEach(scene=>{

        scene.classList.remove("active");

    });

    scenes[index].classList.add("active");

}

showScene(0);

/* ============================================
   TIMELINE
============================================ */

setTimeout(()=>{

    showScene(1);

},6000);

setTimeout(()=>{

    showScene(2);

},12000);


/* ============================================
   CREATE STARS
============================================ */

const stars = document.getElementById("stars");

for(let i=0;i<250;i++){

    const star = document.createElement("div");

    star.className = "star";

    const size = Math.random()*2.5 + 2;

    star.style.width = size+"px";
    star.style.height = size+"px";

    star.style.left = Math.random()*100+"%";

    star.style.top = Math.random()*100+"%";

    star.style.opacity = Math.random();

    star.style.animationDuration =
        (2+Math.random()*5)+"s";

    star.style.animationDelay =
        Math.random()*5+"s";

    stars.appendChild(star);

}


/* ============================================
   FLOATING PARTICLES
============================================ */

const particleContainer =
document.getElementById("particles");

function createParticle(){

    const particle =
    document.createElement("div");

    particle.className="particle";

    const size=Math.random()*4+2;

    particle.style.width=size+"px";

    particle.style.height=size+"px";

    particle.style.left=Math.random()*100+"vw";

    particle.style.bottom="-10px";

    particle.style.animationDuration=
    (10+Math.random()*12)+"s";

    particle.style.opacity=
    Math.random();

    particleContainer.appendChild(particle);

    setTimeout(()=>{

        particle.remove();

    },22000);

}

setInterval(createParticle,250);


/* ============================================
   PARALLAX
============================================ */

document.addEventListener("mousemove",(e)=>{

    const x=(e.clientX/window.innerWidth-.5)*20;

    const y=(e.clientY/window.innerHeight-.5)*20;

    document.querySelector(".aurora").style.transform=
    `translate(${x}px,${y}px)`;

});


