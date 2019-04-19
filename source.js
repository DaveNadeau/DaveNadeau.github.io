
// ****ADD EXTERNAL LINKS (IE GITHUB)****//
//known issues:
// if scroll to bottom without stopping, loop is never checked, no solution yet

// mobile menu conflict solution is to add :" && screenWidth > 797px; " to start
// of if statement (pseudo-code)
let links = document.getElementsByClassName("extLinks");

window.addEventListener("scroll", function(){
  for(let i = 0; i < links.length; i++){
    if (document.getElementById("navAdd").classList.contains("navbar-transparent") || window.scrollY === 0) {
        links[i].style.display = "none";
    }
    else{
      links[i].style.display = "block";
    }
  }
});
