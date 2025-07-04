# 🌟 3D Portfolio Website

A modern, interactive 3D portfolio website built with React, Three.js, and cutting-edge web technologies. Features stunning 3D animations, smooth scrolling, and responsive design.

![Portfolio Preview](https://img.shields.io/badge/React-18.2.0-blue?style=for-the-badge&logo=react)
![Three.js](https://img.shields.io/badge/Three.js-0.155.0-green?style=for-the-badge&logo=three.js)
![Vite](https://img.shields.io/badge/Vite-4.4.5-purple?style=for-the-badge&logo=vite)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.3.3-blue?style=for-the-badge&logo=tailwindcss)

## ✨ Features

- **🎨 Interactive 3D Models** - Desktop PC and planet models with realistic lighting
- **🌟 Smooth Animations** - Powered by Framer Motion for fluid user experience
- **📱 Fully Responsive** - Optimized for desktop, tablet, and mobile devices
- **🎯 Modern UI/UX** - Clean design with glassmorphism effects and modern typography
- **⚡ Fast Performance** - Built with Vite for lightning-fast development and builds
- **📧 Contact Form** - Integrated EmailJS for seamless communication
- **🔄 Animated Components** - Floating elements, rotating models, and scroll-triggered animations

## 🚀 Live Demo

[View Live Portfolio](your-portfolio-url.com) <!-- Replace with your actual URL -->

## 🛠️ Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Three.js** - 3D graphics and WebGL rendering
- **React Three Fiber** - React renderer for Three.js
- **React Three Drei** - Useful helpers for React Three Fiber
- **Framer Motion** - Advanced animations and transitions
- **TailwindCSS** - Utility-first CSS framework

### Development Tools
- **Vite** - Next-generation frontend tooling
- **PostCSS** - CSS post-processing
- **Autoprefixer** - Automatic vendor prefixing

### Additional Libraries
- **EmailJS** - Client-side email sending
- **React Router DOM** - Client-side routing
- **React Tilt** - Tilt hover effects
- **React Vertical Timeline** - Timeline components
- **React CountUp** - Number animation effects
- **Maath** - Math utilities for 3D applications

## 📦 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Setup
1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/3d-portfolio.git
   cd 3d-portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

## 🔧 Available Scripts

- `npm run dev` - Start development server with hot reload
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally

## 📁 Project Structure

```
portfolio-3d/
├── public/                 # Static assets
│   ├── desktop_pc/        # 3D model files for desktop PC
│   ├── planet/            # 3D model files for planet
│   └── logo.svg           # Site logo
├── src/
│   ├── assets/            # Images and icons
│   │   ├── company/       # Company logos
│   │   └── tech/          # Technology icons
│   ├── components/        # React components
│   │   ├── canvas/        # 3D canvas components
│   │   ├── About.jsx      # About section
│   │   ├── Contact.jsx    # Contact form
│   │   ├── Experience.jsx # Work experience
│   │   ├── Hero.jsx       # Landing section
│   │   ├── Navbar.jsx     # Navigation
│   │   ├── Tech.jsx       # Technologies section
│   │   └── Works.jsx      # Projects showcase
│   ├── constants/         # Static data and configurations
│   ├── hoc/              # Higher-order components
│   ├── utils/            # Utility functions
│   ├── styles.js         # Tailwind utility classes
│   └── App.jsx           # Main app component
├── index.html            # Entry HTML file
├── package.json          # Dependencies and scripts
├── tailwind.config.js    # Tailwind configuration
├── vite.config.js        # Vite configuration
└── README.md             # Project documentation
```

## 🎨 Customization

### Adding New 3D Models
1. Place your `.gltf` or `.glb` files in the `public/` directory
2. Import and use them in your canvas components
3. Adjust lighting and positioning as needed

### Modifying Content
- Update personal information in `src/constants/index.js`
- Replace images in `src/assets/`
- Customize colors and styles in `tailwind.config.js`

### Environment Variables
Create a `.env` file for sensitive configurations:
```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## 🚀 Deployment

### Vercel (Recommended)
1. Connect your GitHub repository to Vercel
2. Configure build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
3. Deploy automatically on every push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`

### Manual Deployment
```bash
npm run build
# Upload the 'dist' folder to your hosting provider
```

## 🎯 Performance Optimization

- 3D models are optimized for web delivery
- Lazy loading implemented for components
- Image optimization with proper formats
- Code splitting for better load times
- Efficient Three.js rendering with proper disposal

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👤 Author

**Your Name** <!-- Replace with your name -->
- Portfolio: [your-portfolio.com](ameen-showcase.netlify.app)
- LinkedIn: [your-linkedin](https://linkedin.com/in/ameen-pk)
- GitHub: [your-github](https://github.com/ami-inn)
- Email: your.email@example.com

## 🙏 Acknowledgments

- [Three.js](https://threejs.org/) for amazing 3D capabilities
- [React Three Fiber](https://docs.pmnd.rs/react-three-fiber) community
- [Framer Motion](https://www.framer.com/motion/) for smooth animations
- [TailwindCSS](https://tailwindcss.com/) for utility-first styling

---

⭐ Star this repository if you found it helpful!

**Happy Coding! 🚀**
