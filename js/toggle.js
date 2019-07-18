function toggle(){

  var burger = document.querySelectorAll('#toggle-box');
  var menuItems = document.querySelectorAll('.menu-item');



    menuItems.forEach(function(menuItem) {
      menuItem.classList.toggle("is-shown");
      });



};
