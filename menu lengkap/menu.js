const sections = document.querySelectorAll(".menu-section");
const navLinks = document.querySelectorAll(".cat-link");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => link.classList.remove("active"));

        const id = entry.target.getAttribute("id");
        const activeLink = document.querySelector(`.cat-link[href="#${id}"]`);

        if (activeLink) activeLink.classList.add("active");
      }
    });
  },
  { threshold: 0.35 }
);

sections.forEach((section) => observer.observe(section));
