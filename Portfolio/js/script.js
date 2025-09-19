// ===================== Typing Animation ===================== //
// Creates a typing effect for multiple roles (using Typed.js library)
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
  typeSpeed: 100, // speed of typing each character
  backspeed: 60, // speed of deleting characters
  loop: true, // keeps repeating infinitely
});

// ===================== Navigation Active Link ===================== //
const navLinks = document.querySelectorAll(".nav a");

// Add "active" class when a nav link is clicked
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    // Remove "active" from all nav links
    navLinks.forEach((nav) => nav.classList.remove("active"));
    // Add "active" to the clicked link
    link.classList.add("active");
  });
});

// ===================== Highlight Active Section on Scroll ===================== //
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
  let current = "";

  // Detect which section is currently in view
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 100; // small offset for better detection
    const sectionHeight = section.clientHeight;

    if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
      current = section.getAttribute("id"); // get section id
    }
  });

  // Highlight the nav link that matches the current section
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// ===================== Contact Form Validation ===================== //
// Get form inputs
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const submitBtn = document.querySelector(".contact-form .btn");

// Create a message element for validation feedback
const msg = document.createElement("p");
msg.style.marginTop = "10px";
msg.style.fontWeight = "bold";
document.querySelector(".contact-form").appendChild(msg);

// Validation function
function validateForm(e) {
  e.preventDefault(); // stop form from refreshing the page

  // Get input values
  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const subject = subjectInput.value.trim();
  const message = messageInput.value.trim();

  // Basic email regex pattern
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

  // Check for empty fields
  if (name === "" || email === "" || subject === "" || message === "") {
    msg.textContent = "⚠️ Please fill in all fields.";
    msg.style.color = "red";

    // Check if email is valid
  } else if (!email.match(emailPattern)) {
    msg.textContent = "⚠️ Please enter a valid email address.";
    msg.style.color = "red";

    // If everything is correct
  } else {
    msg.textContent = "✅ Message sent successfully!";
    msg.style.color = "green";

    // Clear input fields
    nameInput.value = "";
    emailInput.value = "";
    subjectInput.value = "";
    messageInput.value = "";
  }
}

// Add validation on submit button click
submitBtn.addEventListener("click", validateForm);
