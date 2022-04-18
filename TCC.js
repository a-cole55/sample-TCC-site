//Read More and Read Less Functionality
function myFunction() {
    const dots = document.getElementById("dots");
    const moreText = document.getElementById("more");
    const btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
};
//navbar highlight
const sections = document.querySelectorAll('section');
const navLi = document.querySelectorAll('nav ul li');
const rules = document.getElementsByTagName('section')[4].id;
const pricing = document.getElementsByTagName('section')[3].id;

window.addEventListener('scroll', ()=> {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if(scrollY >= (sectionTop - sectionHeight/5)){
      current = section.getAttribute('id');
    }
    console.log(current)
    console.log(rules)
    console.log(pricing)
  })
  navLi.forEach( li => {
    li.classList.remove('active');
    if(li.classList.contains(current)){
      li.classList.add('active')
    }
  })
  //fade in rules section
  if (current === rules){
    const rulesText = document.getElementById('listOfRules')
    rulesText.classList.add('fade-in')
    rulesText.classList.remove('hide')
  }
  //plot pricing animation
  if (current === pricing){
    const plotText = document.getElementById('plotPricing')
    plotText.classList.add('fade-in')
    plotText.classList.remove('hide')
  }
})

//gallery slideshow
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dot = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" active1", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dot[slideIndex-1].className += " active1";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}

document.querySelector('#menuBG').addEventListener('click', myFunction)
document.querySelector('#mySidenav').addEventListener('click', close)
//Nav Bar for Mobile
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function myFunction() {
  var x = document.getElementById("mySidenav");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
function close(){
  document.getElementById("mySidenav").style.display = "none";
  }