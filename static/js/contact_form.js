// 7. CONTACT FORM SUBMISSION TO VERCEL PROXY
window.handleContactSubmit = async function (event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  const responseDiv = document.getElementById("form-response");
  const submitBtn = document.getElementById("submit-btn");

  if (!responseDiv || !form) return;

  const formData = new FormData(form);
  const object = Object.fromEntries(formData);

  responseDiv.style.color = "var(--text-secondary)";
  responseDiv.textContent = "Sending message...";
  submitBtn.disabled = true;

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(object),
    });

    const result = await res.json();

    if (res.status === 200 && result.success) {
      responseDiv.style.color = "var(--accent-secondary)";
      responseDiv.textContent =
        "Thank you! Your message has been sent successfully.";
      form.reset();
    } else {
      responseDiv.style.color = "#f59e0b";
      responseDiv.textContent = result.message || "Failed to send message.";
    }
  } catch (error) {
    responseDiv.style.color = "#ef4444";
    responseDiv.textContent =
      "Network error. Please email me directly at osama.aslam.86004@gmail.com";
  } finally {
    submitBtn.disabled = false;
  }
};
