const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle("active");
  menuBtn.innerHTML = menu.classList.contains("active") 
    ? '<i class="bi bi-x-lg"></i>' 
    : '<i class="bi bi-list"></i>';
});
