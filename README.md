# 🚀 Personal Portfolio - R. Cakradana

Welcome to my personal portfolio website! This is a modern, responsive web application built with Nuxt 3, showcasing my work, blog posts, and professional journey.

🌐 **Live Demo**: [rcakradana.id](https://rcakradana.id)

## ✨ Features

- **📱 Responsive Design**: Seamlessly adapts to all screen sizes with mobile-first approach
- **🌓 Dark Mode**: Toggle between light and dark themes for comfortable viewing
- **📝 Blog System**: Dynamic blog posts with markdown support and syntax highlighting
- **💼 Project Showcase**: Interactive portfolio displaying my work and achievements
- **🎤 Talks Section**: Dedicated space for speaking engagements (coming soon)
- **📄 CV Download**: Direct download of my latest resume
- **⚡ Performance**: Optimized with lazy loading, code splitting, and PWA support
- **📊 Analytics**: Integrated with Vercel Analytics and Speed Insights

## 🛠️ Tech Stack

### Frontend Framework
- **[Nuxt 3](https://nuxt.com/)** - The Vue.js Meta-framework
- **[Vue 3](https://vuejs.org/)** - Progressive JavaScript Framework
- **[TypeScript](https://www.typescriptlang.org/)** - Type-safe development

### Styling & UI
- **[Tailwind CSS](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Google Fonts](https://fonts.google.com/)** - Inter, Lora, and Roboto Mono
- **Custom Theme** - Warm brown/orange color palette

### Content Management
- **[Contentful](https://www.contentful.com/)** - Headless CMS for dynamic content
- **[Marked.js](https://marked.js.org/)** - Markdown parser
- **[Highlight.js](https://highlightjs.org/)** - Syntax highlighting

### State Management
- **[Pinia](https://pinia.vuejs.org/)** - Intuitive state management

### Additional Tools
- **[Swiper](https://swiperjs.com/)** - Modern touch slider
- **[@nuxt/image](https://image.nuxtjs.org/)** - Optimized image handling
- **[Vite PWA](https://vite-pwa-org.netlify.app/)** - Progressive Web App support

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ 
- Yarn or npm
- Contentful account with configured space

### Environment Setup

Create a `.env` file in the root directory:

```env
CTF_SPACE_ID=your_contentful_space_id
CTF_CDA_ACCESS_TOKEN=your_contentful_access_token
```

### Installation

```bash
# Clone the repository
git clone https://github.com/cakradana/personal-portofolio.git
cd personal-portofolio

# Install dependencies
yarn install
# or
npm install
```

### Development

```bash
# Start development server
yarn dev
# or
npm run dev
```

Visit `http://localhost:3000` to see your portfolio in action!

### Build & Production

```bash
# Build for production
yarn build
# or
npm run build

# Preview production build
yarn preview
# or
npm run preview

# Generate static site
yarn generate
# or
npm run generate
```

## 📁 Project Structure

```
personal-portofolio/
├── assets/          # Static assets (images, styles)
├── components/      # Vue components
│   ├── Sidebar/     # Navigation sidebar
│   ├── Footer.vue   # Site footer
│   └── ...          # Other UI components
├── pages/           # Nuxt pages
│   ├── index.vue    # Homepage
│   ├── about.vue    # About page
│   ├── blogs/       # Blog pages
│   ├── projects/    # Project pages
│   └── talks/       # Talks section
├── plugins/         # Nuxt plugins
├── public/          # Public static files
├── repositories/    # Data fetching logic
├── stores/          # Pinia stores
├── utils/           # Utility functions
└── nuxt.config.ts   # Nuxt configuration
```

## 🎨 Customization

### Theme Colors
The portfolio uses a warm color scheme defined in `nuxt.config.ts`:
- Primary: Brown/Orange tones
- Backgrounds: Cream/Light brown
- Dark mode: Deep brown backgrounds

### Content Management
All dynamic content (blogs, projects, CV) is managed through Contentful CMS. Update content directly in Contentful without touching the code.

### Typography
Three font families are configured:
- **Inter**: Main body text
- **Lora**: Headings and emphasis
- **Roboto Mono**: Code blocks

## 📱 PWA Features

This portfolio is a Progressive Web App with:
- Offline support
- Install prompt
- App-like experience
- Custom icons for all devices

## 🚀 Deployment

The site is configured for deployment on Vercel with:
- Automatic deployments from main branch
- Environment variables configuration
- Image optimization through Vercel
- Analytics and performance monitoring

## 📊 Performance

- Lighthouse scores: 90+ across all metrics
- Optimized images with lazy loading
- Code splitting for faster initial loads
- Web Vitals monitoring

## 🤝 Contributing

While this is a personal portfolio, I welcome suggestions and feedback! Feel free to:
- Report bugs
- Suggest features
- Submit pull requests

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Author

**R. Cakradana**
- Website: [rcakradana.id](https://rcakradana.id)
- Email: [Get in touch](mailto:rcakradana@gmail.com)
- LinkedIn: [Connect with me](https://linkedin.com/in/rcakradana)

---

Built with ❤️ using Nuxt 3