# DLJ LLC - Tech Consulting Website

A minimalist, high-end company website built with Hugo Extended, Tailwind CSS, Alpine.js, and Plausible Analytics. Inspired by Apple's design philosophy, focusing on simplicity, clarity, and function.

## 🚀 Quick Start

### Prerequisites
- Hugo Extended (v0.110.0 or later)
- Node.js (v18 or later)
- npm or yarn

### Development Setup with Devbox

1. **Install Devbox** (if not already installed):
   ```bash
   curl -fsSL https://get.jetpack.io/devbox | bash
   ```

2. **Clone and navigate to the project**:
   ```bash
   cd /home/david/dljllc
   ```

3. **Start Devbox shell**:
   ```bash
   devbox shell
   ```

4. **Setup the project** (run once):
   ```bash
   devbox run setup
   ```

5. **Start development server**:
   ```bash
   devbox run dev
   ```

6. **Open in browser**:
   Visit `http://localhost:1313`

### Alternative: Manual Setup

If you prefer not to use Devbox:

1. Install Hugo Extended (v0.121.1+) and Node.js (v18+)
2. Run `hugo mod init github.com/dljllc/website`
3. Run `npm install`
4. Run `hugo server -D --bind 0.0.0.0`

## 📁 Project Structure

```
├── devbox.json             # Devbox environment configuration
├── devbox.lock             # Devbox lockfile for reproducible builds
├── .devcontainer/          # VS Code dev container configuration (optional)
├── assets/
│   ├── css/
│   │   └── input.css       # Tailwind CSS input file
│   └── js/
│       └── main.js         # Alpine.js components and utilities
├── content/
│   ├── blog/               # Blog posts
│   ├── _index.md           # Homepage content
│   ├── services.md         # Services page
│   ├── contact.md          # Contact page
│   └── privacy.md          # Privacy policy
├── layouts/
│   ├── _default/
│   │   ├── baseof.html     # Base template
│   │   ├── single.html     # Single page template
│   │   ├── list.html       # List page template
│   │   └── contact.html    # Contact page template
│   ├── partials/
│   │   ├── head.html       # HTML head with CSS/JS processing
│   │   ├── header.html     # Site header and navigation
│   │   ├── footer.html     # Site footer
│   │   └── scripts.html    # Additional scripts
│   └── index.html          # Homepage template
├── static/
│   ├── robots.txt          # SEO robots file
│   └── favicon.svg         # Site favicon
├── config.yaml             # Hugo configuration
├── tailwind.config.js      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
├── package.json            # Node.js dependencies
└── go.mod                  # Hugo modules
```

## 🎨 Design System

### Colors
- **Primary**: `#2563eb` (Deep blue)
- **Neutral White**: `#FFFFFF`
- **Neutral Light**: `#F7F7F7`
- **Neutral Gray**: `#D1D5DB`
- **Neutral Dark**: `#6B7280`

### Typography
- **Font Family**: Inter (with SF Pro fallback)
- **Base Size**: 16px
- **Heading Size**: 24px
- **Hero Size**: 48px
- **Line Height**: 1.5-1.7

### Components
- **Buttons**: `.btn-primary`, `.btn-secondary`
- **Cards**: `.glass-card` (glassmorphism effect)
- **Forms**: `.form-input`, `.form-textarea`
- **Gradients**: `.gradient-bg`, `.hero-gradient`

## 🛠 Technologies

- **Hugo Extended**: Static site generator with SCSS support
- **Tailwind CSS**: Utility-first CSS framework
- **Alpine.js**: Lightweight JavaScript framework
- **Plausible Analytics**: Privacy-friendly analytics
- **PostCSS**: CSS processing with Autoprefixer

## 📝 Content Management

### Adding Blog Posts

1. Create a new markdown file in `content/blog/`:
   ```bash
   hugo new blog/your-post-title.md
   ```

2. Update the front matter:
   ```yaml
   ---
   title: "Your Post Title"
   description: "Brief description for SEO"
   date: 2024-01-15
   author: "Author Name"
   categories: ["Category1", "Category2"]
   tags: ["tag1", "tag2", "tag3"]
   featured_image: "/images/blog/your-image.jpg"
   ---
   ```

3. Write your content in Markdown

### Updating Services

Edit `content/services.md` to update service offerings, case studies, and pricing information.

### Modifying Contact Information

Update contact details in:
- `content/contact.md` - Contact page content
- `config.yaml` - Site-wide contact information
- `layouts/partials/footer.html` - Footer contact details

## 🔧 Configuration

### Plausible Analytics

Update `config.yaml` with your domain:
```yaml
params:
  plausible:
    domain: 'yourdomain.com'
    script: 'https://plausible.io/js/script.js'
```

### SEO Settings

Update meta information in `config.yaml`:
```yaml
params:
  meta:
    author: 'Your Company'
    description: 'Your company description'
    keywords: 'your, keywords, here'
```

### Social Media

Add social media links in `config.yaml`:
```yaml
params:
  social:
    twitter: 'https://twitter.com/yourhandle'
    linkedin: 'https://linkedin.com/company/yourcompany'
    github: 'https://github.com/yourcompany'
```

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

This generates the static site in the `public/` directory.

### Deploy to Netlify

1. Connect your repository to Netlify
2. Set build command: `hugo --minify`
3. Set publish directory: `public`
4. Set Hugo version in environment variables: `HUGO_VERSION=0.110.0`

### Deploy to Vercel

1. Connect your repository to Vercel
2. Framework preset: Hugo
3. Build command: `hugo --minify`
4. Output directory: `public`

## 📊 Performance

### Optimization Features

- **CSS**: Minified and fingerprinted
- **JavaScript**: Bundled, minified, and fingerprinted
- **Images**: Optimized with Hugo's image processing
- **Fonts**: Preloaded for better performance
- **Analytics**: Privacy-friendly, no cookies

### Performance Targets

- **Lighthouse Score**: 95+ across all metrics
- **Load Time**: Under 3 seconds
- **First Contentful Paint**: Under 1.5 seconds
- **Cumulative Layout Shift**: Under 0.1

## 🔍 SEO Features

- **Meta Tags**: Comprehensive meta tag implementation
- **Open Graph**: Social media sharing optimization
- **Schema.org**: Structured data for better search results
- **Sitemap**: Automatically generated
- **Robots.txt**: Search engine crawling instructions
- **Canonical URLs**: Prevent duplicate content issues

## 🌐 Internationalization

The site supports multiple languages. To add a new language:

1. Update `config.yaml` languages section
2. Create language-specific content files
3. Add translations in `i18n/` directory

## 🤝 Contributing

1. Follow the existing code style and conventions
2. Test changes locally before committing
3. Update documentation for new features
4. Ensure accessibility compliance (WCAG 2.1)

## 📞 Support

For questions or issues:
- Email: hello@dljllc.com
- Phone: (555) 123-4567

## 📄 License

This project is proprietary to DLJ LLC. All rights reserved.