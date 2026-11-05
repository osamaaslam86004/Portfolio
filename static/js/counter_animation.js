// 3. INTERACTIVE COUNTER ANIMATION (INTERSECTION OBSERVER)
const metricNumbers = document.querySelectorAll(".metric-number");
const observerOptions = { threshold: 0.5 };

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      const target = parseFloat(entry.target.getAttribute("data-target"));
      let current = 0;
      const increment = target / 50;
      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          entry.target.textContent =
            target % 1 === 0 ? target : target.toFixed(1);
          clearInterval(timer);
        } else {
          entry.target.textContent =
            current % 1 === 0 ? Math.floor(current) : current.toFixed(1);
        }
      }, 30);
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

metricNumbers.forEach((num) => observer.observe(num));
