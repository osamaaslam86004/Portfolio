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
components/
  GeminiAssistant.tsx
  ProjectModal.tsx
  Section.tsx
services/
  geminiService.ts
.gitignore
App.tsx
constants.tsx
index.html
index.tsx
metadata.json
package.json
README.md
tsconfig.json
types.ts
vite.config.ts
```

# Files

## File: components/Section.tsx
```typescript
import React from 'react';

interface SectionProps {
  id: string;
  title: string;
  subtitle?: string;
  children: React.ReactNode;
  className?: string;
}

const Section: React.FC<SectionProps> = ({ id, title, subtitle, children, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 max-w-7xl mx-auto border-b border-slate-900 last:border-0 ${className}`}>
      <div className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight">
          <span className="text-indigo-500 font-mono mr-2">&lt;</span>
          {title}
          <span className="text-indigo-500 font-mono ml-2">/&gt;</span>
        </h2>
        {subtitle && <p className="text-slate-400 max-w-2xl">{subtitle}</p>}
      </div>
      {children}
    </section>
  );
};

export default Section;
```

## File: .gitignore
```
# Logs
logs
*.log
npm-debug.log*
yarn-debug.log*
yarn-error.log*
pnpm-debug.log*
lerna-debug.log*

node_modules
dist
dist-ssr
*.local

# Editor directories and files
.vscode/*
!.vscode/extensions.json
.idea
.DS_Store
*.suo
*.ntvs*
*.njsproj
*.sln
*.sw?
```

## File: index.html
```html
<!DOCTYPE html>
<html lang="en" class="scroll-smooth">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Elite Django Dev Portfolio</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
    <style>
      body {
        font-family: 'Inter', sans-serif;
      }
      .mono {
        font-family: 'JetBrains+Mono', monospace;
      }
      @keyframes float {
        0% { transform: translateY(0px); }
        50% { transform: translateY(-10px); }
        100% { transform: translateY(0px); }
      }
      .animate-float {
        animation: float 3s ease-in-out infinite;
      }
    </style>
  <script type="importmap">
{
  "imports": {
    "react/": "https://esm.sh/react@^19.2.3/",
    "react": "https://esm.sh/react@^19.2.3",
    "react-dom/": "https://esm.sh/react-dom@^19.2.3/",
    "recharts": "https://esm.sh/recharts@^3.6.0",
    "lucide-react": "https://esm.sh/lucide-react@^0.562.0",
    "@google/genai": "https://esm.sh/@google/genai@^1.37.0"
  }
}
</script>
</head>
  <body class="bg-slate-950 text-slate-100 selection:bg-indigo-500/30">
    <div id="root"></div>
  </body>
</html>
```

## File: index.tsx
```typescript
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

## File: metadata.json
```json
{
  "name": "Elite Django Dev Portfolio",
  "description": "A high-end, AI-enhanced developer portfolio for a Python-Django expert featuring a Gemini-powered interactive assistant.",
  "requestFramePermissions": [
    "microphone"
  ]
}
```

## File: package.json
```json
{
  "name": "elite-dev-portfolio",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "react": "^19.2.3",
    "react-dom": "^19.2.3",
    "recharts": "^3.6.0",
    "lucide-react": "^0.562.0",
    "@google/genai": "^1.37.0"
  },
  "devDependencies": {
    "@types/node": "^22.14.0",
    "@vitejs/plugin-react": "^5.0.0",
    "typescript": "~5.8.2",
    "vite": "^6.2.0"
  }
}
```

## File: tsconfig.json
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "experimentalDecorators": true,
    "useDefineForClassFields": false,
    "module": "ESNext",
    "lib": [
      "ES2022",
      "DOM",
      "DOM.Iterable"
    ],
    "skipLibCheck": true,
    "types": [
      "node"
    ],
    "moduleResolution": "bundler",
    "isolatedModules": true,
    "moduleDetection": "force",
    "allowJs": true,
    "jsx": "react-jsx",
    "paths": {
      "@/*": [
        "./*"
      ]
    },
    "allowImportingTsExtensions": true,
    "noEmit": true
  }
}
```

## File: vite.config.ts
```typescript
import path from 'path';
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, '.', '');
    return {
      server: {
        port: 3000,
        host: '0.0.0.0',
      },
      plugins: [react()],
      define: {
        'process.env.API_KEY': JSON.stringify(env.GEMINI_API_KEY),
        'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY)
      },
      resolve: {
        alias: {
          '@': path.resolve(__dirname, '.'),
        }
      }
    };
});
```

## File: components/GeminiAssistant.tsx
```typescript
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Loader2, Sparkles } from 'lucide-react';
import { chatWithGemini } from '../services/geminiService';
import { Message } from '../types';

const GeminiAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { 
      role: 'model', 
      text: "Hi! I'm Alex's AI twin. Ask me anything about my experience with Python, Django, or my past projects!", 
      timestamp: new Date() 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const handleSend = async (textOverride?: string) => {
    const messageText = textOverride || input;
    if (!messageText.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', text: messageText, timestamp: new Date() };
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    const history = messages.map(m => ({
      role: m.role,
      parts: [{ text: m.text }]
    }));

    const response = await chatWithGemini(messageText, history);
    
    setMessages(prev => [...prev, { role: 'model', text: response || "Something went wrong.", timestamp: new Date() }]);
    setIsLoading(false);
    
    // Maintain focus on input for keyboard users after sending
    inputRef.current?.focus();
  };

  return (
    <div 
      className="bg-slate-900/50 border border-slate-800 rounded-2xl overflow-hidden backdrop-blur-sm flex flex-col h-[600px] shadow-2xl"
      role="region"
      aria-label="Gemini AI Assistant Chat"
    >
      <div className="bg-indigo-600/10 p-4 border-b border-slate-800 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center" aria-hidden="true">
          <Sparkles className="text-white w-5 h-5" />
        </div>
        <div>
          <h3 className="text-sm font-bold text-white leading-none">Gemini Assistant</h3>
          <span className="text-xs text-indigo-400 font-mono">Powered by Gemini 3 Flash</span>
        </div>
      </div>

      <div 
        ref={scrollRef} 
        className="flex-1 overflow-y-auto p-4 space-y-4 scrollbar-thin scrollbar-thumb-slate-700"
        role="log"
        aria-live="polite"
        aria-relevant="additions"
      >
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-3 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div 
                className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-700' : 'bg-indigo-900/50'}`}
                aria-hidden="true"
              >
                {msg.role === 'user' ? <User size={16} /> : <Bot size={16} className="text-indigo-400" />}
              </div>
              <div 
                className={`rounded-2xl p-4 text-sm leading-relaxed ${
                  msg.role === 'user' 
                    ? 'bg-indigo-600 text-white rounded-tr-none' 
                    : 'bg-slate-800/80 text-slate-200 border border-slate-700 rounded-tl-none shadow-lg'
                }`}
              >
                <span className="sr-only">{msg.role === 'user' ? 'You said:' : 'Assistant said:'}</span>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {isLoading && (
          <div className="flex justify-start" aria-busy="true" aria-label="Assistant is thinking">
            <div className="flex gap-3 animate-pulse">
              <div className="w-8 h-8 rounded-full bg-indigo-900/50 flex items-center justify-center">
                <Bot size={16} className="text-indigo-400" />
              </div>
              <div className="bg-slate-800/80 border border-slate-700 rounded-2xl p-4 rounded-tl-none">
                <Loader2 className="w-5 h-5 animate-spin text-indigo-500" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-900 border-t border-slate-800">
        <div className="relative">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Ask about Django, Python, or work history..."
            aria-label="Message to Alex's AI assistant"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl py-3 pl-4 pr-12 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-slate-100 placeholder-slate-500 transition-all"
          />
          <button
            onClick={() => handleSend()}
            disabled={isLoading || !input.trim()}
            aria-label="Send message"
            className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-slate-700 disabled:opacity-50 text-white rounded-lg transition-colors focus:ring-2 focus:ring-indigo-300 outline-none"
          >
            <Send size={18} aria-hidden="true" />
          </button>
        </div>
        <p className="text-[10px] text-center text-slate-500 mt-2">
          Model may provide inaccurate info about the human Alex. Use with caution.
        </p>
      </div>
    </div>
  );
};

export default GeminiAssistant;
```

## File: services/geminiService.ts
```typescript
import { GoogleGenAI, Type } from "@google/genai";
import { DEVELOPER_INFO, SKILLS, PROJECTS } from "../constants";

const getApiKey = () => process.env.API_KEY || "";

export const chatWithGemini = async (userMessage: string, history: { role: 'user' | 'model', parts: { text: string }[] }[]) => {
  const ai = new GoogleGenAI({ apiKey: getApiKey() });
  
  const systemInstruction = `
    You are an AI assistant representing ${DEVELOPER_INFO.name}, a ${DEVELOPER_INFO.role}. 
    Your goal is to answer questions about their career, skills, and projects based on the provided context.
    
    Context:
    - Bio: ${DEVELOPER_INFO.bio}
    - Skills: ${SKILLS.map(s => `${s.name} (${s.level}%)`).join(", ")}
    - Projects:
      ${PROJECTS.map(p => `
      * ${p.title}
        - Description: ${p.description}
        - Tech Stack: ${p.tags.join(", ")}
        - Details: ${p.longDescription || "No detailed description available."}
      `).join("\n")}
    
    Guidelines:
    - Be professional, technical, and concise.
    - If a question is unrelated to the portfolio, politely steer it back to the developer's expertise.
    - Highlight Django and Python expertise when relevant.
    - Use Markdown for formatting.
    - You represent Alex directly; use "I" or "my" where appropriate but remain professional.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: [
        { role: 'user', parts: [{ text: systemInstruction }] },
        ...history.map(h => ({ role: h.role, parts: h.parts })),
        { role: 'user', parts: [{ text: userMessage }] }
      ],
      config: {
        temperature: 0.7,
        topP: 0.8,
        topK: 40,
      }
    });

    return response.text;
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "I'm having trouble connecting to my neural network right now. Please try again later!";
  }
};
```

## File: constants.tsx
```typescript
import React from 'react';
import { Project, Skill } from './types';
import { 
  Python, 
  Database, 
  Globe, 
  Cpu, 
  Layout, 
  Layers, 
  Terminal, 
  Server,
  Code2
} from 'lucide-react';

export const DEVELOPER_INFO = {
  name: "Alex Rivera",
  role: "Senior Python & Django Architect",
  bio: "Full-stack artisan specializing in scalable Python backend systems and robust Django architectures. Crafting clean code and high-performance APIs for the modern web.",
  location: "San Francisco, CA",
  email: "alex.rivera@example.com",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  twitter: "https://twitter.com"
};

export const PROJECTS: Project[] = [
  {
    id: "1",
    title: "EcoStream API Gateway",
    description: "A high-concurrency microservices orchestrator built with Django Ninja and Redis, processing over 10M requests daily.",
    longDescription: "EcoStream is a high-performance API Gateway designed to handle millions of concurrent requests. Built on top of Django Ninja for its asynchronous capabilities and Redis for lightning-fast caching and rate limiting. The project involved implementing complex circuit breaker patterns, request aggregation, and dynamic routing logic to ensure 99.99% uptime across several underlying microservices.",
    tags: ["Python", "Django", "Redis", "Docker"],
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc51?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop"
    ],
    link: "#",
    github: "#"
  },
  {
    id: "2",
    title: "FinTrack SaaS Dashboard",
    description: "Real-time financial analytics platform with complex data visualizations and automated multi-tenant isolation.",
    longDescription: "FinTrack is a robust SaaS solution tailored for financial advisors. It features a sophisticated multi-tenant architecture using PostgreSQL schemas to ensure strict data isolation. The dashboard provides real-time analytics using Django Channels for WebSockets and D3.js for interactive visualizations. Key challenges included optimizing complex SQL queries for historical data aggregation and implementing a secure, fine-grained permission system.",
    tags: ["Django", "PostgreSQL", "React", "D3.js"],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1543286386-713bdd548da4?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1535320903710-d993d3d77d29?q=80&w=800&auto=format&fit=crop"
    ],
    link: "#",
    github: "#"
  },
  {
    id: "3",
    title: "NeuroMail AI Integrator",
    description: "Seamlessly connecting LLMs with traditional mailing workflows using Celery workers and RabbitMQ.",
    longDescription: "NeuroMail revolutionizes email management by integrating state-of-the-art Large Language Models into standard workflows. It uses a distributed task queue system powered by Celery and RabbitMQ to handle asynchronous AI processing without blocking the main application flow. Features include automated categorization, high-quality draft generation, and intelligent thread summarization, all exposed through a clean RESTful API.",
    tags: ["Python", "Celery", "OpenAI", "Django"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200&auto=format&fit=crop",
    screenshots: [
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=800&auto=format&fit=crop"
    ],
    link: "#",
    github: "#"
  }
];

export const SKILLS: Skill[] = [
  { name: "Python", level: 95, category: "Backend" },
  { name: "Django / DRF", level: 98, category: "Backend" },
  { name: "FastAPI", level: 85, category: "Backend" },
  { name: "PostgreSQL", level: 90, category: "Database" },
  { name: "Redis", level: 80, category: "Database" },
  { name: "React / TS", level: 85, category: "Frontend" },
  { name: "Tailwind CSS", level: 90, category: "Frontend" },
  { name: "Docker", level: 88, category: "DevOps" },
  { name: "AWS / GCP", level: 82, category: "DevOps" },
  { name: "CI/CD Pipelines", level: 85, category: "DevOps" },
];

export const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Skills", href: "#skills" },
  { name: "Ask Gemini", href: "#ask-ai" }
];
```

## File: README.md
```markdown
<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1_5WUaRT6tl-rTzKWpfWr8n96sh9bfT35

## Run Locally

**Prerequisites:**  Node.js


1. Install dependencies:
   `npm install`
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   `npm run dev`
```

## File: types.ts
```typescript
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  image: string;
  screenshots?: string[];
  link: string;
  github: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Backend' | 'Frontend' | 'DevOps' | 'Database';
}

export interface Message {
  role: 'user' | 'model';
  text: string;
  timestamp: Date;
}
```

## File: components/ProjectModal.tsx
```typescript
import React, { useEffect, useRef, useState } from 'react';
import { X, Github, ExternalLink, Code2, Layers, CheckCircle2, Share2, Check } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previousFocus = useRef<HTMLElement | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // Store the element that had focus before opening the modal
    previousFocus.current = document.activeElement as HTMLElement;

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    const handleTabTrap = (e: KeyboardEvent) => {
      if (e.key !== 'Tab' || !modalRef.current) return;

      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusableElements.length === 0) return;

      const firstElement = focusableElements[0] as HTMLElement;
      const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    window.addEventListener('keydown', handleEsc);
    window.addEventListener('keydown', handleTabTrap);
    document.body.style.overflow = 'hidden';

    // Focus the first focusable element (the close button)
    const firstButton = modalRef.current?.querySelector('button');
    if (firstButton instanceof HTMLElement) {
      firstButton.focus();
    }

    return () => {
      window.removeEventListener('keydown', handleEsc);
      window.removeEventListener('keydown', handleTabTrap);
      document.body.style.overflow = 'unset';
      // Return focus to the trigger element
      previousFocus.current?.focus();
    };
  }, [onClose]);

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}${window.location.pathname}#project-${project.id}`;
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy link: ', err);
    }
  };

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-slate-950/90 backdrop-blur-sm animate-in fade-in duration-300"
      onClick={onClose}
      role="presentation"
    >
      <div 
        ref={modalRef}
        className="relative bg-slate-900 border border-slate-800 rounded-3xl w-full max-w-5xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300 focus:outline-none"
        onClick={(e) => e.stopPropagation()}
        tabIndex={-1}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        {/* Close Button - Placed first in DOM for screen reader discovery */}
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 p-2 bg-slate-950/50 hover:bg-slate-800 text-white rounded-full transition-all z-10 focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 outline-none group"
          aria-label="Close project details modal"
        >
          <X size={24} aria-hidden="true" className="group-hover:scale-110 transition-transform" />
          <span className="sr-only">Press escape to close</span>
        </button>

        <div className="flex flex-col lg:flex-row">
          {/* Visual Side */}
          <div className="lg:w-1/2 p-6 lg:p-10 bg-slate-950/30">
            <div className="rounded-2xl overflow-hidden shadow-lg mb-6 border border-slate-800">
              <img 
                src={project.image} 
                alt={`Hero image for ${project.title}`} 
                className="w-full h-auto object-cover"
              />
            </div>
            {project.screenshots && project.screenshots.length > 0 && (
              <div className="grid grid-cols-2 gap-4" role="group" aria-label="Project screenshots">
                {project.screenshots.map((src, idx) => (
                  <div key={idx} className="rounded-xl overflow-hidden border border-slate-800">
                    <img src={src} alt={`Screenshot ${idx + 1} of ${project.title}`} className="w-full h-auto" />
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2 p-8 lg:p-12 space-y-8">
            <header>
              <div className="flex flex-wrap gap-2 mb-4" aria-label="Technology stack">
                {project.tags.map(tag => (
                  <span key={tag} className="px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-xs font-mono text-indigo-400">
                    {tag}
                  </span>
                ))}
              </div>
              <h2 id="modal-title" className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                {project.title}
              </h2>
              <div id="modal-description" className="text-slate-400 text-lg leading-relaxed">
                {project.longDescription || project.description}
              </div>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <section className="space-y-3" aria-labelledby="features-heading">
                <h4 id="features-heading" className="text-sm font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <Code2 size={16} aria-hidden="true" /> Key Features
                </h4>
                <ul className="space-y-2 text-sm text-slate-300">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} aria-hidden="true" className="text-indigo-500 mt-1 flex-shrink-0" /> 
                    <span>Scalable Backend Architecture</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} aria-hidden="true" className="text-indigo-500 mt-1 flex-shrink-0" /> 
                    <span>Real-time Data Synchronization</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 size={14} aria-hidden="true" className="text-indigo-500 mt-1 flex-shrink-0" /> 
                    <span>Multi-tenant Security</span>
                  </li>
                </ul>
              </section>
              <section className="space-y-3" aria-labelledby="stack-heading">
                <h4 id="stack-heading" className="text-sm font-bold uppercase tracking-widest text-slate-500 flex items-center gap-2">
                  <Layers size={16} aria-hidden="true" /> Stack Detail
                </h4>
                <p className="text-sm text-slate-400">
                  Built with industrial-grade standards, prioritizing performance and maintainability using the modern Python ecosystem.
                </p>
              </section>
            </div>

            <nav className="flex flex-wrap gap-4 pt-4" aria-label="Project interactive links">
              {project.link && project.link !== "#" && (
                <a 
                  href={project.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] px-6 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-600/20 flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-indigo-300 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 outline-none"
                >
                  <ExternalLink size={20} aria-hidden="true" /> 
                  <span>Live Demo</span>
                </a>
              )}
              {project.github && project.github !== "#" && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[140px] px-6 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 outline-none"
                >
                  <Github size={20} aria-hidden="true" /> 
                  <span>GitHub</span>
                </a>
              )}
              <button 
                onClick={handleShare}
                className={`flex-1 min-w-[140px] px-6 py-4 font-bold rounded-xl transition-all flex items-center justify-center gap-2 focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-900 outline-none ${
                  copied 
                  ? 'bg-green-600 text-white focus-visible:ring-green-400' 
                  : 'bg-slate-800 hover:bg-slate-700 text-white focus-visible:ring-slate-500'
                }`}
                aria-label={copied ? "Link copied to clipboard" : "Share project link"}
              >
                {copied ? <Check size={20} aria-hidden="true" /> : <Share2 size={20} aria-hidden="true" />}
                <span>{copied ? "Copied!" : "Share"}</span>
              </button>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
```

## File: App.tsx
```typescript
import React, { useState, useEffect, useMemo } from 'react';
import { 
  Github, 
  Linkedin, 
  Twitter, 
  Mail, 
  ExternalLink, 
  Menu, 
  X, 
  Terminal,
  ChevronRight,
  Code,
  Layout,
  Database,
  Cloud,
  Cpu,
  Filter
} from 'lucide-react';
import Section from './components/Section';
import GeminiAssistant from './components/GeminiAssistant';
import ProjectModal from './components/ProjectModal';
import { DEVELOPER_INFO, PROJECTS, SKILLS, NAV_LINKS } from './constants';
import { Project } from './types';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

const App: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Extract unique tags for filtering
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    PROJECTS.forEach(project => project.tags.forEach(tag => tags.add(tag)));
    return ['All', ...Array.from(tags).sort()];
  }, []);

  const filteredProjects = useMemo(() => {
    if (activeFilter === 'All') return PROJECTS;
    return PROJECTS.filter(project => project.tags.includes(activeFilter));
  }, [activeFilter]);

  const categoryData = [
    { name: 'Backend', value: 40, color: '#6366f1' },
    { name: 'Frontend', value: 25, color: '#818cf8' },
    { name: 'DevOps', value: 20, color: '#a5b4fc' },
    { name: 'Database', value: 15, color: '#c7d2fe' },
  ];

  return (
    <div className="min-h-screen bg-slate-950">
      {/* Project Detailed Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-950/90 backdrop-blur-md border-b border-slate-800 py-4 shadow-lg' : 'bg-transparent py-6'
      }`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a href="#" className="flex items-center gap-2 group">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center rotate-3 group-hover:rotate-0 transition-transform">
              <Terminal className="text-white" size={24} />
            </div>
            <span className="font-bold text-xl tracking-tight hidden sm:block">
              {DEVELOPER_INFO.name.split(' ')[0]}<span className="text-indigo-500">.dev</span>
            </span>
          </a>

          <div className="hidden md:flex items-center gap-8" role="menubar">
            {NAV_LINKS.map(link => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-slate-400 hover:text-white transition-colors uppercase tracking-widest"
                role="menuitem"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-5 py-2.5 bg-indigo-600 hover:bg-indigo-500 text-white rounded-full text-sm font-bold transition-all transform hover:-translate-y-0.5 shadow-lg shadow-indigo-600/20"
            >
              Hire Me
            </a>
          </div>

          <button 
            className="md:hidden text-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 rounded" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-slate-950 flex flex-col items-center justify-center gap-8 md:hidden" role="dialog" aria-label="Mobile navigation">
          {NAV_LINKS.map(link => (
            <a 
              key={link.name} 
              href={link.href} 
              onClick={() => setIsMenuOpen(false)}
              className="text-2xl font-bold text-slate-300 hover:text-indigo-500"
            >
              {link.name}
            </a>
          ))}
        </div>
      )}

      {/* Hero Section */}
      <header id="home" className="pt-40 pb-20 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 min-h-screen">
        <div className="lg:w-1/2 space-y-8 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-500/10 border border-indigo-500/20 rounded-full text-indigo-400 text-sm font-mono animate-pulse">
            <span className="w-2 h-2 bg-indigo-500 rounded-full"></span>
            Available for new opportunities
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white tracking-tighter">
            Building robust <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
              digital ecosystems
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-xl mx-auto lg:mx-0 leading-relaxed">
            {DEVELOPER_INFO.bio}
          </p>
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a href="#projects" className="px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-indigo-50 transition-all shadow-xl">
              View Projects
            </a>
            <a href="#ask-ai" className="px-8 py-4 bg-slate-900 text-white border border-slate-700 font-bold rounded-xl hover:bg-slate-800 transition-all flex items-center gap-2">
              Talk to AI Twin <ChevronRight size={18} />
            </a>
          </div>
          <div className="flex justify-center lg:justify-start gap-6 pt-4">
            <a href={DEVELOPER_INFO.github} className="text-slate-500 hover:text-white transition-colors" aria-label="Github Profile"><Github size={24} /></a>
            <a href={DEVELOPER_INFO.linkedin} className="text-slate-500 hover:text-white transition-colors" aria-label="LinkedIn Profile"><Linkedin size={24} /></a>
            <a href={DEVELOPER_INFO.twitter} className="text-slate-500 hover:text-white transition-colors" aria-label="Twitter Profile"><Twitter size={24} /></a>
            <a href={`mailto:${DEVELOPER_INFO.email}`} className="text-slate-500 hover:text-white transition-colors" aria-label="Email Alex"><Mail size={24} /></a>
          </div>
        </div>
        
        <div className="lg:w-1/2 relative">
          <div className="absolute -inset-10 bg-indigo-500/20 blur-[100px] rounded-full"></div>
          <div className="relative bg-slate-900 border border-slate-800 rounded-3xl p-8 overflow-hidden shadow-2xl group" aria-hidden="true">
            <div className="flex gap-2 mb-6">
              <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
              <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
            </div>
            <div className="space-y-4 font-mono text-sm">
              <p className="text-indigo-400"># Developer Profile</p>
              <div className="flex gap-4">
                <span className="text-slate-600">01</span>
                <p><span className="text-pink-500">class</span> <span className="text-yellow-400">Developer</span>:</p>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600">02</span>
                <p className="pl-4"><span className="text-pink-500">def</span> <span className="text-cyan-400">__init__</span>(self):</p>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600">03</span>
                <p className="pl-8">self.name = <span className="text-green-400">"{DEVELOPER_INFO.name}"</span></p>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600">04</span>
                <p className="pl-8">self.role = <span className="text-green-400">"Full Stack Architect"</span></p>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600">05</span>
                <p className="pl-8">self.focus = [<span className="text-green-400">"Django"</span>, <span className="text-green-400">"Postgres"</span>, <span className="text-green-400">"React"</span>]</p>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600">06</span>
                <p className="pl-4"><span className="text-pink-500">def</span> <span className="text-cyan-400">hire</span>(self):</p>
              </div>
              <div className="flex gap-4">
                <span className="text-slate-600">07</span>
                <p className="pl-8"><span className="text-pink-500">return</span> <span className="text-yellow-400">True</span></p>
              </div>
              <p className="text-slate-600">_</p>
            </div>
          </div>
        </div>
      </header>

      {/* Expertise Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" aria-label="Expertise">
        {[
          { icon: <Cpu className="text-indigo-500" />, title: "Backend Systems", desc: "Crafting scalable Python/Django architectures." },
          { icon: <Layout className="text-cyan-500" />, title: "UI Engineering", desc: "Responsive React apps with smooth UX." },
          { icon: <Database className="text-purple-500" />, title: "Data Architecture", desc: "Optimizing PostgreSQL and Redis flows." },
          { icon: <Cloud className="text-blue-500" />, title: "Cloud DevOps", desc: "Automated Docker and CI/CD workflows." }
        ].map((item, i) => (
          <div key={i} className="p-8 bg-slate-900 border border-slate-800 rounded-2xl hover:border-indigo-500/50 transition-all hover:shadow-xl hover:shadow-indigo-500/5 group">
            <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center mb-6 border border-slate-800 group-hover:scale-110 transition-transform" aria-hidden="true">
              {item.icon}
            </div>
            <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </div>
        ))}
      </section>

      {/* Projects Section */}
      <Section id="projects" title="Featured Work" subtitle="A selection of architectural solutions and full-stack implementations. Click to explore details.">
        {/* Filtering UI */}
        <nav className="mb-10 flex flex-wrap items-center gap-3" aria-label="Project filtering">
          <div className="flex items-center gap-2 text-slate-500 mr-4 text-sm font-medium">
            <Filter size={16} aria-hidden="true" />
            <span>Filter by:</span>
          </div>
          {allTags.map(tag => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              aria-pressed={activeFilter === tag}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all border outline-none focus:ring-2 focus:ring-indigo-500/50 ${
                activeFilter === tag 
                  ? 'bg-indigo-600 border-indigo-600 text-white shadow-lg shadow-indigo-600/20' 
                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:text-white hover:border-slate-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </nav>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500" role="list">
          {filteredProjects.map(project => (
            <div 
              key={project.id} 
              role="listitem"
              tabIndex={0}
              onClick={() => setSelectedProject(project)}
              onKeyDown={(e) => e.key === 'Enter' && setSelectedProject(project)}
              className="group cursor-pointer flex flex-col bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 hover:border-slate-700 transition-all hover:-translate-y-2 shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500 focus:ring-2 focus:ring-indigo-500 outline-none"
              aria-label={`View details for ${project.title}`}
            >
              <div className="aspect-video overflow-hidden relative">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
                />
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                   <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 delay-100 ease-out">
                      <span 
                        onClick={(e) => { e.stopPropagation(); window.open(project.github, '_blank'); }}
                        className="p-3 bg-white hover:bg-slate-100 text-slate-900 rounded-xl transition-colors shadow-lg"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if(e.key === 'Enter') { e.stopPropagation(); window.open(project.github, '_blank'); }}}
                        aria-label={`GitHub Repository for ${project.title}`}
                      >
                        <Github size={20} />
                      </span>
                      <span 
                        onClick={(e) => { e.stopPropagation(); window.open(project.link, '_blank'); }}
                        className="p-3 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl transition-colors shadow-lg"
                        role="button"
                        tabIndex={0}
                        onKeyDown={(e) => { if(e.key === 'Enter') { e.stopPropagation(); window.open(project.link, '_blank'); }}}
                        aria-label={`Live Demo for ${project.title}`}
                      >
                        <ExternalLink size={20} />
                      </span>
                   </div>
                </div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-white">{project.title}</h3>
                  <ChevronRight size={20} className="text-slate-600 group-hover:text-indigo-500 transition-colors" aria-hidden="true" />
                </div>
                <p className="text-slate-400 text-sm mb-6 flex-1 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2" aria-label="Tags">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-3 py-1 bg-slate-950 border border-slate-800 rounded-full text-xs font-mono text-indigo-400">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="col-span-full py-20 text-center">
              <p className="text-slate-500">No projects found for the selected filter.</p>
            </div>
          )}
        </div>
      </Section>

      {/* Skills Visualization */}
      <Section id="skills" title="Technical Proficiency" subtitle="A deep dive into my toolbelt and engineering capabilities.">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            {SKILLS.slice(0, 6).map(skill => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-bold text-slate-200">{skill.name}</span>
                  <span className="font-mono text-indigo-400" aria-label={`${skill.level} percent proficiency`}>{skill.level}%</span>
                </div>
                <div className="h-2 bg-slate-900 rounded-full overflow-hidden border border-slate-800" role="progressbar" aria-valuenow={skill.level} aria-valuemin={0} aria-valuemax={100}>
                  <div 
                    className="h-full bg-gradient-to-r from-indigo-600 to-cyan-500 rounded-full transition-all duration-1000" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          <div className="h-[400px] flex flex-col items-center justify-center bg-slate-900/30 rounded-3xl border border-slate-800 p-8">
            <h4 className="text-lg font-bold mb-8 text-white">Ecosystem Balance</h4>
            <div className="w-full h-full" role="img" aria-label="Pie chart showing balance of backend, frontend, devops, and database skills">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={categoryData}
                    cx="50%"
                    cy="50%"
                    innerRadius={80}
                    outerRadius={120}
                    paddingAngle={8}
                    dataKey="value"
                  >
                    {categoryData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '12px' }}
                    itemStyle={{ color: '#fff' }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              {categoryData.map(cat => (
                <div key={cat.name} className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: cat.color }} aria-hidden="true"></div>
                  <span className="text-xs text-slate-400 font-medium">{cat.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* AI Assistant Section */}
      <Section id="ask-ai" title="AI Twin Assistant" subtitle="Ask my digital twin anything about my professional background.">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-6">
            <div className="p-6 bg-indigo-600/10 border border-indigo-500/20 rounded-2xl">
              <h4 className="text-lg font-bold text-white mb-4 flex items-center gap-2">
                <Code size={20} className="text-indigo-400" aria-hidden="true" />
                Intelligent Search
              </h4>
              <p className="text-sm text-slate-400 leading-relaxed">
                This assistant uses Gemini to process my resume and project history. It can describe how I solved specific bugs, my architecture preferences, and more.
              </p>
            </div>
            <div className="space-y-4">
               <h5 className="text-xs font-bold uppercase tracking-widest text-slate-500">Suggested Questions</h5>
               {[
                 "How many years of Django experience?",
                 "Explain your microservices approach.",
                 "What databases do you prefer?",
                 "Are you open to remote work?"
               ].map(q => (
                 <button 
                  key={q} 
                  className="w-full text-left p-4 rounded-xl border border-slate-800 hover:border-indigo-500/30 hover:bg-slate-900 transition-all text-sm text-slate-400 hover:text-white outline-none focus:ring-2 focus:ring-indigo-500/50"
                  onClick={() => {
                    // This is handled by a ref or state in a more complex app, 
                    // for now it's a visual suggestion.
                  }}
                >
                   {q}
                 </button>
               ))}
            </div>
          </div>
          <div className="lg:col-span-2">
            <GeminiAssistant />
          </div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" title="Get In Touch" subtitle="Interested in collaborating? Let's discuss your next breakthrough project.">
        <div className="max-w-4xl mx-auto bg-slate-900 rounded-3xl border border-slate-800 p-8 md:p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-600/10 blur-[100px] rounded-full -mr-20 -mt-20" aria-hidden="true"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-4 text-white">Contact Information</h3>
                <p className="text-slate-400 leading-relaxed">Feel free to reach out for consultations, project proposals, or just to say hi.</p>
              </div>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800" aria-hidden="true">
                    <Mail className="text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Email</p>
                    <p className="text-white font-medium">{DEVELOPER_INFO.email}</p>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                   <div className="w-12 h-12 rounded-xl bg-slate-950 flex items-center justify-center border border-slate-800" aria-hidden="true">
                    <Twitter className="text-indigo-500" />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Twitter</p>
                    <p className="text-white font-medium">@alexrivera_dev</p>
                  </div>
                </div>
              </div>
            </div>

            <form className="space-y-6" onSubmit={(e) => e.preventDefault()} aria-label="Contact form">
              <div className="space-y-2">
                <label htmlFor="name-field" className="text-sm font-bold text-slate-400">Full Name</label>
                <input id="name-field" type="text" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white" placeholder="Jane Doe" />
              </div>
              <div className="space-y-2">
                <label htmlFor="email-field" className="text-sm font-bold text-slate-400">Email Address</label>
                <input id="email-field" type="email" required className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white" placeholder="jane@example.com" />
              </div>
              <div className="space-y-2">
                <label htmlFor="message-field" className="text-sm font-bold text-slate-400">Message</label>
                <textarea id="message-field" required rows={4} className="w-full bg-slate-950 border border-slate-800 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 text-white" placeholder="Tell me about your project..."></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl transition-all shadow-xl shadow-indigo-600/20 focus:ring-2 focus:ring-indigo-300 outline-none">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-900 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center" aria-hidden="true">
              <Terminal size={18} className="text-white" />
            </div>
            <span className="font-bold text-lg text-white tracking-tight">Alex Rivera</span>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} Elite Developer Portfolio. Built with React & Gemini.
          </p>
          <nav className="flex gap-6" aria-label="Footer navigation">
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Privacy</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Terms</a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors text-sm">Sitemap</a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default App;
```
