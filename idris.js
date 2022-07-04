// const sections = document.querySelector(".section");
// const sectBtns = document.querySelector(".controlls");
// const sectBtn = document.querySelector(".control");
// const allSections = document.querySelector(".main-content");


// function pageTransitions() {
//     // button click active class
//     for(i = 0; i < sectBtn.lenght; 1++ ) {
//         sectBtn[i].addEventListener("click",  function() {
//             let currentBtn = document.querySelectorAll(".active-btn");
//         currentBtn[0].className = currentBtn[0].className.replace("active-btn", "");
//         this.className += "active-btn"

//         })
         
//     }

//     // section active class
//     allSections.addEventListener('click', (e) =>{
//         const id = e.target.dataset.id;
//         if(id){
//             // remove selected from the btn
//             sectBtns.forEach(btn) => {
//                 btn.clasList.remove('active')
//             }
//             e.target.clasList.add('active')
//             // hide other section 
//             sections.forEach((section) =>{
//                 section.clasList.remove('active')
//             })
//             const element = document.getElementById(id);
//             element.classList.add('active');
//         }
//     })
// }

// pageTransitions(); 