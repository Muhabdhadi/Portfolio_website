# Muhammad Abdelhadi — Portfolio Website

A professional personal portfolio built with **Next.js**, featuring a dark enterprise-style design and an AI-powered **Digital Twin** chatbot that answers questions about career history, skills, and experience.

![Next.js](https://img.shields.io/badge/Next.js-15-black?style=flat-square&logo=next.js)
![React](https://img.shields.io/badge/React-19-61DAFB?style=flat-square&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8-3178C6?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38B2AC?style=flat-square&logo=tailwind-css)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Technology Stack](#technology-stack)
- [Prerequisites](#prerequisites)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Installation](#installation)
- [Running the Project](#running-the-project)
- [Digital Twin (AI Chat)](#digital-twin-ai-chat)
- [Customizing Content](#customizing-content)
- [Building for Production](#building-for-production)
- [Deployment](#deployment)
- [Troubleshooting](#troubleshooting)
- [Additional Documentation](#additional-documentation)
- [License](#license)

---

## Overview

This is a single-page portfolio website for **Muhammad Ahmed Abdelhadi**, an Angular developer based in Cairo, Egypt. The site showcases professional experience, skills, education, and contact information, with a floating AI assistant ("Digital Twin") powered by [OpenRouter](https://openrouter.ai/).

The design follows an **enterprise meets edgy** aesthetic: deep charcoal backgrounds, electric cyan and violet accents, Syne display typography, subtle grid textures, scroll animations, and gradient-bordered cards.

---

## Features

| Feature | Description |
|---|---|
| **Hero section** | Name, tagline, GitHub link, CV download, key stats |
| **About Me** | Professional summary with highlight cards |
| **Career Journey** | Interactive timeline of work history and education |
| **Skills** | Grouped technical skills (Front-End, Tools, Foundations) |
| **Portfolio** | Project cards (placeholder — ready for future case studies) |
| **Contact** | Email, phone, location, GitHub, LeetCode with mailto CTA |
| **Digital Twin chat** | AI assistant that speaks about your career using resume data |
| **Responsive design** | Mobile navigation menu and adaptive layouts |
| **Scroll animations** | Sections fade in as the user scrolls |
| **CV download** | PDF resume served from `/Muhammad-Abdelhadi-CV.pdf` |

---

## Technology Stack

### Core

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | 15.x | React framework — routing, SSR, API routes |
| [React](https://react.dev/) | 19.x | Component-based UI |
| [TypeScript](https://www.typescriptlang.org/) | 5.8.x | Static typing and developer tooling |
| [Tailwind CSS](https://tailwindcss.com/) | 4.x | Utility-first styling |

### AI Integration

| Service | Purpose |
|---|---|
| [OpenRouter](https://openrouter.ai/) | Unified API for LLM access |
| Model: `openai/gpt-oss-120b:free` | Free-tier model used by the Digital Twin |

### Fonts

| Font | Usage |
|---|---|
| [Syne](https://fonts.google.com/specimen/Syne) | Display headings |
| [DM Sans](https://fonts.google.com/specimen/DM+Sans) | Body text |

Loaded via `next/font/google` for optimized, self-hosted delivery.

### Tooling

- **ESLint** — code linting (`eslint-config-next`)
- **PostCSS** — CSS processing for Tailwind v4

---

## Prerequisites

Before running this project, ensure the following are installed and configured.

### 1. Node.js (required)

- **Minimum:** Node.js **18.18.0** or later  
- **Recommended:** Node.js **20 LTS** or **22 LTS**

Check your version:

```bash
node --version
```

Download from: [https://nodejs.org](https://nodejs.org)

> npm is included with Node.js. Verify with `npm --version`.

### 2. npm (required)

This project uses **npm** as the package manager (a `package-lock.json` is generated on install).

Alternative package managers (pnpm, yarn) may work but are not documented here.

### 3. OpenRouter API key (required for Digital Twin)

The AI chat feature requires an API key from OpenRouter:

1. Create an account at [https://openrouter.ai](https://openrouter.ai)
2. Go to **Keys** and generate an API key
3. Add it to your `.env` file (see [Environment Variables](#environment-variables))

The portfolio sections (Hero, About, Skills, etc.) work **without** an API key. Only the Digital Twin chat requires it.

### 4. Git (optional)

Required only if cloning the repository:

```bash
git --version
```

Download from: [https://git-scm.com](https://git-scm.com)

### 5. Code editor (recommended)

[Visual Studio Code](https://code.visualstudio.com/) or [Cursor](https://cursor.com/) with TypeScript and Tailwind CSS extensions.

---

## Project Structure

```
site/
├── public/
│   └── Muhammad-Abdelhadi-CV.pdf     # Downloadable resume (served at /Muhammad-Abdelhadi-CV.pdf)
├── src/
│   ├── app/                          # Next.js App Router
│   │   ├── api/
│   │   │   └── chat/
│   │   │       └── route.ts          # POST /api/chat — OpenRouter integration
│   │   ├── globals.css               # Tailwind theme, animations, custom utilities
│   │   ├── icon.tsx                  # Dynamic favicon (MA initials)
│   │   ├── layout.tsx                # Root layout — fonts, metadata, HTML shell
│   │   └── page.tsx                  # Homepage — assembles all sections
│   ├── components/
│   │   ├── About.tsx                 # About Me section
│   │   ├── CareerJourney.tsx         # Work timeline + education
│   │   ├── Contact.tsx               # Contact details and CTA
│   │   ├── DigitalTwinChat.tsx       # Floating AI chat widget (client component)
│   │   ├── Footer.tsx                # Footer links
│   │   ├── Hero.tsx                  # Landing hero section
│   │   ├── Navigation.tsx            # Fixed nav + mobile menu (client component)
│   │   ├── Portfolio.tsx             # Portfolio cards
│   │   ├── ScrollReveal.tsx          # Scroll-triggered fade-in wrapper
│   │   └── Skills.tsx                # Skills grid
│   ├── data/
│   │   └── resume.ts                 # All portfolio content (single source of truth)
│   └── lib/
│       └── digital-twin-context.ts     # Builds AI system prompt from resume data
├── .env                              # Environment secrets (create this — not in git)
├── .eslintrc.json                    # ESLint configuration
├── .gitignore
├── next.config.ts                    # Next.js configuration
├── package.json                      # Dependencies and npm scripts
├── postcss.config.mjs                # PostCSS / Tailwind setup
├── tsconfig.json                     # TypeScript configuration
├── tutorial.md                       # Beginner-friendly build walkthrough
└── review.md                         # Code review and improvement recommendations
```

---

## Environment Variables

Create a file named `.env` in the **project root** (same folder as `package.json`):

```env
# Required for Digital Twin chat
OPENROUTER_API_KEY=your-openrouter-api-key-here

# Optional — used as HTTP-Referer when calling OpenRouter (recommended for production)
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

| Variable | Required | Description |
|---|---|---|
| `OPENROUTER_API_KEY` | Yes (for chat) | Your OpenRouter API key. **Never commit this to git.** |
| `NEXT_PUBLIC_SITE_URL` | No | Public URL of your site. Defaults to `http://localhost:3000`. Set to your production domain when deploying. |

> `.env` is listed in `.gitignore` and will not be pushed to version control.

---

## Installation

### Step 1 — Get the project

**Option A: Clone from GitHub**

```bash
git clone https://github.com/Muhabdhadi/Portfolio_website.git
cd Portfolio_website
```

**Option B: Use an existing local copy**

Open a terminal in the project folder (where `package.json` lives).

### Step 2 — Install dependencies

```bash
npm install
```

This downloads all packages listed in `package.json` into `node_modules/`. First install may take 1–2 minutes depending on your connection.

Expected output ends with something like:

```
added 328 packages, and audited 328 packages in 58s
```

### Step 3 — Configure environment variables

Create `.env` in the project root and add your OpenRouter API key:

```env
OPENROUTER_API_KEY=sk-or-v1-xxxxxxxxxxxxxxxx
```

### Step 4 — Verify installation

```bash
npm run build
```

A successful build ends with:

```
✓ Compiled successfully
Route (app)                              Size     First Load JS
┌ ○ /                                    ...
├ ƒ /api/chat                            ...
└ ○ /icon                                ...
```

---

## Running the Project

### Development mode (recommended for local work)

Starts a hot-reloading dev server:

```bash
npm run dev
```

Open in your browser:

| URL | Description |
|---|---|
| [http://localhost:3000](http://localhost:3000) | Local access |
| `http://<your-local-ip>:3000` | Network access (shown in terminal) |

The terminal will show:

```
▲ Next.js 15.x
- Local:   http://localhost:3000
- Environments: .env

✓ Ready in 5s
```

Changes to source files reload automatically. API route changes also hot-reload.

### Production mode (local preview)

Build and serve the optimized production bundle:

```bash
# 1. Stop the dev server if it is running (Ctrl+C)

# 2. Build
npm run build

# 3. Start production server
npm run start
```

Then open [http://localhost:3000](http://localhost:3000).

> **Important:** Do not run `npm run dev` and `npm run build` at the same time. This can corrupt the `.next` cache. See [Troubleshooting](#troubleshooting).

### Linting

Check code for common issues:

```bash
npm run lint
```

---

## Digital Twin (AI Chat)

The **Digital Twin** is a floating chat widget (bottom-right corner) that lets visitors ask questions about Muhammad's career.

### How it works

1. User types a question in the chat panel
2. The browser sends a `POST` request to `/api/chat` with the conversation history
3. The server attaches a **system prompt** built from `src/data/resume.ts`
4. The server calls OpenRouter with model `openai/gpt-oss-120b:free`
5. The AI response is returned and displayed in the chat

The API key never leaves the server.

### Testing the API directly

With the dev server running:

```bash
curl -X POST http://localhost:3000/api/chat \
  -H "Content-Type: application/json" \
  -d "{\"messages\":[{\"role\":\"user\",\"content\":\"What is your experience with Angular?\"}]}"
```

**PowerShell (Windows):**

```powershell
$body = '{"messages":[{"role":"user","content":"What is your experience with Angular?"}]}'
Invoke-RestMethod -Uri "http://localhost:3000/api/chat" -Method POST -ContentType "application/json" -Body $body
```

### Suggested starter questions

- "What's your experience with Angular?"
- "Tell me about your healthcare work at Bypa-ss"
- "Walk me through your career journey"

---

## Customizing Content

Most site content lives in one file:

**`src/data/resume.ts`**

| Export | What it controls |
|---|---|
| `profile` | Name, title, tagline, contact info, social links |
| `about` | About Me summary paragraphs and highlight cards |
| `experience` | Career timeline entries |
| `education` | Degree and coursework |
| `skillGroups` | Skills section categories |
| `portfolioItems` | Portfolio cards (update when projects are ready) |
| `navLinks` | Navigation menu items |

After editing `resume.ts`, save the file — the dev server reloads automatically. The Digital Twin also picks up changes because its system prompt is built from the same data.

### Updating the CV PDF

Replace the file at:

```
public/Muhammad-Abdelhadi-CV.pdf
```

The download button in the Hero section links to `/Muhammad-Abdelhadi-CV.pdf`.

### Changing the AI model

Edit the model constant in `src/app/api/chat/route.ts`:

```typescript
const MODEL = "openai/gpt-oss-120b:free";
```

Browse available models at [https://openrouter.ai/models](https://openrouter.ai/models).

---

## Building for Production

```bash
npm run build
npm run start
```

The build output includes:

| Route | Type | Description |
|---|---|---|
| `/` | Static | Homepage |
| `/api/chat` | Dynamic | AI chat API endpoint |
| `/icon` | Static | Favicon |

Build artifacts are stored in `.next/` (gitignored).

---

## Deployment

This project is optimized for deployment on [Vercel](https://vercel.com/) (creators of Next.js).

### Vercel (recommended)

1. Push the project to GitHub
2. Import the repository at [vercel.com/new](https://vercel.com/new)
3. Add environment variables in the Vercel dashboard:
   - `OPENROUTER_API_KEY` = your key
   - `NEXT_PUBLIC_SITE_URL` = your production URL (e.g. `https://yourdomain.com`)
4. Deploy

Vercel auto-detects Next.js and runs `npm run build`.

### Other platforms

Any platform supporting Node.js 18+ and Next.js 15 works (Netlify, Railway, Docker, etc.). Ensure environment variables are set in the platform's dashboard.

---

## Troubleshooting

### `Cannot find module './331.js'` (or similar webpack error)

**Cause:** The `.next` build cache is corrupted — usually from running `npm run build` while `npm run dev` was still active.

**Fix:**

```bash
# Stop the dev server (Ctrl+C), then:

# Windows PowerShell
Remove-Item -Recurse -Force .next
npm run dev

# macOS / Linux
rm -rf .next
npm run dev
```

### Digital Twin returns "OpenRouter API key is not configured"

**Cause:** `.env` file is missing or `OPENROUTER_API_KEY` is not set.

**Fix:**

1. Create `.env` in the project root
2. Add `OPENROUTER_API_KEY=your-key`
3. Restart the dev server (`Ctrl+C`, then `npm run dev`)

### Digital Twin returns "Failed to get a response from the AI model"

**Possible causes:**

- Invalid or expired API key
- OpenRouter service outage
- Free model rate limit reached

**Fix:** Verify your key at [openrouter.ai/keys](https://openrouter.ai/keys). Check the terminal for detailed server logs.

### `npm install` fails with network error

**Fix:** Retry the install. If behind a corporate proxy, configure npm:

```bash
npm config set proxy http://your-proxy:port
npm config set https-proxy http://your-proxy:port
```

### Port 3000 already in use

**Fix:** Either stop the other process or run on a different port:

```bash
# Windows PowerShell
$env:PORT=3001; npm run dev

# macOS / Linux
PORT=3001 npm run dev
```

### Chat works in dev but not after deployment

**Fix:** Ensure `OPENROUTER_API_KEY` is set in your hosting platform's environment variables (not just in local `.env`).

---

## npm Scripts Reference

| Command | Description |
|---|---|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Create optimized production build |
| `npm run start` | Serve production build (run `build` first) |
| `npm run lint` | Run ESLint across the project |
| `npm install` | Install all dependencies |

---

## Additional Documentation

| File | Description |
|---|---|
| [tutorial.md](./tutorial.md) | Beginner-friendly walkthrough of how the project was built, with code samples |
| [review.md](./review.md) | Comprehensive code review with security, accessibility, and improvement recommendations |

---

## Browser Support

Modern evergreen browsers:

- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)

Requires JavaScript enabled for navigation menu, scroll animations, and Digital Twin chat.

---

## License

This project is private (`"private": true` in `package.json`). All rights reserved.

---

## Author

**Muhammad Ahmed Abdelhadi**  
Angular Developer · Maadi, Cairo, Egypt

- GitHub: [github.com/Muhabdhadi](https://github.com/Muhabdhadi)
- LeetCode: [leetcode.com/Muhabdhadi](https://leetcode.com/Muhabdhadi)
- Email: muhabdhadi@gmail.com
