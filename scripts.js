window.onload = function(){
  var button = document.getElementById("navbar-toggler");
  var navTopWrap = document.getElementById("navTopWrap");

  // Toggle .open class when Hamburger button is clicked
  button.onclick = function(){
    navTopWrap.classList.toggle("open");
  }

  // Remove .open class when click out
  window.onclick = close_btn;
  window.addEventListener('touchstart', close_btn);

  function close_btn(event){
    if(!event.target.matches('#navbar-toggler')){
      navTopWrap.classList.remove('open');   
    }
  }
}