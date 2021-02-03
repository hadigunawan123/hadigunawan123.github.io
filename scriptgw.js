//tambahan parallax gw
const parallax = document.querySelectorAll(".parallax");
window.addEventListener("scroll", function() {
    let offset = window.pageYOffset;
    parallax.forEach(function(prllx, i) {
        // console.log("Parallax " + i + ": " + prllx.offsetTop + " / Window: " + offset);
        prllx.style.backgroundPositionY = (offset - prllx.offsetTop) * 0.7 + "px";
    })
})

//tambahan dark mode
const chk = document.getElementById("chk2");

window.addEventListener("change", () => {
	document.body.classList.toggle('dark');
});

//akhir dr darkmode

// .label .ball {
//     background-color: #fff;
//     border-radius: 50%;
//     position: absolute;
//     top: 0.5px;
//     left: 2px;
//     height: 20px;
//     width: 20px;
//     transform: translateX(0px);
//     transition: transform 0.2s linear;
//     align-items: center;
//   }
//   .checkbox2:checked + .label .ball {
//     transform: translateX(28px);
//   }
  
//   .fa-moon {
//     color: #f1c40f;
//   }
  
//   .fa-sun {
//     color: #f39c12;
//   }

// close hamburger when click outside nav
// window.onload = function(){
//     var hidemenu=document.getElementById('.responsive-menu');
//     document.onclick=function(responsivemenu){
//         if(responsivemenu.target.id !=='.responsive-menu'){
//             hidemenu.style.display='none';
//         }
//     };
// };