
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

// let btns = document.getElementsByClassName("computer-key");

let escape = document.getElementsByClassName("escape");
let returns = document.getElementsByClassName("return")

function escapeFrom(){
  escape[0].style.display = "none";
  returns[0].style.display = "block";
}

function returnTo(){
  escape[0].style.display = "block";
  returns[0].style.display = "none";
}

// for(let i = 0 ; i < btns.length; i++){
//   let escape = document.getElementsByClassName("escape");
//   let returns = document.getElementsByClassName("return")
//   window.addEventListener("click", function(){
//     if(btns[i].classList.contains("escape-key")){
//       escape[0].style.display = "none";
//       returns[0].style.display = "block";
//     }
//     else if(btns[i].classList.contains("return-key")){
//       escape[0].style.display = "block";
//       returns[0].style.display = "none";
//     }
//   });
// }
