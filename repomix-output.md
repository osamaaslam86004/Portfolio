This file is a merged representation of the entire codebase, combined into a single document by Repomix.

# File Summary

## Purpose
This file contains a packed representation of the entire repository's contents.
It is designed to be easily consumable by AI systems for analysis, code review,
or other automated processes.

## File Format
The content is organized as follows:
1. This summary section
2. Repository information
3. Directory structure
4. Repository files (if enabled)
5. Multiple file entries, each consisting of:
  a. A header with the file path (## File: path/to/file)
  b. The full contents of the file in a code block

## Usage Guidelines
- This file should be treated as read-only. Any changes should be made to the
  original repository files, not this packed version.
- When processing this file, use the file path to distinguish
  between different files in the repository.
- Be aware that this file may contain sensitive information. Handle it with
  the same level of security as you would the original repository.

## Notes
- Some files may have been excluded based on .gitignore rules and Repomix's configuration
- Binary files are not included in this packed representation. Please refer to the Repository Structure section for a complete list of file paths, including binary files
- Files matching patterns in .gitignore are excluded
- Files matching default ignore patterns are excluded
- Files are sorted by Git change count (files with more changes are at the bottom)

# Directory Structure
```
assets/
  avatar.png
static/
  css/
    style.css
  js/
    animation.js
    contact_form.js
    counter_animation.js
    toggle_theme.js
    typing_effect.js
index.html
vercel.json
```

# Files

## File: static/css/style.css
```css
/* ==========================================================================
       1. CSS VARIABLES & DESIGN SYSTEM (DARK / LIGHT THEME)
       ========================================================================== */
:root {
  /* Dark Theme (Default) */
  --bg-primary: #0a0d14;
  --bg-secondary: #121722;
  --bg-tertiary: #1a2234;
  --card-bg: rgba(18, 23, 34, 0.75);
  --card-hover: rgba(26, 34, 52, 0.9);

  --text-primary: #f1f5f9;
  --text-secondary: #94a3b8;
  --text-muted: #64748b;

  --accent-primary: #3b82f6;
  --accent-secondary: #10b981;
  --accent-purple: #8b5cf6;
  --accent-amber: #f59e0b;
  --accent-glow: rgba(59, 130, 246, 0.25);

  --border-color: rgba(255, 255, 255, 0.08);
  --border-hover: rgba(59, 130, 246, 0.4);
  --glass-bg: rgba(10, 13, 20, 0.8);
  --glass-border: rgba(255, 255, 255, 0.1);

  --font-sans: "Inter", system-ui, -apple-system, sans-serif;
  --font-mono: "Fira Code", monospace;
  --transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  --radius-sm: 8px;
  --radius-md: 14px;
  --radius-lg: 20px;
  --radius-full: 9999px;
}

[data-theme="light"] {
  --bg-primary: #f8fafc;
  --bg-secondary: #ffffff;
  --bg-tertiary: #f1f5f9;
  --card-bg: rgba(255, 255, 255, 0.85);
  --card-hover: rgba(241, 245, 249, 0.95);

  --text-primary: #0f172a;
  --text-secondary: #475569;
  --text-muted: #64748b;

  --accent-primary: #2563eb;
  --accent-secondary: #059669;
  --accent-purple: #7c3aed;
  --accent-amber: #d97706;
  --accent-glow: rgba(37, 99, 235, 0.15);

  --border-color: rgba(15, 23, 42, 0.08);
  --border-hover: rgba(37, 99, 235, 0.3);
  --glass-bg: rgba(255, 255, 255, 0.85);
  --glass-border: rgba(15, 23, 42, 0.08);
}

/* ==========================================================================
       2. BASE & RESET STYLES
       ========================================================================== */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
  font-size: 16px;
}

body {
  font-family: var(--font-sans);
  background-color: var(--bg-primary);
  color: var(--text-primary);
  line-height: 1.6;
  overflow-x: hidden;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

a {
  color: inherit;
  text-decoration: none;
  transition: var(--transition);
}

ul {
  list-style: none;
}

img {
  max-width: 100%;
  height: auto;
  display: block;
}

.container {
  width: 100%;
  max-width: 1240px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.section {
  padding: 6rem 0;
  position: relative;
}

.section-title {
  font-size: 2.25rem;
  font-weight: 800;
  letter-spacing: -0.025em;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-title .hash {
  color: var(--accent-primary);
  font-family: var(--font-mono);
}

.section-subtitle {
  color: var(--text-secondary);
  font-size: 1.1rem;
  margin-bottom: 3.5rem;
  max-width: 650px;
}

/* ==========================================================================
       3. NAVIGATION BAR (GLASSMORPHISM)
       ========================================================================== */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  background: var(--glass-bg);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border-bottom: 1px solid var(--glass-border);
  padding: 1rem 0;
  transition: var(--transition);
}

.nav-container {
  display: flex;
  align-items: center;
  justify-content: space-between;
}

.nav-logo {
  font-family: var(--font-mono);
  font-size: 1.35rem;
  font-weight: 700;
  color: var(--text-primary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-logo span {
  color: var(--accent-primary);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-link {
  font-size: 0.95rem;
  font-weight: 500;
  color: var(--text-secondary);
  position: relative;
  padding: 0.25rem 0;
}

.nav-link:hover,
.nav-link.active {
  color: var(--accent-primary);
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: var(--accent-primary);
  transition: var(--transition);
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.theme-toggle-btn {
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-primary);
  width: 42px;
  height: 42px;
  border-radius: var(--radius-full);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition);
}

.theme-toggle-btn:hover {
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: rotate(15deg);
}

.mobile-menu-btn {
  display: none;
  background: none;
  border: none;
  color: var(--text-primary);
  font-size: 1.5rem;
  cursor: pointer;
}

/* ==========================================================================
       4. HERO SECTION & AVATAR
       ========================================================================== */
.hero {
  padding-top: 10rem;
  padding-bottom: 5rem;
  display: flex;
  align-items: center;
  min-height: 90vh;
}

.hero-grid {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  gap: 4rem;
  align-items: center;
}

.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.4rem 1rem;
  background: rgba(16, 185, 129, 0.1);
  border: 1px solid rgba(16, 185, 129, 0.25);
  border-radius: var(--radius-full);
  color: var(--accent-secondary);
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.pulse-dot {
  width: 8px;
  height: 8px;
  background-color: var(--accent-secondary);
  border-radius: 50%;
  box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(16, 185, 129, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(16, 185, 129, 0);
  }
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}

.hero-subtitle {
  font-size: 1.5rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-bottom: 1.5rem;
  min-height: 2.25rem;
}

.typing-text {
  color: var(--accent-primary);
  font-family: var(--font-mono);
  font-weight: 600;
}

.hero-description {
  font-size: 1.125rem;
  color: var(--text-secondary);
  margin-bottom: 2.5rem;
  max-width: 600px;
}

.hero-ctas {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.6rem;
  padding: 0.85rem 1.75rem;
  border-radius: var(--radius-md);
  font-weight: 600;
  font-size: 0.95rem;
  cursor: pointer;
  transition: var(--transition);
  border: 1px solid transparent;
}

.btn-primary {
  background: var(--accent-primary);
  color: #ffffff;
  box-shadow: 0 4px 20px var(--accent-glow);
}

.btn-primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 25px rgba(59, 130, 246, 0.4);
}

.btn-secondary {
  background: var(--bg-tertiary);
  color: var(--text-primary);
  border-color: var(--border-color);
}

.btn-secondary:hover {
  background: var(--card-hover);
  border-color: var(--accent-primary);
  color: var(--accent-primary);
  transform: translateY(-2px);
}

.hero-avatar-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.avatar-wrapper {
  position: relative;
  width: 320px;
  height: 320px;
  border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  background: linear-gradient(
    135deg,
    var(--accent-primary),
    var(--accent-purple)
  );
  padding: 6px;
  animation: morphing 8s ease-in-out infinite;
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
}

@keyframes morphing {
  0% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
  25% {
    border-radius: 50% 50% 30% 70% / 50% 30% 70% 50%;
  }
  50% {
    border-radius: 70% 30% 50% 50% / 30% 70% 30% 70%;
  }
  75% {
    border-radius: 40% 60% 70% 30% / 40% 50% 50% 60%;
  }
  100% {
    border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
  }
}

.avatar-inner {
  width: 100%;
  height: 100%;
  background-color: var(--bg-secondary);
  border-radius: inherit;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

/* Fallback Initial Ring component if picture asset missing */
.avatar-fallback {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  font-size: 4.5rem;
  font-weight: 800;
  color: var(--accent-primary);
  font-family: var(--font-mono);
  background: radial-gradient(
    circle,
    var(--bg-tertiary) 0%,
    var(--bg-secondary) 100%
  );
}

.avatar-fallback span {
  font-size: 0.85rem;
  font-weight: 500;
  color: var(--text-secondary);
  margin-top: 0.25rem;
  letter-spacing: 0.1em;
}

/* ==========================================================================
       5. IMPACT METRICS COUNTER SECTION
       ========================================================================== */
.impact-section {
  background: var(--bg-secondary);
  /*border-y: 1px solid var(--border-color);*/
  padding: 3rem 0;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.metric-card {
  text-align: center;
  padding: 1.5rem;
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  transition: var(--transition);
}

.metric-card:hover {
  transform: translateY(-4px);
  border-color: var(--accent-primary);
}

.metric-number {
  font-size: 2.75rem;
  font-weight: 800;
  font-family: var(--font-mono);
  color: var(--accent-primary);
  line-height: 1.2;
}

.metric-label {
  font-size: 0.95rem;
  color: var(--text-secondary);
  font-weight: 500;
  margin-top: 0.5rem;
}

/* ==========================================================================
       6. CORE SKILLS SPECTRUM
       ========================================================================== */
.skills-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.skill-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.75rem;
  transition: var(--transition);
}

.skill-card:hover {
  border-color: var(--border-hover);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
}

.skill-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.25rem;
}

.skill-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-sm);
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
}

.skill-title {
  font-size: 1.2rem;
  font-weight: 700;
}

.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.tag {
  font-size: 0.825rem;
  font-family: var(--font-mono);
  padding: 0.35rem 0.75rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-secondary);
  transition: var(--transition);
}

.skill-card:hover .tag {
  border-color: rgba(59, 130, 246, 0.2);
}

/* ==========================================================================
       7. INTERACTIVE PROJECT GALLERY & MODAL VISUALIZERS
       ========================================================================== */
.project-filters {
  display: flex;
  gap: 0.75rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}

.filter-btn {
  padding: 0.6rem 1.25rem;
  background: var(--bg-tertiary);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  border-radius: var(--radius-full);
  font-size: 0.9rem;
  font-weight: 500;
  cursor: pointer;
  transition: var(--transition);
}

.filter-btn:hover,
.filter-btn.active {
  background: var(--accent-primary);
  color: #ffffff;
  border-color: var(--accent-primary);
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 2rem;
}

.project-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: var(--transition);
  position: relative;
  overflow: hidden;
}

.project-card:hover {
  transform: translateY(-6px);
  border-color: var(--accent-primary);
  box-shadow: 0 15px 35px var(--accent-glow);
}

.project-category {
  font-size: 0.75rem;
  font-family: var(--font-mono);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  color: var(--accent-primary);
  margin-bottom: 0.5rem;
}

.project-title {
  font-size: 1.35rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.project-desc {
  color: var(--text-secondary);
  font-size: 0.95rem;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.project-metrics-badge {
  background: rgba(16, 185, 129, 0.08);
  border: 1px solid rgba(16, 185, 129, 0.2);
  color: var(--accent-secondary);
  padding: 0.5rem 0.85rem;
  border-radius: var(--radius-sm);
  font-size: 0.85rem;
  font-family: var(--font-mono);
  margin-bottom: 1.25rem;
}

.project-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1.5rem;
}

.project-tech span {
  font-size: 0.75rem;
  background: var(--bg-tertiary);
  color: var(--text-muted);
  padding: 0.2rem 0.5rem;
  border-radius: 4px;
}

.project-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 1.25rem;
  border-top: 1px solid var(--border-color);
}

.project-links {
  display: flex;
  gap: 0.75rem;
}

.icon-link {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-primary);
  transition: var(--transition);
}

.icon-link:hover {
  background: var(--accent-primary);
  color: #ffffff;
}

/* Modal Styling */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(8px);
  z-index: 2000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
  opacity: 0;
  pointer-events: none;
  transition: var(--transition);
}

.modal-overlay.active {
  opacity: 1;
  pointer-events: auto;
}

.modal-container {
  background: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  max-width: 850px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  padding: 2.5rem;
  position: relative;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.5);
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: var(--bg-tertiary);
  border: none;
  color: var(--text-primary);
  width: 36px;
  height: 36px;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.architecture-diagram {
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.5rem;
  margin: 1.5rem 0;
  overflow-x: auto;
}

/* ==========================================================================
       8. CAREER EXPERIENCE TIMELINE
       ========================================================================== */
.timeline {
  position: relative;
  max-width: 900px;
  margin: 0 auto;
}

.timeline::before {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  left: 20px;
  width: 2px;
  background: var(--border-color);
}

.timeline-item {
  position: relative;
  padding-left: 60px;
  margin-bottom: 3rem;
}

.timeline-dot {
  position: absolute;
  left: 11px;
  top: 5px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: var(--accent-primary);
  border: 4px solid var(--bg-primary);
}

.timeline-content {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 2rem;
}

.timeline-role {
  font-size: 1.3rem;
  font-weight: 700;
}

.timeline-company {
  color: var(--accent-primary);
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.timeline-date {
  font-size: 0.85rem;
  font-family: var(--font-mono);
  color: var(--text-muted);
  margin-bottom: 1rem;
}

.timeline-bullets {
  list-style-type: disc;
  padding-left: 1.25rem;
  color: var(--text-secondary);
}

.timeline-bullets li {
  margin-bottom: 0.5rem;
}

/* ==========================================================================
       9. INTERACTIVE CONTACT HUB
       ========================================================================== */
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 3rem;
}

.contact-info-cards {
  display: grid;
  gap: 1.25rem;
}

.contact-card {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  display: flex;
  align-items: center;
  gap: 1.25rem;
}

.contact-icon {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-sm);
  background: rgba(59, 130, 246, 0.1);
  color: var(--accent-primary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.35rem;
}

.contact-form {
  background: var(--card-bg);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 2.5rem;
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-label {
  display: block;
  font-size: 0.9rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
}

.form-input,
.form-textarea {
  width: 100%;
  padding: 0.85rem 1rem;
  background: var(--bg-primary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-family: inherit;
  transition: var(--transition);
}

.form-input:focus,
.form-textarea:focus {
  outline: none;
  border-color: var(--accent-primary);
  box-shadow: 0 0 0 3px var(--accent-glow);
}

.form-textarea {
  resize: vertical;
  min-height: 130px;
}

/* Map Embed Container */
.map-container {
  margin-top: 1.5rem;
  height: 180px;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-color);
  background: var(--bg-tertiary);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-secondary);
  font-family: var(--font-mono);
}

/* ==========================================================================
       10. FOOTER & ZIP EXPORT UTILITY COMPONENT
       ========================================================================== */
.footer {
  background: var(--bg-secondary);
  border-top: 1px solid var(--border-color);
  padding: 4rem 0 2rem 0;
}

.export-utility-box {
  background: var(--bg-tertiary);
  border: 1px dashed var(--accent-primary);
  border-radius: var(--radius-md);
  padding: 2rem;
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
}

.export-text h4 {
  font-size: 1.1rem;
  margin-bottom: 0.35rem;
}

.export-text p {
  font-size: 0.9rem;
  color: var(--text-secondary);
}

.footer-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  color: var(--text-muted);
  font-size: 0.9rem;
}

/* ==========================================================================
       11. RESPONSIVE BREAKPOINTS
       ========================================================================== */
@media (max-width: 992px) {
  .hero-grid {
    grid-template-columns: 1fr;
    text-align: center;
  }
  .hero-ctas {
    justify-content: center;
  }
  .status-badge {
    margin: 0 auto 1.5rem auto;
  }
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  .contact-grid {
    grid-template-columns: 1fr;
  }
  .export-utility-box {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  .nav-menu {
    position: fixed;
    top: 70px;
    left: 0;
    right: 0;
    background: var(--bg-secondary);
    flex-direction: column;
    padding: 2rem;
    gap: 1.5rem;
    border-bottom: 1px solid var(--border-color);
    transform: translateY(-150%);
    transition: var(--transition);
  }
  .nav-menu.active {
    transform: translateY(0);
  }
  .mobile-menu-btn {
    display: block;
  }
  .metrics-grid {
    grid-template-columns: 1fr;
  }
  .timeline::before {
    left: 10px;
  }
  .timeline-dot {
    left: 1px;
  }
  .timeline-item {
    padding-left: 35px;
  }
}
```

## File: vercel.json
```json
{
        "version": 2,
        "builds": [
            {
                "src": "index.html",
                "use": "@vercel/static"
            }
        ],
        "routes": [
            {
                "src": "/(.*)",
                "dest": "/index.html"
            }
        ]
    }
```

## File: static/js/animation.js
```javascript
document.addEventListener("DOMContentLoaded", () => {
  // 4. PROJECT GALLERY FILTERING
  const filterBtns = document.querySelectorAll(".filter-btn");
  const projectCards = document.querySelectorAll(".project-card");

  filterBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      filterBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      const filter = btn.getAttribute("data-filter");
      projectCards.forEach((card) => {
        if (filter === "all" || card.getAttribute("data-category") === filter) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    });
  });

  // 5. MODAL CONTROL (Exposed globally for inline onclick handlers)
  window.openModal = function (id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.add("active");
  };

  window.closeModal = function (id) {
    const modal = document.getElementById(id);
    if (modal) modal.classList.remove("active");
  };

  // Close modal on overlay click
  document.querySelectorAll(".modal-overlay").forEach((overlay) => {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) {
        overlay.classList.remove("active");
      }
    });
  });

  // 6. MOBILE NAVIGATION TOGGLE
  const mobileBtn = document.getElementById("mobile-menu-toggle");
  const navMenu = document.getElementById("nav-menu");
  if (mobileBtn && navMenu) {
    mobileBtn.addEventListener("click", () => {
      navMenu.classList.toggle("active");
    });

    // Close menu when clicking nav links on mobile
    navMenu.querySelectorAll(".nav-link").forEach((link) => {
      link.addEventListener("click", () => {
        navMenu.classList.remove("active");
      });
    });
  }
});
```

## File: static/js/contact_form.js
```javascript
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
```

## File: static/js/counter_animation.js
```javascript
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
```

## File: static/js/toggle_theme.js
```javascript
// 2. THEME TOGGLE (DARK / LIGHT MODE)
document.addEventListener("DOMContentLoaded", () => {
  const themeToggleBtn = document.getElementById("theme-toggle");
  if (!themeToggleBtn) return;

  // Restore saved theme preference
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    document.documentElement.setAttribute("data-theme", savedTheme);
  }

  themeToggleBtn.addEventListener("click", () => {
    const currentTheme =
      document.documentElement.getAttribute("data-theme") || "dark";
    const newTheme = currentTheme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });
});
```

## File: static/js/typing_effect.js
```javascript
// 1. DYNAMIC TYPING EFFECT
const typingPhrases = [
  "AI/ML Systems Engineering",
  "FastAPI & Django REST Microservices",
  "LangGraph & Multi-Agent Workflows",
  "High-Throughput Cloud Architecture",
];
let phraseIdx = 0;
let charIdx = 0;
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing-element");
  if (!typingElement) return;

  const currentPhrase = typingPhrases[phraseIdx];

  if (isDeleting) {
    typingElement.textContent = currentPhrase.substring(0, charIdx - 1);
    charIdx--;
  } else {
    typingElement.textContent = currentPhrase.substring(0, charIdx + 1);
    charIdx++;
  }

  let speed = isDeleting ? 40 : 80;

  if (!isDeleting && charIdx === currentPhrase.length) {
    speed = 2000;
    isDeleting = true;
  } else if (isDeleting && charIdx === 0) {
    isDeleting = false;
    phraseIdx = (phraseIdx + 1) % typingPhrases.length;
    speed = 500;
  }

  setTimeout(typeEffect, speed);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", typeEffect);
} else {
  typeEffect();
}
```

## File: index.html
```html
<!doctype html>
<html lang="en" data-theme="dark">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta
      name="description"
      content="Portfolio of Osama Aslam - Senior Python Web Developer & AI/ML Systems Engineer specializing in Django, FastAPI, LangGraph, and Distributed Microservices."
    />
    <meta
      name="keywords"
      content="Osama Aslam, Python Developer, FastAPI, Django, LangGraph, AI Engineer, Machine Learning, Lahore, Microservices, Software Architect"
    />
    <meta name="author" content="Osama Aslam" />

    <!-- OpenGraph / Social Sharing -->
    <meta
      property="og:title"
      content="Osama Aslam | Senior Python & AI/ML Systems Engineer"
    />
    <meta
      property="og:description"
      content="Architecting high-throughput REST APIs, LLM multi-agent pipelines, and distributed cloud microservices."
    />
    <meta property="og:type" content="website" />
    <meta property="og:url" content="https://github.com/osamaaslam86004" />

    <title>Osama Aslam | Senior Python & AI/ML Systems Engineer</title>

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="[suspicious link removed]" crossorigin />
    <link href="static/css/style.css" rel="stylesheet" />
  </head>
  <body>
    <!-- ==========================================================================
       HEADER & NAVIGATION
       ========================================================================== -->
    <header class="navbar">
      <div class="container nav-container">
        <a href="#" class="nav-logo">
          <span>&lt;</span>Osama.Aslam<span>/&gt;</span>
        </a>

        <nav class="nav-menu" id="nav-menu">
          <a href="#about" class="nav-link active">About</a>
          <a href="#skills" class="nav-link">Skills Spectrum</a>
          <a href="#projects" class="nav-link">Architecture Projects</a>
          <a href="#experience" class="nav-link">Experience</a>
          <a href="#contact" class="nav-link">Contact</a>
        </nav>

        <div class="nav-actions">
          <button
            class="theme-toggle-btn"
            id="theme-toggle"
            aria-label="Toggle Theme"
          >
            <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
              <path
                d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.98 1.37-2.58 2.26-4.4 2.26-2.98 0-5.4-2.42-5.4-5.4 0-1.81.89-3.42 2.26-4.4-.44-.06-.9-.1-1.36-.1z"
              />
            </svg>
          </button>

          <button
            class="mobile-menu-btn"
            id="mobile-menu-toggle"
            aria-label="Toggle Navigation"
          >
            &#9776;
          </button>
        </div>
      </div>
    </header>

    <!-- ==========================================================================
       HERO SECTION
       ========================================================================== -->
    <section class="hero" id="about">
      <div class="container">
        <div class="hero-grid">
          <div class="hero-content">
            <div class="status-badge">
              <span class="pulse-dot"></span>
              Available for AI/ML & Web Engineering Roles
            </div>
            <h1 class="hero-title">OSAMA ASLAM</h1>
            <div class="hero-subtitle">
              Specializing in
              <span class="typing-text" id="typing-element"></span>
            </div>
            <p class="hero-description">
              Senior Python Web Developer and AI/ML Systems Engineer with 3+
              years of experience building high-throughput REST APIs,
              asynchronous microservices, and LLM-powered multi-agent frameworks
              using Django, FastAPI, LangGraph, and PyTorch.
            </p>
            <div class="hero-ctas">
              <a href="#projects" class="btn btn-primary">
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 6h16M4 12h16m-7 6h7"></path>
                </svg>
                Explore Projects
              </a>
              <a
                href="mailto:osama.aslam.86004@gmail.com"
                class="btn btn-secondary"
              >
                <svg
                  width="18"
                  height="18"
                  fill="none"
                  stroke="currentColor"
                  stroke-width="2"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  ></path>
                </svg>
                Contact Me
              </a>
            </div>
          </div>

          <div class="hero-avatar-container">
            <div class="avatar-wrapper">
              <div class="avatar-inner">
                <!-- Avatar image tag with graceful fallback initial ring -->
                <img
                  src="assets/avatar.png"
                  alt="Osama Aslam - Avatar"
                  id="user-avatar"
                  onerror="
                    this.style.display = 'none';
                    this.nextElementSibling.style.display = 'flex';
                  "
                />
                <div class="avatar-fallback" style="display: none">
                  OA
                  <span>SOFTWARE ARCHITECT</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
       IMPACT METRICS COUNTER SECTION
       ========================================================================== -->
    <section class="impact-section">
      <div class="container">
        <div class="metrics-grid">
          <div class="metric-card">
            <div class="metric-number" data-target="3">0</div>
            <div class="metric-label">Years Hands-on Experience</div>
          </div>
          <div class="metric-card">
            <div class="metric-number" data-target="99.9">0</div>
            <div class="metric-label">% Production API Uptime</div>
          </div>
          <div class="metric-card">
            <div class="metric-number" data-target="185">0</div>
            <div class="metric-label">P95 Latency (&lt; ms)</div>
          </div>
          <div class="metric-card">
            <div class="metric-number" data-target="10">0</div>
            <div class="metric-label">+ Delivered Enterprise Systems</div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
       CORE SKILLS SPECTRUM
       ========================================================================== -->
    <section class="section" id="skills">
      <div class="container">
        <h2 class="section-title">
          <span class="hash">#</span> Core Skills Spectrum
        </h2>
        <p class="section-subtitle">
          Categorized technical expertise across backend architecture, AI
          engineering, cloud devops, and security.
        </p>

        <div class="skills-grid">
          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon">&#128187;</div>
              <h3 class="skill-title">Programming Languages</h3>
            </div>
            <div class="skill-tags">
              <span class="tag">Python (3.11/3.12)</span>
              <span class="tag">SQL (PostgreSQL)</span>
              <span class="tag">JavaScript (ES6+)</span>
              <span class="tag">HTML5 / CSS3</span>
            </div>
          </div>

          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon">&#9881;</div>
              <h3 class="skill-title">Backend &amp; Microservices</h3>
            </div>
            <div class="skill-tags">
              <span class="tag">Django / DRF</span>
              <span class="tag">FastAPI</span>
              <span class="tag">Starlette</span>
              <span class="tag">Celery &amp; Beat</span>
              <span class="tag">Redis Pub/Sub</span>
              <span class="tag">HTMX</span>
            </div>
          </div>

          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon">&#129302;</div>
              <h3 class="skill-title">AI/ML &amp; Computer Vision</h3>
            </div>
            <div class="skill-tags">
              <span class="tag">LangGraph</span>
              <span class="tag">LangChain</span>
              <span class="tag">PyTorch / TensorFlow</span>
              <span class="tag">YOLOv11 &amp; DeepSORT</span>
              <span class="tag">SAM (Segment Anything)</span>
              <span class="tag">Outlines</span>
              <span class="tag">Kokoro TTS</span>
            </div>
          </div>

          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon">&#9729;</div>
              <h3 class="skill-title">Cloud, DevOps &amp; Data</h3>
            </div>
            <div class="skill-tags">
              <span class="tag">PostgreSQL</span>
              <span class="tag">AWS (EC2, RDS, S3, Lambda)</span>
              <span class="tag">Docker &amp; Compose</span>
              <span class="tag">Zappa Serverless</span>
              <span class="tag">Alembic</span>
              <span class="tag">GitHub Actions</span>
            </div>
          </div>

          <div class="skill-card">
            <div class="skill-header">
              <div class="skill-icon">&#128274;</div>
              <h3 class="skill-title">Security &amp; Observability</h3>
            </div>
            <div class="skill-tags">
              <span class="tag">OpenTelemetry</span>
              <span class="tag">Prometheus &amp; Grafana</span>
              <span class="tag">Pytest / Pytest-Django</span>
              <span class="tag">JWT &amp; OAuth2</span>
              <span class="tag">SHA-256 Audit Ledger</span>
              <span class="tag">PII Redaction Engine</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
       INTERACTIVE PROJECT GALLERY & MODAL DIAGRAMS
       ========================================================================== -->
    <section class="section" id="projects">
      <div class="container">
        <h2 class="section-title">
          <span class="hash">#</span> Core Technical Projects
        </h2>
        <p class="section-subtitle">
          Production-grade systems featuring asynchronous architecture, LLM
          orchestration, and verifiable performance metrics.
        </p>

        <div class="project-filters">
          <button class="filter-btn active" data-filter="all">
            All Projects
          </button>
          <button class="filter-btn" data-filter="ai">
            AI/ML &amp; Multi-Agent
          </button>
          <button class="filter-btn" data-filter="web">
            Web &amp; Microservices
          </button>
        </div>

        <div class="projects-grid">
          <!-- Project 1: TalentRoute -->
          <div class="project-card" data-category="ai">
            <div>
              <div class="project-category">AI/ML &amp; Multi-Agent</div>
              <h3 class="project-title">
                TalentRoute Candidate Screening &amp; Audit Service
              </h3>
              <p class="project-desc">
                Asynchronous decision-support screening API deploying
                multi-agent LangGraph workflows, PII minimization, and SHA-256
                tamper-evident audit ledgers.
              </p>
              <div class="project-metrics-badge">
                &#9889; 75% Faster Screening | 0% Task Drop Rate
              </div>
              <div class="project-tech">
                <span>FastAPI</span><span>LangGraph</span
                ><span>Async SQLAlchemy</span><span>Redis</span
                ><span>Celery</span><span>Docker</span>
              </div>
            </div>
            <div class="project-footer">
              <button
                class="btn btn-secondary btn-sm"
                onclick="openModal('modal-talentroute')"
              >
                View Architecture
              </button>
              <div class="project-links">
                <a
                  href="https://github.com/osamaaslam86004/TalentRoute"
                  target="_blank"
                  class="icon-link"
                  aria-label="GitHub Repo"
                >
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 2: Calendar Scheduler -->
          <div class="project-card" data-category="web">
            <div>
              <div class="project-category">
                Web Systems &amp; Microservices
              </div>
              <h3 class="project-title">
                Natural Language Calendar Scheduling API
              </h3>
              <p class="project-desc">
                High-throughput natural language scheduling backend translating
                text to Google Calendar events with real-time circuit breaking
                and Redis Pub/Sub.
              </p>
              <div class="project-metrics-badge">
                &#9889; P95 Latency &lt; 185ms | 99.9% Reliability
              </div>
              <div class="project-tech">
                <span>FastAPI</span><span>Gemini API</span
                ><span>Redis Pub/Sub</span><span>Celery</span
                ><span>PostgreSQL</span>
              </div>
            </div>
            <div class="project-footer">
              <button
                class="btn btn-secondary btn-sm"
                onclick="openModal('modal-calendar')"
              >
                View Architecture
              </button>
              <div class="project-links">
                <a
                  href="https://github.com/osamaaslam86004/Calendar-Scheduller"
                  target="_blank"
                  class="icon-link"
                  aria-label="GitHub Repo"
                >
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 3: TravelBrain AI -->
          <div class="project-card" data-category="ai">
            <div>
              <div class="project-category">AI/ML &amp; Multi-Agent</div>
              <h3 class="project-title">
                Multi-Agent Travel Planner (TravelBrain AI)
              </h3>
              <p class="project-desc">
                Stateful travel orchestration platform with 5 autonomous agents
                using Model Context Protocol (MCP) servers and Groq LLM
                acceleration.
              </p>
              <div class="project-metrics-badge">
                &#9889; Sub-second Agent Reasoning | MCP Integration
              </div>
              <div class="project-tech">
                <span>LangGraph</span><span>Groq API</span
                ><span>MCP Protocol</span><span>PostgreSQL</span
                ><span>Redis</span>
              </div>
            </div>
            <div class="project-footer">
              <button
                class="btn btn-secondary btn-sm"
                onclick="openModal('modal-travelbrain')"
              >
                View Architecture
              </button>
              <div class="project-links">
                <a
                  href="https://github.com/osamaaslam86004/Multi-Agent-AI-Travel-Planner.git"
                  target="_blank"
                  class="icon-link"
                  aria-label="GitHub Repo"
                >
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 4: Promo Video Pipeline -->
          <div class="project-card" data-category="web">
            <div>
              <div class="project-category">Automation &amp; Media</div>
              <h3 class="project-title">
                Automated E-Commerce Promo Video Pipeline
              </h3>
              <p class="project-desc">
                Containerized media rendering pipeline generating 1080x1920
                vertical video promos automatically with Kokoro TTS neural voice
                synthesis.
              </p>
              <div class="project-metrics-badge">
                &#9889; Zero-Touch Media Generation | 1080x1920 MP4
              </div>
              <div class="project-tech">
                <span>FastAPI</span><span>Kokoro TTS</span
                ><span>HTML5/FFmpeg</span><span>APScheduler</span
                ><span>Docker</span>
              </div>
            </div>
            <div class="project-footer">
              <button
                class="btn btn-secondary btn-sm"
                onclick="openModal('modal-editframes')"
              >
                View Architecture
              </button>
              <div class="project-links">
                <a
                  href="https://github.com/osamaaslam86004/EditFrames.git"
                  target="_blank"
                  class="icon-link"
                  aria-label="GitHub Repo"
                >
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          <!-- Project 5: Resume Builder API -->
          <div class="project-card" data-category="web">
            <div>
              <div class="project-category">
                Web Systems &amp; Microservices
              </div>
              <h3 class="project-title">
                Multi-Tenant Resume Builder API Platform
              </h3>
              <p class="project-desc">
                Decoupled Django REST microservices with 9-step transactional
                session wizard, SimpleJWT stateless auth, and Zappa AWS Lambda
                deployment.
              </p>
              <div class="project-metrics-badge">
                &#9889; 9-Step Transactional Session | AWS Serverless
              </div>
              <div class="project-tech">
                <span>Django</span><span>DRF</span><span>SimpleJWT</span
                ><span>PostgreSQL</span><span>AWS Zappa</span>
              </div>
            </div>
            <div class="project-footer">
              <button
                class="btn btn-secondary btn-sm"
                onclick="openModal('modal-resumebuilder')"
              >
                View Architecture
              </button>
              <div class="project-links">
                <a
                  href="https://github.com/osamaaslam86004"
                  target="_blank"
                  class="icon-link"
                  aria-label="GitHub Repo"
                >
                  <svg
                    width="18"
                    height="18"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"
                    />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ARCHITECTURE DIAGRAM MODALS -->
    <div class="modal-overlay" id="modal-talentroute">
      <div class="modal-container">
        <button class="modal-close" onclick="closeModal('modal-talentroute')">
          &times;
        </button>
        <h3>TalentRoute System Topology</h3>
        <div class="architecture-diagram">
          <svg
            viewBox="0 0 700 160"
            width="100%"
            height="160"
            xmlns="[suspicious link removed]"
          >
            <rect
              x="10"
              y="50"
              width="110"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#3b82f6"
              stroke-width="2"
            />
            <text
              x="65"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              FastAPI Gateway
            </text>

            <path
              d="M 120 75 L 160 75"
              stroke="#3b82f6"
              stroke-width="2"
              marker-end="url(#arrow)"
            />

            <rect
              x="160"
              y="50"
              width="120"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#10b981"
              stroke-width="2"
            />
            <text
              x="220"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              PII Redaction
            </text>

            <path d="M 280 75 L 320 75" stroke="#10b981" stroke-width="2" />

            <rect
              x="320"
              y="50"
              width="130"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#8b5cf6"
              stroke-width="2"
            />
            <text
              x="385"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              LangGraph Pipeline
            </text>

            <path d="M 450 75 L 490 75" stroke="#8b5cf6" stroke-width="2" />

            <rect
              x="490"
              y="50"
              width="120"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#f59e0b"
              stroke-width="2"
            />
            <text
              x="550"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              SHA-256 Audit DB
            </text>
          </svg>
        </div>
        <p>
          Data Flow: Input Resumes undergo pre-provider Regex PII redaction
          before entering the dual-node LangGraph assessment graph. Evaluation
          results are committed via Transactional Outbox into a hash-chained
          PostgreSQL audit table.
        </p>
      </div>
    </div>

    <div class="modal-overlay" id="modal-calendar">
      <div class="modal-container">
        <button class="modal-close" onclick="closeModal('modal-calendar')">
          &times;
        </button>
        <h3>Natural Language Calendar API Topology</h3>
        <div class="architecture-diagram">
          <svg
            viewBox="0 0 700 160"
            width="100%"
            height="160"
            xmlns="[suspicious link removed]"
          >
            <rect
              x="10"
              y="50"
              width="120"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#3b82f6"
              stroke-width="2"
            />
            <text
              x="70"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              Unformatted Text
            </text>

            <path d="M 130 75 L 170 75" stroke="#3b82f6" stroke-width="2" />

            <rect
              x="170"
              y="50"
              width="130"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#f59e0b"
              stroke-width="2"
            />
            <text
              x="235"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              Redis Circuit Breaker
            </text>

            <path d="M 300 75 L 340 75" stroke="#f59e0b" stroke-width="2" />

            <rect
              x="340"
              y="50"
              width="120"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#8b5cf6"
              stroke-width="2"
            />
            <text
              x="400"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              Gemini LLM Engine
            </text>

            <path d="M 460 75 L 500 75" stroke="#8b5cf6" stroke-width="2" />

            <rect
              x="500"
              y="50"
              width="130"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#10b981"
              stroke-width="2"
            />
            <text
              x="565"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              Google Calendar
            </text>
          </svg>
        </div>
        <p>
          Decoupled async worker queueing ensuring P95 ingestion latencies under
          185ms with automatic fallback from Gemini to OpenRouter API.
        </p>
      </div>
    </div>

    <div class="modal-overlay" id="modal-travelbrain">
      <div class="modal-container">
        <button class="modal-close" onclick="closeModal('modal-travelbrain')">
          &times;
        </button>
        <h3>TravelBrain Multi-Agent Topology</h3>
        <div class="architecture-diagram">
          <svg
            viewBox="0 0 700 160"
            width="100%"
            height="160"
            xmlns="[suspicious link removed]"
          >
            <rect
              x="10"
              y="50"
              width="110"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#3b82f6"
              stroke-width="2"
            />
            <text
              x="65"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              User Request
            </text>

            <path d="M 120 75 L 160 75" stroke="#3b82f6" stroke-width="2" />

            <rect
              x="160"
              y="50"
              width="140"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#8b5cf6"
              stroke-width="2"
            />
            <text
              x="230"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              5 Autonomous Agents
            </text>

            <path d="M 300 75 L 340 75" stroke="#8b5cf6" stroke-width="2" />

            <rect
              x="340"
              y="50"
              width="120"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#10b981"
              stroke-width="2"
            />
            <text
              x="400"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              MCP Protocol
            </text>

            <path d="M 460 75 L 500 75" stroke="#10b981" stroke-width="2" />

            <rect
              x="500"
              y="50"
              width="130"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#f59e0b"
              stroke-width="2"
            />
            <text
              x="565"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              State Checkpoint DB
            </text>
          </svg>
        </div>
        <p>
          Orchestrates 5 specialized sub-agents via Model Context Protocol (MCP)
          servers with persistent PostgreSQL state checkpointers.
        </p>
      </div>
    </div>

    <div class="modal-overlay" id="modal-editframes">
      <div class="modal-container">
        <button class="modal-close" onclick="closeModal('modal-editframes')">
          &times;
        </button>
        <h3>EditFrames Video Pipeline Topology</h3>
        <div class="architecture-diagram">
          <svg
            viewBox="0 0 700 160"
            width="100%"
            height="160"
            xmlns="[suspicious link removed]"
          >
            <rect
              x="10"
              y="50"
              width="110"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#3b82f6"
              stroke-width="2"
            />
            <text
              x="65"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              REST Product Feed
            </text>

            <path d="M 120 75 L 160 75" stroke="#3b82f6" stroke-width="2" />

            <rect
              x="160"
              y="50"
              width="130"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#10b981"
              stroke-width="2"
            />
            <text
              x="225"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              Kokoro TTS Neural
            </text>

            <path d="M 290 75 L 330 75" stroke="#10b981" stroke-width="2" />

            <rect
              x="330"
              y="50"
              width="140"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#8b5cf6"
              stroke-width="2"
            />
            <text
              x="400"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              HTML5 / FFmpeg Engine
            </text>

            <path d="M 470 75 L 510 75" stroke="#8b5cf6" stroke-width="2" />

            <rect
              x="510"
              y="50"
              width="120"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#f59e0b"
              stroke-width="2"
            />
            <text
              x="570"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              1080x1920 MP4
            </text>
          </svg>
        </div>
        <p>
          Automated batch video generation injecting dynamic JSON data into
          custom HTML5 templates and rendering vertical social clips.
        </p>
      </div>
    </div>

    <div class="modal-overlay" id="modal-resumebuilder">
      <div class="modal-container">
        <button class="modal-close" onclick="closeModal('modal-resumebuilder')">
          &times;
        </button>
        <h3>Resume Builder Microservices Topology</h3>
        <div class="architecture-diagram">
          <svg
            viewBox="0 0 700 160"
            width="100%"
            height="160"
            xmlns="[suspicious link removed]"
          >
            <rect
              x="10"
              y="50"
              width="110"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#3b82f6"
              stroke-width="2"
            />
            <text
              x="65"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              Client Request
            </text>

            <path d="M 120 75 L 160 75" stroke="#3b82f6" stroke-width="2" />

            <rect
              x="160"
              y="50"
              width="130"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#10b981"
              stroke-width="2"
            />
            <text
              x="225"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              SimpleJWT Auth
            </text>

            <path d="M 290 75 L 330 75" stroke="#10b981" stroke-width="2" />

            <rect
              x="330"
              y="50"
              width="140"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#8b5cf6"
              stroke-width="2"
            />
            <text
              x="400"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              Session Wizard View
            </text>

            <path d="M 470 75 L 510 75" stroke="#8b5cf6" stroke-width="2" />

            <rect
              x="510"
              y="50"
              width="120"
              height="50"
              rx="8"
              fill="#1e293b"
              stroke="#f59e0b"
              stroke-width="2"
            />
            <text
              x="570"
              y="80"
              fill="#fff"
              font-size="12"
              text-anchor="middle"
              font-weight="bold"
            >
              AWS Lambda / RDS
            </text>
          </svg>
        </div>
        <p>
          Decoupled microservice architecture handling multi-step nested forms
          atomically using DRF serializers and Celery background purges.
        </p>
      </div>
    </div>

    <!-- ==========================================================================
       EXPERIENCE TIMELINE
       ========================================================================== -->
    <section class="section" id="experience">
      <div class="container">
        <h2 class="section-title">
          <span class="hash">#</span> Professional Experience
        </h2>
        <p class="section-subtitle">
          Career history demonstrating technical growth, microservice
          implementations, and ML vision solutions.
        </p>

        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="timeline-role">
                Python Web &amp; Machine Learning Developer
              </h3>
              <div class="timeline-company">
                Independent Consultant / Full-Stack Engineer | Lahore, Pakistan
              </div>
              <div class="timeline-date">JAN 2021 &ndash; PRESENT</div>
              <ul class="timeline-bullets">
                <li>
                  Architected and delivered 10+ production-grade Python web
                  applications, REST APIs, and microservices using Django,
                  FastAPI, Celery, and PostgreSQL, maintaining 99.9% uptime.
                </li>
                <li>
                  Integrated structured LLM function calling (Outlines, Gemini,
                  OpenAI) and stateful multi-agent workflows using LangGraph.
                </li>
                <li>
                  Designed automated CI/CD and containerized deployment
                  pipelines using Docker Compose and GitHub Actions across AWS
                  EC2, S3, RDS, and AWS Lambda via Zappa.
                </li>
                <li>
                  Enforced enterprise security standards using JWT stateless
                  auth, RBAC, PII redaction, and unit testing achieving 85%+
                  code coverage with Pytest.
                </li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="timeline-role">AI/ML &amp; & Deep Learning Intern</h3>
              <div class="timeline-company">Aech Technologhy | Remote</div>
              <div class="timeline-date">AUG 2024 &ndash; NOV 2024</div>
              <ul class="timeline-bullets">
                <li>
                  Executed 4-bit QLoRA PEFT fine-tuning on Llama 3 / DeepSeek-R1
                  base models using Unsloth & PyTorch.
                </li>
                <li>
                  Built a privacy-focused local LLM chat interface via Streamlit
                  and Ollama API
                </li>
                <li>
                  Applied deep transfer learning (ResNet50, VGG-16, Inception)
                  on ~186K plant disease foliage images and CIFAR-10 datasets
                </li>
                <li>
                  Developed real-time Face Mask Detection and Traffic Sign
                  Recognition pipelines with OpenCV and TensorFlow
                </li>
              </ul>
            </div>
          </div>

          <div class="timeline-item">
            <div class="timeline-dot"></div>
            <div class="timeline-content">
              <h3 class="timeline-role">
                Machine Learning &amp; Computer Vision Intern
              </h3>
              <div class="timeline-company">CodeAlpha | Remote</div>
              <div class="timeline-date">AUG 2023 &ndash; NOV 2023</div>
              <ul class="timeline-bullets">
                <li>
                  Developed deep learning models for medical image segmentation
                  deploying Segment Anything Model (SAM) on MRI datasets.
                </li>
                <li>
                  Integrated YOLOv11 object detection with DeepSORT stateful
                  tracking, achieving 30+ FPS real-time tracking accuracy on
                  video streams.
                </li>
                <li>
                  Trained deep sequential models on MIDI datasets for AI music
                  composition and constructed an NLP retrieval chatbot for FAQ
                  routing.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ==========================================================================
       INTERACTIVE CONTACT HUB
       ========================================================================== -->
    <section class="section" id="contact">
      <div class="container">
        <h2 class="section-title"><span class="hash">#</span> Get In Touch</h2>
        <p class="section-subtitle">
          Interested in collaborating or hiring for AI/ML and Python backend
          engineering roles? Let's connect.
        </p>

        <div class="contact-grid">
          <div class="contact-info-cards">
            <div class="contact-card">
              <div class="contact-icon">&#9993;</div>
              <div>
                <div style="font-size: 0.85rem; color: var(--text-muted)">
                  EMAIL
                </div>
                <a
                  href="mailto:osama.aslam.86004@gmail.com"
                  style="font-weight: 600"
                  >osama.aslam.86004@gmail.com</a
                >
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-icon">&#128222;</div>
              <div>
                <div style="font-size: 0.85rem; color: var(--text-muted)">
                  PHONE / WHATSAPP
                </div>
                <a
                  href="[suspicious link removed]"
                  target="_blank"
                  style="font-weight: 600"
                  >(+92) 307 4649892</a
                >
              </div>
            </div>

            <div class="contact-card">
              <div class="contact-icon">&#128205;</div>
              <div>
                <div style="font-size: 0.85rem; color: var(--text-muted)">
                  LOCATION
                </div>
                <div style="font-weight: 600">Lahore, Pakistan</div>
              </div>
            </div>

            <div class="map-container">
              <span>[ Lahore, Pakistan Location Map ]</span>
            </div>
          </div>

          <div class="contact-form">
            <form id="contactForm" onsubmit="handleContactSubmit(event)">
              <div class="form-group">
                <label class="form-label" for="contact-name">Your Name</label>
                <input
                  type="text"
                  id="contact-name"
                  class="form-input"
                  placeholder="John Doe"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-email">Your Email</label>
                <input
                  type="email"
                  id="contact-email"
                  class="form-input"
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div class="form-group">
                <label class="form-label" for="contact-message">Message</label>
                <textarea
                  id="contact-message"
                  class="form-textarea"
                  placeholder="Hi Osama, I would like to discuss..."
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-primary" style="width: 100%">
                Send Message
              </button>
              <div
                id="form-response"
                style="margin-top: 1rem; text-align: center; font-size: 0.9rem"
              ></div>
            </form>
          </div>
        </div>
      </div>
    </section>

    <footer>
      <div class="footer-bottom">
        <div>&copy; 2026 Osama Aslam. All rights reserved.</div>
        <div style="font-family: var(--font-mono)">
          Built with HTML5, CSS3 Glassmorphism &amp; Vanilla JS
        </div>
      </div>
    </footer>

    <!-- ==========================================================================
       VANILLA JAVASCRIPT
       ========================================================================== -->
    <script src="static/js/animation.js"></script>
    <script src="static/js/typing_effect.js"></script>
    <script src="static/js/toggle_theme.js"></script>
    <script src="static/js/counter_animation.js"></script>
    <script src="static/js/contact_form.js"></script>
  </body>
</html>
```
