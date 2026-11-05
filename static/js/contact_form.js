// 7. DIRECT CLIENT-SIDE CONTACT FORM SUBMISSION WITH HCAPTCHA
window.handleContactSubmit = async function (event) {
  event.preventDefault();

  const form = document.getElementById("contactForm");
  const responseDiv = document.getElementById("form-response");
  const submitBtn = document.getElementById("submit-btn");

  if (!responseDiv || !form) return;

  const formData = new FormData(form);

  // Replace with your actual Web3Forms Access Key
  formData.append("access_key", "9b20597f-3a92-4451-b965-bcdf57717854");
  formData.append("subject", "New Portfolio Message");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  responseDiv.style.color = "var(--text-secondary)";
  responseDiv.textContent = "Sending message...";
  submitBtn.disabled = true;

  try {
    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: json,
    });

    const result = await res.json();

    if (res.status === 200 && result.success) {
      responseDiv.style.color = "var(--accent-secondary)";
      responseDiv.textContent =
        "Thank you! Your message has been sent successfully.";
      form.reset();

      // Reset hCaptcha widget after successful submission
      if (typeof hcaptcha !== "undefined") {
        hcaptcha.reset();
      }
    } else {
      responseDiv.style.color = "#f59e0b";
      responseDiv.textContent =
        result.message || "Please complete the hCaptcha verification.";
    }
  } catch (error) {
    responseDiv.style.color = "#ef4444";
    responseDiv.textContent =
      "Network error. Please email me directly at osama.aslam.86004@gmail.com";
  } finally {
    submitBtn.disabled = false;
  }
};
