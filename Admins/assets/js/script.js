var adminUsername = "admin";
var adminPassword = "admin123";
var loginContainer = document.getElementById("loginContainer");
var dashboard = document.getElementById("dashboard");
var sideMenu = document.getElementById("sideMenu");
 
function logout() {
dashboard.classList.add("hidden");
loginContainer.classList.remove("hidden");
sideMenu.classList.remove("show");
document.getElementById("navbarContainer").classList.add("hidden");
}


function toggleMenu() {
  sideMenu.classList.toggle("show");
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
  toggleMenu();
}
function locat(){
  window.location.href = "registration_form.html";
}