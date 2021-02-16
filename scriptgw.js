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

//btn showallert bawaan browser
// function showAlert() {
//     if (document.forms['target'].email.value == 0){
//         alert("Enter a valid message, and the email must be (example@example.com)");
//     } else {
//         var myText = "Your message has been sent successfully!\rNote: Only valid format of message will be responded";
//         alert (myText);  
//     }
//   }


//btn contact show alert pake sweetalert2
function showAlert() {
    if (document.forms['target'].email.value == 0){
        swal.fire({
            icon: 'error',
            title: 'Enter a valid message',
            text: 'And reminder: email format must be (example@example.com)!',
          });
    } else {
        swal.fire({
            icon: 'success',
            title: 'Your message has been sent successfully!',
            text: 'Note: Only valid format of message will be responded, make sure your email is valid',
          });
    }
  }

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