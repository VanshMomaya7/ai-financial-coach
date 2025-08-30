# AI Financial Coach Landing Page

A sleek, Apple-inspired landing page for the AI Financial Coach product, built with React, TailwindCSS, and Framer Motion.

## 🎨 Design Features

- **Apple-inspired design**: Clean, minimal, premium aesthetic with lots of whitespace
- **Responsive layout**: Optimized for all device sizes
- **Smooth animations**: Framer Motion powered transitions and micro-interactions
- **Modern typography**: Elegant font hierarchy with bold headlines and light subtext
- **Premium color scheme**: Blue accent color with monochrome/white theme
- **Glass morphism effects**: Beautiful backdrop blur and transparency effects
- **Three.js particle background**: Interactive animated background
- **Dark/Light theme toggle**: Seamless theme switching

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/VanshMomaya7/ai-financial-coach.git
cd ai-financial-coach
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   ├── LandingPage.jsx      # Main landing page component
│   │   └── ParticleBackground.jsx # Three.js particle background
│   ├── App.jsx                  # Root app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles and TailwindCSS
├── public/                     # Static assets
├── index.html                 # HTML template
├── package.json               # Dependencies and scripts
├── tailwind.config.js         # TailwindCSS configuration
├── postcss.config.js          # PostCSS configuration
└── vite.config.js            # Vite build configuration
```

## 🎯 Landing Page Sections

1. **Hero Section**: Bold headline with Three.js particle background and primary CTA
2. **Features Section**: Glass morphism cards with AI-powered features
3. **Charts Section**: Interactive financial charts with Recharts
4. **Agentic AI Section**: AI coach visualization and capabilities
5. **Final CTA**: Email capture form for waitlist
6. **Footer**: Simple navigation and branding

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Production-ready motion library for React
- **GSAP**: Professional-grade animations and scroll triggers
- **Three.js**: 3D graphics and particle systems
- **Recharts**: Beautiful, composable charting library
- **Lucide React**: Beautiful, customizable icons
- **Vite**: Fast build tool and development server

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary accent: `#F5F3BB` (SeaSalt yellow)
- Granite theme: Dark/Light mode support
- Purple gradients: For chart elements

### Animations
Custom animations are defined in `tailwind.config.js`:
- `fade-in`: Opacity transition
- `slide-up`: Slide up with opacity
- `float`: Gentle floating animation
- `glow`: Pulsing glow effect
- `pulse-slow`: Slow pulse animation

### Glass Morphism
Feature cards use glass morphism effects:
- `backdrop-filter: blur(20px)`
- Semi-transparent backgrounds
- Smooth borders and shadows

## 📱 Responsive Design

The landing page is fully responsive with breakpoints:
- Mobile: Default (320px+)
- Tablet: `md:` (768px+)
- Desktop: `lg:` (1024px+)

## 🚀 Build for Production

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For questions or support, please open an issue in the repository.
