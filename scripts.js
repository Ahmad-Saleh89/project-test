window.onload = function(){
  var button = document.getElementById("navbar-toggler");
  var navTopWrap = document.getElementById("navTopWrap");

  button.onclick = function(){
    navTopWrap.classList.toggle("open");
  }

  window.onclick = function(event){
    if(!event.target.matches('#navbar-toggler')){
      navTopWrap.classList.remove('open');   
    }
  }

  window.addEventListener('touchstart', function(ev) {
    if(!ev.target.matches('#navbar-toggler')){
      navTopWrap.classList.remove('open');   
    }
  });
}