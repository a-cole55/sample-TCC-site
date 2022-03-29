function myFunction() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read More";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read Less";
      moreText.style.display = "inline";
    }
  }
  $(window).on("scroll", function() {

    var currentPos = $(window).scrollTop();

    $('.sidenav li a').each(function() {
        var sectionLink = $(this);
        var section = $(sectionLink.attr('href'));
        if(section.position().top <= currentPos && sectionLink.offset().top + section.height() >= currentPos) {
            $('.sidenav li').removeClass('active');
            sectionLink.parent().addClass('active');
        }
        else {
            sectionLink.parent().removeClass('active');
        }
    });

});


  // $(window).on("scroll", function() {
  //   var currentPos = $(window).scrollTop();
  
  //   $('.nav li a').each(function() {
  //     var sectionLink = $(this);
  //     // capture the height of the navbar
  //     var navHeight = $('#nav-wrapper').outerHeight() + 1;
  //     var section = $(sectionLink.attr('href'));
  
  //     // subtract the navbar height from the top of the section
  //     if(section.position().top - navHeight  <= currentPos && sectionLink.offset().top + section.height()> currentPos) {
  //       $('.nav li').removeClass('active');
  //       sectionLink.parent().addClass('active');
  //     } else {
  //       sectionLink.parent().removeClass('active');
  //     }
  //   });        
  // });    


// //Highlight Current Section on nav
// const current = 0;
// for (var i = 0; i < document.links.length; i++) {
//     if (document.links[i].href === document.URL) {
//         current = i;
//     }
// }
// document.links[current].className = 'current';


// var url = "http://example.com/products.html".split("/"); //replace string with location.href
// var navLinks = document.getElementsByTagName("nav")[0].getElementsByTagName("a");
// //naturally you could use something other than the <nav> element
// var i=0;
// var currentPage = url[url.length - 1];
// for(i;i<navLinks.length;i++){
//   var lb = navLinks[i].href.split("/");
//   if(lb[lb.length-1] == currentPage) {
//    navLinks[i].className = "current";

//   }
//   }
  