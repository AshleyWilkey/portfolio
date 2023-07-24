const navBtn = document.getElementById("mobile-nav");
const navLinks = document.getElementById("nav-links");

function toggleNavLinks(e) {
  console.log(navLinks.style.display);
  if (!navLinks.style.display || navLinks.style.display === "none") {
    navLinks.style.display = "block";
    navBtn.classList.add("active");
  } else {
    navLinks.style.display = "none";
    navBtn.classList.remove("active");
  }
}

navBtn.addEventListener("click", toggleNavLinks);

window.addEventListener("resize", (e) => {
  if (window.innerWidth > 768) navLinks.style.display = "block";
  else navLinks.style.display = "none";
});
