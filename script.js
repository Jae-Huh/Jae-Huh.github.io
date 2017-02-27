var menuButton = document.querySelector('#menu-btn');
var menuDisplay = document.querySelector(".menu-display");
var withoutMenu = document.querySelector(".left-container");
var left = document.querySelector(".left")

menuButton.addEventListener('click', function(){
  menuDisplay.classList.toggle('visible');
  withoutMenu.classList.toggle('visible');
  left.classList.toggle('dark-background');
})
