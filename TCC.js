document.querySelector('#menuBG').addEventListener('mouseover', openNav);
document.querySelector("#main").addEventListener('mouseover', closeNav);


/* Set the width of the side navigation to 250px and the left margin of the page content to 250px and add a black background color to body */
function openNav() {
  document.getElementById("mySidenav").style.width = "300px";
  document.getElementById("main").style.marginLeft = "300px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.6)";
}

/* Set the width of the side navigation to 0 and the left margin of the page content to 0, and the background color of body to white */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
  document.getElementById("main").style.marginLeft = "0";
  document.body.style.backgroundColor = "rgba(0,0,0,0.5)";
}



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
    console.log((sectionTop-sectionHeight/10), scrollY)
    if(scrollY >= (sectionTop - sectionHeight/5)){
      current = section.getAttribute('id');
    }
    console.log(current)
    // console.log(rules)
    // console.log(pricing)
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
// let slideIndex = 0;
// showSlides();

// function showSlides() {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   let dot = document.getElementsByClassName("dot");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";  
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}    
//   for (i = 0; i < dot.length; i++) {
//     dot[i].className = dot[i].className.replace(" active1", "");
//   }
//   slides[slideIndex-1].style.display = "block";  
//   dot[slideIndex-1].className += " active1";
//   setTimeout(showSlides, 5000); // Change image every 2 seconds
// }

//rules&bylaws modal
const overlay = document.querySelector("#overlayRules");
document.querySelector("#show-modal-btn").addEventListener("click", () => {
  overlay.style.display = "block";
});
document.querySelector("#close-modal-btn").addEventListener("click", () => {
  overlay.style.display = "none";
})

// plot modal
const overlay1 = document.querySelector("#overlayPricing");
document.querySelector("#show-pricing-modal").addEventListener("click", () => {
  overlay1.style.display = "block";
});
document.querySelector("#close-pricing-modal").addEventListener("click", () => {
  overlay1.style.display = "none";
})

// home modal
const overlayHome = document.querySelector("#overlayHome");
document.querySelector("#close-home-modal").addEventListener("mouseover", () => {
  // overlayHome.style.display = "none";
  overlayHome.style.width = "0";
})
