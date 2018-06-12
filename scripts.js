window.onload = function(){
  var button = document.getElementById("navbar-toggler");
  var navTopWrap = document.getElementById("navTopWrap");

  button.onclick = function(){
    navTopWrap.classList.toggle("open");
  }

  window.onclick = close_btn;
  window.addEventListener('touchstart', close_btn);

  function close_btn(event){
    if(!event.target.matches('#navbar-toggler')){
      navTopWrap.classList.remove('open');   
    }
  }
}