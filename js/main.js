const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.btn-close');
const sideWrapper = document.querySelector('.side-wrapper');


let showMenu = false;

if(menuBtn){
  menuBtn.addEventListener('click', toggleMenu);
}

if(closeBtn){
  closeBtn.addEventListener('click', toggleMenu)
}



function toggleMenu(){
  if(!showMenu){
    sideWrapper.classList.add('open');
    menuBtn.classList.add('activate');
    closeBtn.classList.add('show-cross');
    closeBtn.classList.add('activate');

    //set Menu state
    showMenu = true;
  } else {
    sideWrapper.classList.remove('open');
    menuBtn.classList.remove('activate');
    closeBtn.classList.remove('show-cross');
    closeBtn.classList.remove('activate');

    //set Menu state
    showMenu = false;
  }
}

//Function to close side wrapper if outside click 
// function clickOutside(e) {
//   if(e.target == sideWrapper){
//     console.log('clicked');
//   }
 
// }

