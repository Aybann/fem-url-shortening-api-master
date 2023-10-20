const menuItem = document.querySelector(".menu-item");
const menuItems = document.querySelectorAll(".menu-item li");

var forEach=function(t,o,r){if("[object Object]"===Object.prototype.toString.call(t))for(var c in t)Object.prototype.hasOwnProperty.call(t,c)&&o.call(r,t[c],c,t);else for(var e=0,l=t.length;l>e;e++)o.call(r,t[e],e,t)};

var hamburgerBtn = document.querySelector(".hamburger");

hamburgerBtn.addEventListener("click", function() {
  toggle();
}, false);

menuItems.forEach((Item) =>{
  Item.addEventListener("click", () =>{
      toggle();
  });
});

function toggle(){
  hamburgerBtn.classList.toggle("is-active");
  menuItem.classList.toggle("open");
}
