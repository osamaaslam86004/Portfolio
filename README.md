# Osama Aslam | Senior Python & AI/ML Systems Engineer Portfolio

A modern, high-performance developer portfolio showcasing enterprise Python backend microservices, asynchronous architectures, stateful LLM multi-agent pipelines (LangGraph), and real-time computer vision systems.

Built with a custom **Glassmorphic design system**, vanilla **HTML5/CSS3/JavaScript**, and integrated with **Web3Forms + hCaptcha** for secure, client-side email delivery.

---

## 🌟 Key Features

* **Glassmorphism UI/UX**: Custom CSS design system supporting dark and light themes with state persistence via `localStorage`.
* **Dynamic Typing & Counter Animations**: Built using asynchronous JS loops and native `IntersectionObserver` APIs.
* **Architecture Visualizers**: SVG-based modal flowcharts detailing backend request lifecycles and agent topologies.
* **Interactive Contact Hub**: Contact form with built-in client-side validation, **hCaptcha spam protection**, and direct-to-Gmail routing via Web3Forms.
* **Zero-Dependency Core**: Lightweight frontend rendering without heavy frameworks or build tool overhead.
* **Serverless Ready**: Configured for instant, zero-config static hosting on **Vercel**.

---

## 🚀 Tech Stack

### Frontend & UI
* **Core**: HTML5, CSS3 Variables, ES6+ Vanilla JavaScript
* **Typography**: Inter & Fira Code (Google Fonts)
* **Security & Forms**: Web3Forms API, hCaptcha integration

### Featured Architectures (Projects Showcase)
* **Frameworks**: Python 3.11+, FastAPI, Django REST Framework, Starlette
* **AI & LLM Orchestration**: LangGraph, LangChain, Groq API, Outlines, Model Context Protocol (MCP)
* **Task Queue & Caching**: Celery, Redis Pub/Sub
* **DevOps & Cloud**: Docker & Compose, PostgreSQL, AWS (EC2, S3, RDS, Lambda via Zappa)
* **Computer Vision**: PyTorch, YOLOv11, DeepSORT, Segment Anything Model (SAM)

---

## 📁 Repository Structure

```text
├── assets/
│   └── avatar.png          # Avatar profile image with fallback ring
├── static/
│   ├── css/
│   │   └── style.css       # Design system, CSS variables, & responsive breakpoints
│   └── js/
│       ├── animation.js        # Project gallery filtering & modal controllers
│       ├── contact_form.js     # Contact form handler & hCaptcha integration
│       ├── counter_animation.js # Intersection Observer number counters
│       ├── toggle_theme.js     # Light/Dark mode toggler with localStorage
│       └── typing_effect.js    # Asynchronous typing animation
├── index.html              # Main single-page application document
├── vercel.json             # Vercel deployment routes & asset mapping
└── README.md               # Project documentation
```

---

## 🛠️ Local Development Setup

No complex build pipeline or package managers are required to run this portfolio locally.

1. **Clone the Repository**
   ```bash
   git clone https://github.com/osamaaslam86004/Portfolio.git
   cd Portfolio
   ```

2. **Serve the Static Files**
   You can open `index.html` directly in your browser, or launch a simple local development server:
   ```bash
   # Using Python 3 built-in HTTP server
   python3 -m http.server 8000
   ```

3. **View in Browser**
   Open `http://localhost:8000` in your browser.

---

## 📧 Contact Form Configuration

The contact form uses Web3Forms with hCaptcha for client-side message delivery:

1. Obtain a free **Access Key** from [Web3Forms](https://web3forms.com/).
2. In `static/js/contact_form.js`, update the access key:
   ```javascript
   formData.append("access_key", "YOUR_WEB3FORMS_ACCESS_KEY");
   ```
3. Enable **hCaptcha** and add your production domain to the allowed domains list in your [Web3Forms Dashboard](https://app.web3forms.com/).

---

## ☁️ Deployment on Vercel

This repository is optimized for Vercel static hosting out of the box:

1. Connect your GitHub repository to **Vercel**.
2. Set the **Framework Preset** to **Other**.
3. Leave the **Build Command** and **Output Directory** empty.
4. Deploy!

The included `vercel.json` ensures static assets (`/static/*` and `/assets/*`) are served correctly alongside single-page routing rules.

---

## 📄 License

Copyright © 2026 [Osama Aslam](https://github.com/osamaaslam86004). All rights reserved.