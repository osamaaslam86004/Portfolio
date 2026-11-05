// 7. CONTACT FORM SIMULATION
window.handleContactSubmit = function (event) {
  event.preventDefault();
  const responseDiv = document.getElementById("form-response");
  if (!responseDiv) return;
  responseDiv.style.color = "var(--accent-secondary)";
  responseDiv.textContent =
    "Thank you! Your message has been sent successfully.";
  const contactForm = document.getElementById("contactForm");
  if (contactForm) contactForm.reset();
};
