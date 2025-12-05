# Xtract - AI Automation Solutions

A modern, responsive landing page for AI automation services built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- ✨ Modern UI with smooth animations using Framer Motion
- 🎨 Dark theme with purple accent colors
- 📱 Fully responsive design
- ⚡ Fast performance with Vite
- 🎯 SEO optimized
- 🔄 Client-side routing with React Router
- 💅 Styled with Tailwind CSS v4

## 📦 Tech Stack

- **Framework:** React 19
- **Language:** TypeScript
- **Build Tool:** Vite
- **Styling:** Tailwind CSS v4
- **Animations:** Framer Motion
- **Icons:** Lucide React
- **Routing:** React Router DOM

## 🛠️ Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type check
npm run typecheck

# Lint code
npm run lint
```

## 🌐 Deployment on Vercel

### Quick Deploy

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Vite and configure settings
5. Click "Deploy"

### Manual Configuration

If needed, use these settings:

- **Framework Preset:** Vite
- **Build Command:** `npm run build`
- **Output Directory:** `dist`
- **Install Command:** `npm install`

### Environment Variables

No environment variables are required for this project.

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # React components
│   │   ├── animate-ui/      # Animation components
│   │   ├── ui/              # UI components
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── Services.tsx
│   │   └── ...
│   ├── pages/               # Page components
│   │   ├── LandingPage.tsx
│   │   └── ContactPage.tsx
│   ├── lib/                 # Utilities
│   ├── App.tsx              # Main app component
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html              # HTML template
├── vite.config.ts          # Vite configuration
├── vercel.json             # Vercel configuration
└── package.json            # Dependencies

```

## 🎨 Key Components

- **Hero:** Animated hero section with star background
- **Services:** Service offerings showcase
- **Benefits:** Key benefits section
- **Process:** Step-by-step process workflow
- **Testimonials:** Customer testimonials
- **FAQ:** Frequently asked questions accordion
- **Pricing:** Pricing plans
- **Contact:** Contact form page

## 🔧 Configuration Files

- `vite.config.ts` - Vite build configuration
- `tsconfig.json` - TypeScript configuration
- `vercel.json` - Vercel deployment settings
- `tailwind.config.ts` - Tailwind CSS configuration

## 📝 License

This project is private and proprietary.

## 🤝 Support

For support, email admin@xtract.com