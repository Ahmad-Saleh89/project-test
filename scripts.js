window.onload = function(){
  var button = document.getElementById("navbar-toggler");
  var navTopWrap = document.getElementById("navTopWrap");

  // Toggle .open class when Hamburger button is clicked
  button.onclick = function(){
    navTopWrap.classList.toggle("open");
  }

  /* Close Hamburger btn when Clicking occurs outside */
  window.onclick = close_btn;
  window.addEventListener('touchstart', close_btn);
  function close_btn(event){
    // Remove .open class when click out
    if(!event.target.matches('#navbar-toggler')){
      navTopWrap.classList.remove('open');   
    }
  }

  // Tabs Sidebar & Tabs Panel
  var tabBtns = document.querySelectorAll(".optionList .optionItem");
  var panels = document.querySelectorAll(".productsWrap .productsGrid");

  // Sidebar Tabs functionality on Click
  for(var i=0; i<tabBtns.length; i++){
    tabBtns[i].addEventListener("click", activeTab(i));
    tabBtns[i].addEventListener("keyup", showPanel);
  }

  // Display related panel accordingly
  /**
   * PARAM integer the current index of the clicked element
   * 
   */
  function activeTab(clickedTabIndex){
    return function(){
      // Default Status
      // Loop through Tabs Buttons
      for(var x=0; x < tabBtns.length; x++){
        // Delete .activeItem calss from all tab buttons 
        tabBtns[x].classList.remove("activeItem");
        // Don't show any panel
        panels[x].style.display = "none";
      }

      // Add .activeItem class to the clicked tab button
      this.classList.add("activeItem");
      // Display the corresponding Panel
      panels[clickedTabIndex].style.display = "table";
    }
  }

  // Show Panel when 'Enter' is clicked
  function showPanel(event){
    if(event.keyCode === 13){
      // Apply Click 
      this.click();
    }
  }
}