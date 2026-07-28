const text = [

"Machine Learning Engineer",

"AI Developer",

"FastAPI Backend Developer",

"Problem Solver"

];

let index = 0;
let char = 0;
let deleting = false;

const typing = document.getElementById("typing");

function typeEffect() {

const current = text[index];

if (!deleting) {

typing.textContent = current.substring(0, char++);

if (char > current.length) {

deleting = true;

setTimeout(typeEffect, 1500);

return;

}

} else {

typing.textContent = current.substring(0, char--);

if (char === 0) {

deleting = false;

index = (index + 1) % text.length;

}

}

setTimeout(typeEffect, deleting ? 60 : 100);

}

typeEffect();
/* Scroll Reveal Animation */

const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {

    reveals.forEach((element) => {

        const top = element.getBoundingClientRect().top;

        const windowHeight = window.innerHeight;

        if (top < windowHeight - 100) {
            element.classList.add("active");
        }

    });

});
/* Back To Top Button */

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", () => {

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};

/* Smooth navbar active links */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll(".navbar ul li a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(scrollY>=sectionTop){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});