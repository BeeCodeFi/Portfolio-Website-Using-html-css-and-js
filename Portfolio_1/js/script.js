// Typin Animation
var typed = new Typed(".typing", {
  strings: [
    "",
    "Web Developer",
    "Backend Developer",
    "Content Creator",
    "App Developer",
    "Video Editor",
    "UI/UX Designer",
    "Business Analyst",
  ],
  typeSpeed: 100,
  backspeed: 60,
  loop: true,
});

const navLinks = document.querySelectorAll(".nav a");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((nav) => nav.classList.remove("active"));
    link.classList.add("active");
  });
});
