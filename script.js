// NAVBAR MOBILE
const hamburger = document.getElementById("hamburger");
const navLinks = document.getElementById("navLinks");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});


// SLIDER BUTTONS
document.querySelectorAll(".slide-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const targetId = btn.getAttribute("data-target");
    const slider = document.getElementById(targetId);

    const scrollAmount = 320; // jarak geser
    if (btn.classList.contains("left")) {
      slider.scrollLeft -= scrollAmount;
    } else {
      slider.scrollLeft += scrollAmount;
    }
  });
});
