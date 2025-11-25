let btnMenu = document.querySelector("#btn-menu");
let nav = document.querySelector("header nav");
let icons = btnMenu.querySelectorAll("#btn-menu i");

btnMenu.addEventListener("click", function() {
    nav.classList.toggle("oculto");
    
    icons.forEach(icon => {
     icon.classList.toggle("oculto");
    });
});

document.querySelectorAll('.tooltip').forEach(tip => {
  
  const trigger = tip.querySelector('.trigger');
  const box = tip.querySelector('.tooltip-text');

  trigger.addEventListener("mouseenter", () => {
      box.style.display = "block";
  });

  trigger.addEventListener("mouseleave", () => {
      box.style.display = "none";
  });

});

