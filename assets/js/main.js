// Toogle class active
const NavbarNav = document.querySelector(".Navbar-nav");
// Ketika hamburger menu di-klik
document.querySelector("#hamburger-menu").onclick = () => {
  NavbarNav.classList.toggle("active");
};
