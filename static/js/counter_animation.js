// 3. INTERACTIVE COUNTER ANIMATION (INTERSECTION OBSERVER)
document.addEventListener("DOMContentLoaded", () => {
  const metricNumbers = document.querySelectorAll(".metric-number");
  if (metricNumbers.length === 0) return;

  const observerOptions = { threshold: 0.5 };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const target = parseFloat(entry.target.getAttribute("data-target"));
        const isInteger = Number.isInteger(target);
        let current = 0;
        const steps = 50;
        const increment = target / steps;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            entry.target.textContent = isInteger ? target : target.toFixed(1);
            clearInterval(timer);
          } else {
            entry.target.textContent = isInteger
              ? Math.floor(current)
              : current.toFixed(1);
          }
        }, 30);

        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  metricNumbers.forEach((num) => observer.observe(num));
});
