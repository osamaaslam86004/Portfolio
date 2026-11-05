// 7. CONTACT FORM SIMULATION
function handleContactSubmit(event) {
  event.preventDefault();
  const responseDiv = document.getElementById("form-response");
  responseDiv.style.color = "var(--accent-secondary)";
  responseDiv.textContent =
    "Thank you! Your message has been sent successfully.";
  document.getElementById("contactForm").reset();
}
