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

  // Tabs Sidebar & Tabs Panel
  var tabBtns = document.querySelectorAll(".optionList .optionItem");
  var tabPanels = document.querySelectorAll(".productsWrap .productsGrid");

  // Sidebar Tabs functionality on Click
  for(var i=0; i<tabBtns.length; i++){
    tabBtns[i].onclick = activeTab(i);
    // tabBtns[i].addEventListener("keyup", showPanel(event));
  }

  // Display related panel accordingly
  function activeTab(i){
    return function(){
      // Default Status
      for(var x=0; x < tabBtns.length; x++){
        tabBtns[x].classList.remove("activeItem");
        tabPanels[x].style.display = "none";
      }
      // Active Status
      tabBtns[i].classList.add("activeItem");
      tabPanels[i].style.display = "table";

    }
  }

  // function showPanel(event){
  //   if(event.keyCode === 13){
  //     return activeTab(3);
  //   }
  // }
}