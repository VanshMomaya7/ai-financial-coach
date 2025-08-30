# AI Financial Coach Landing Page

A sleek, Apple-inspired landing page for the AI Financial Coach product, built with React, TailwindCSS, and Framer Motion.

## 🎨 Design Features

- **Apple-inspired design**: Clean, minimal, premium aesthetic with lots of whitespace
- **Responsive layout**: Optimized for all device sizes
- **Smooth animations**: Framer Motion powered transitions and micro-interactions
- **Modern typography**: Elegant font hierarchy with bold headlines and light subtext
- **Premium color scheme**: Blue accent color with monochrome/white theme

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd ai-financial-coach-landing
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:3000`

## 📁 Project Structure

```
├── src/
│   ├── components/
│   │   └── LandingPage.jsx    # Main landing page component
│   ├── App.jsx                # Root app component
│   ├── main.jsx              # React entry point
│   └── index.css             # Global styles and TailwindCSS
├── public/                   # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies and scripts
├── tailwind.config.js       # TailwindCSS configuration
├── postcss.config.js        # PostCSS configuration
└── vite.config.js          # Vite build configuration
```

## 🎯 Landing Page Sections

1. **Hero Section**: Bold headline with product mockup and primary CTA
2. **Problem Statement**: Why traditional financial advice fails
3. **Solution Overview**: AI Financial Coach features and benefits
4. **How It Works**: 3-step process explanation
5. **Benefits**: Why users will love the product
6. **Trust & Security**: Data protection and privacy assurance
7. **Final CTA**: Email capture form for waitlist
8. **Footer**: Simple navigation and branding

## 🛠️ Technologies Used

- **React 18**: Modern React with hooks and functional components
- **TailwindCSS**: Utility-first CSS framework for rapid styling
- **Framer Motion**: Production-ready motion library for React
- **Lucide React**: Beautiful, customizable icons
- **Vite**: Fast build tool and development server

## 🎨 Customization

### Colors
The color scheme can be customized in `tailwind.config.js`:
- Primary blue: `primary-600` (#2563eb)
- Gray scale: `gray-50` to `gray-900`

### Animations
Custom animations are defined in `tailwind.config.js`:
- `fade-in`: Opacity transition
- `slide-up`: Slide up with opacity
- `float`: Gentle floating animation

### Typography
Uses Apple's system font stack:
- `-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif`

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
